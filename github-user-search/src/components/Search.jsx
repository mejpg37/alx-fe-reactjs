import React, { useState } from 'react';
import { fetchUserData, fetchAdvancedSearch } from '../services/githubService';

const Search = () => {
  const [searchType, setSearchType] = useState('basic');
  const [username, setUsername] = useState('');
  const [advancedParams, setAdvancedParams] = useState({
    username: '',
    location: '',
    repos: ''
  });
  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  // Basic Search Handler
  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);
    setSearchResults([]);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  // Advanced Search Handler
  const handleAdvancedSearch = async (e, page = 1) => {
    e.preventDefault();
    if (!advancedParams.username && !advancedParams.location && !advancedParams.repos) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const result = await fetchAdvancedSearch(advancedParams, page);
      setSearchResults(page === 1 ? result.users : [...searchResults, ...result.users]);
      setHasNextPage(result.hasNextPage);
      setCurrentPage(page);
    } catch (err) {
      setError('Error searching users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    await handleAdvancedSearch({ preventDefault: () => {} }, currentPage + 1);
  };

  const handleAdvancedParamChange = (field, value) => {
    setAdvancedParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Search Type Toggle */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSearchType('basic')}
          className={`px-4 py-2 rounded-lg font-medium ${
            searchType === 'basic'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Basic Search
        </button>
        <button
          onClick={() => setSearchType('advanced')}
          className={`px-4 py-2 rounded-lg font-medium ${
            searchType === 'advanced'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Advanced Search
        </button>
      </div>

      {/* Basic Search Form */}
      {searchType === 'basic' && (
        <form onSubmit={handleBasicSearch} className="mb-6">
          <div className="flex space-x-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
      )}

      {/* Advanced Search Form */}
      {searchType === 'advanced' && (
        <form onSubmit={handleAdvancedSearch} className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={advancedParams.username}
                onChange={(e) => handleAdvancedParamChange('username', e.target.value)}
                placeholder="Username contains..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={advancedParams.location}
                onChange={(e) => handleAdvancedParamChange('location', e.target.value)}
                placeholder="User location"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Repositories
              </label>
              <input
                type="number"
                value={advancedParams.repos}
                onChange={(e) => handleAdvancedParamChange('repos', e.target.value)}
                placeholder="Minimum repos"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Searching...' : 'Advanced Search'}
          </button>
        </form>
      )}

      {/* Loading and Error States */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Basic Search Results */}
      {userData && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {userData.name || userData.login}
              </h2>
              <p className="text-gray-600">{userData.bio || 'No bio available'}</p>
              <div className="flex space-x-4 mt-2 text-sm text-gray-500">
                <span>📍 {userData.location || 'No location'}</span>
                <span>📦 {userData.public_repos} repos</span>
                <span>👥 {userData.followers} followers</span>
              </div>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Advanced Search Results */}
      {searchResults.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Found {searchResults.length} users
          </h3>
          {searchResults.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {user.name || user.login}
                  </h4>
                  <p className="text-gray-600 text-sm">{user.bio || 'No bio available'}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-500">
                    <span>📍 {user.location || 'No location'}</span>
                    <span>📦 {user.public_repos} repositories</span>
                    <span>👥 {user.followers} followers</span>
                    <span>🔍 {user.following} following</span>
                  </div>
                </div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}

          {/* Load More Button */}
          {hasNextPage && (
            <div className="text-center mt-6">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;