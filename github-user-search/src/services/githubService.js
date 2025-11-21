import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
if (token) {
  api.defaults.headers.common['Authorization'] = `token ${token}`;
}

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('Failed to fetch user data');
  }
};

export const searchUsers = async (queryParams) => {
  try {
    let queryString = queryParams.q;
    
    if (queryParams.location) {
      queryString += ` location:${queryParams.location}`;
    }
    
    if (queryParams.repos) {
      queryString += ` repos:${queryParams.repos}`;
    }

    const response = await api.get('/search/users', {
      params: {
        q: queryString,
        per_page: 10
      }
    });
    
    return response.data;
  } catch (error) {
    throw new Error('Failed to search users');
  }
};