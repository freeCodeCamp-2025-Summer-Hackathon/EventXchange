import api from '../api';

export const authService = {
  register: async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.get('/users', {
      params: {
        email: credentials.email,
        password: credentials.password
      }
    });
    return response.data[0];
  },

  getUser: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  }
};