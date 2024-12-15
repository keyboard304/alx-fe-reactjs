import axios from 'axios';

// Define the base GitHub API URL for user searches
const GITHUB_API_URL = 'https://api.github.com/users/';

// Async function to fetch GitHub user data by username
const fetchUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${username}`);
    return response.data; // Return user data on success
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error; // Rethrow the error for handling in components
  }
};

export default fetchUser; // Export the function for use in other parts of the app
