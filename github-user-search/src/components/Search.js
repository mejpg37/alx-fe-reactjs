import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

function Search() {
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

  return React.createElement('div', { 
    className: 'max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md' 
  }, [
    React.createElement('div', { 
      key: 'toggle',
      className: 'flex border-b border-gray-200 mb-6' 
    }, [
      React.createElement('button', {
        key: 'basic',
        onClick: () => setSearchType('basic'),
        className: `px-4 py-2 font-medium ${
          searchType === 'basic'
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-500 hover:text-gray-700'
        }`
      }, 'Basic Search'),
      React.createElement('button', {
        key: 'advanced',
        onClick: () => setSearchType('advanced'),
        className: `px-4 py-2 font-medium ${
          searchType === 'advanced'
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-500 hover:text-gray-700'
        }`
      }, 'Advanced Search')
    ]),

    searchType === 'basic' && React.createElement('form', {
      key: 'basic-form',
      onSubmit: handleBasicSearch,
      className: 'mb-6'
    }, 
      React.createElement('div', { className: 'flex gap-2' }, [
        React.createElement('input', {
          key: 'input',
          type: 'text',
          value: basicUsername,
          onChange: (e) => setBasicUsername(e.target.value),
          placeholder: 'Enter GitHub username',
          className: 'flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        }),
        React.createElement('button', {
          key: 'button',
          type: 'submit',
          disabled: loading,
          className: 'px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300'
        }, 'Search')
      ])
    ),

    searchType === 'advanced' && React.createElement('form', {
      key: 'advanced-form',
      onSubmit: handleAdvancedSearch,
      className: 'mb-6'
    }, [
      React.createElement('div', {
        key: 'grid',
        className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'
      }, [
        React.createElement('div', { key: 'query' }, [
          React.createElement('label', {
            key: 'label1',
            className: 'block text-sm font-medium text-gray-700 mb-1'
          }, 'Username or Name'),
          React.createElement('input', {
            key: 'input1',
            type: 'text',
            value: advancedQuery,
            onChange: (e) => setAdvancedQuery(e.target.value),
            placeholder: 'e.g., john location:london',
            className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ]),
        React.createElement('div', { key: 'location' }, [
          React.createElement('label', {
            key: 'label2',
            className: 'block text-sm font-medium text-gray-700 mb-1'
          }, 'Location'),
          React.createElement('input', {
            key: 'input2',
            type: 'text',
            value: location,
            onChange: (e) => setLocation(e.target.value),
            placeholder: 'e.g., london',
            className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ]),
        React.createElement('div', { key: 'repos' }, [
          React.createElement('label', {
            key: 'label3',
            className: 'block text-sm font-medium text-gray-700 mb-1'
          }, 'Min Repositories'),
          React.createElement('input', {
            key: 'input3',
            type: 'number',
            value: minRepos,
            onChange: (e) => setMinRepos(e.target.value),
            placeholder: 'e.g., 10',
            className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ])
      ]),
      React.createElement('button', {
        key: 'adv-button',
        type: 'submit',
        disabled: loading,
        className: 'w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300'
      }, 'Advanced Search')
    ]),

    loading && React.createElement('p', {
      key: 'loading',
      className: 'text-center text-gray-600'
    }, 'Loading...'),

    error && React.createElement('div', {
      key: 'error',
      className: 'text-center text-red-500 bg-red-50 p-4 rounded-md'
    }, error),

    userData && React.createElement('div', {
      key: 'basic-results',
      className: 'border-t pt-4'
    }, [
      React.createElement('h3', {
        key: 'title1',
        className: 'text-lg font-semibold mb-4'
      }, 'User Found:'),
      React.createElement('div', {
        key: 'user-card',
        className: 'flex items-center space-x-4 p-4 bg-gray-50 rounded-lg'
      }, [
        React.createElement('img', {
          key: 'avatar',
          src: userData.avatar_url,
          alt: userData.login,
          className: 'w-20 h-20 rounded-full'
        }),
        React.createElement('div', { 
          key: 'user-info',
          className: 'flex-1' 
        }, [
          React.createElement('h2', {
            key: 'name',
            className: 'text-xl font-bold'
          }, userData.name || userData.login),
          React.createElement('p', {
            key: 'bio',
            className: 'text-gray-600'
          }, userData.bio),
          React.createElement('div', {
            key: 'stats',
            className: 'mt-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'
          }, [
            React.createElement('span', { key: 'location' }, `📍 ${userData.location || 'Not specified'}`),
            React.createElement('span', { key: 'followers' }, `👥 Followers: ${userData.followers}`),
            React.createElement('span', { key: 'following' }, `🤝 Following: ${userData.following}`),
            React.createElement('span', { key: 'repos' }, `📦 Repos: ${userData.public_repos}`)
          ]),
          React.createElement('a', {
            key: 'profile-link',
            href: userData.html_url,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          }, 'View GitHub Profile')
        ])
      ])
    ]),

    searchResults.length > 0 && React.createElement('div', {
      key: 'advanced-results',
      className: 'border-t pt-4'
    }, [
      React.createElement('h3', {
        key: 'title2',
        className: 'text-lg font-semibold mb-4'
      }, `Found ${searchResults.length} users:`),
      React.createElement('div', {
        key: 'results-list',
        className: 'space-y-4'
      }, searchResults.map((user) => 
        React.createElement('div', {
          key: user.id,
          className: 'flex items-center space-x-4 p-4 bg-gray-50 rounded-lg'
        }, [
          React.createElement('img', {
            key: 'avatar',
            src: user.avatar_url,
            alt: user.login,
            className: 'w-16 h-16 rounded-full'
          }),
          React.createElement('div', { 
            key: 'info',
            className: 'flex-1' 
          }, [
            React.createElement('h4', {
              key: 'username',
              className: 'font-semibold'
            }, user.login),
            React.createElement('a', {
              key: 'link',
              href: user.html_url,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-blue-500 hover:underline text-sm'
            }, 'View Profile')
          ])
        ])
      ))
    ])
  ]);
}

export default Search;