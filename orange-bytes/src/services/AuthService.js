// filepath: /D:/Work2/orange-bytes/orange-bytes/src/services/authService.js
import api from '../api/index';

export const authService = {
  register: async (userData) => {
    try {
      const response = await api.post('/users/register', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  // Add more auth-related methods here
};