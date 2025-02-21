import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Change this if needed

// Fetch all promotions
export const getPromotions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/promotions`);
    return response;
  } catch (error) {
    console.error('Error fetching promotions:', error);
    throw error;
  }
};

// Fetch all users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
