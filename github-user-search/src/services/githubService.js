import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchAdvancedSearch = async (searchParams, page = 1) => {
  try {
    let query = '';
    
    if (searchParams.username) {
      query += `${searchParams.username} in:login`;
    }
    
    if (searchParams.location) {
      query += ` location:${searchParams.location}`;
    }
    
    if (searchParams.repos) {
      query += ` repos:>=${searchParams.repos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users`, {
      params: {
        q: query,
        page: page,
        per_page: 10
      }
    });

    // Fetch detailed data for each user
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await axios.get(`https://api.github.com/users/${user.login}`);
        return userDetails.data;
      })
    );

    return {
      users: usersWithDetails,
      total_count: response.data.total_count,
      hasNextPage: response.headers.link && response.headers.link.includes('rel="next"')
    };
  } catch (error) {
    throw error;
  }
};

export { fetchUserData, fetchAdvancedSearch };