import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

const Search = () => {
  const [searchType, setSearchType] = useState('basic');
  const [basicUsername, setBasicUsername] = useState('');
  const [advancedQuery, setAdvancedQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (!basicUsername.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);
    setSearchResults([]);

    try {
      const data = await fetchUserData(basicUsername);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    if (!advancedQuery.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);
    setSearchResults([]);

    try {
      const query = {
        q: advancedQuery,
        location: location,
        repos: minRepos ? `>${minRepos}` : ''
      };
      const data = await searchUsers(query);
      setSearchResults(data.items || []);
    } catch (err) {
      setError('Failed to search users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      {/* Search Type Toggle */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setSearchType('basic')}
          className={`px-4 py-2 font-medium ${
            searchType === 'basic'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Basic Search
        </button>
        <button
          onClick={() => setSearchType('advanced')}
          className={`px-4 py-2 font-medium ${
            searchType === 'advanced'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Advanced Search
        </button>
      </div>

      {/* Basic Search Form */}
      {searchType === 'basic' && (
        <form onSubmit={handleBasicSearch} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={basicUsername}
              onChange={(e) => setBasicUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            >
              Search
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
                Username or Name
              </label>
              <input
                type="text"
                value={advancedQuery}
                onChange={(e) => setAdvancedQuery(e.target.value)}
                placeholder="e.g., john location:london"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., london"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Repositories
              </label>
              <input
                type="number"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                placeholder="e.g., 10"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300"
          >
            Advanced Search
          </button>
        </form>
      )}

      {/* Loading and Error States */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      
      {error && (
        <div className="text-center text-red-500 bg-red-50 p-4 rounded-md">
          {error}
        </div>
      )}

      {/* Basic Search Results */}
      {userData && (
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-4">User Found:</h3>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-20 h-20 rounded-full"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold">{userData.name || userData.login}</h2>
              <p className="text-gray-600">{userData.bio}</p>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <span>Ì≥ç {userData.location || 'Not specified'}</span>
                <span>Ì±• Followers: {userData.followers}</span>
                <span>Ì¥ù Following: {userData.following}</span>
                <span>Ì≥¶ Repos: {userData.public_repos}</span>
              </div>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Advanced Search Results */}
      {searchResults.length > 0 && (
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-4">
            Found {searchResults.length} users:
          </h3>
          <div className="space-y-4">
            {searchResults.map((user) => (
              <div key={user.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{user.login}</h4>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
