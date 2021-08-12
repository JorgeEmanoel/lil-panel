import axios from 'axios';
import store from '@/store';
import router from '@/router';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

api.interceptors.request.use(
    function(config) {
      const user = store.getters.getUser;

      if (user && user.token) {
        config.headers['Authorization'] = user.token;
      }

      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
);

api.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (error.response.status === 401) {
        store.commit('setUser', null);
        router.push({path: '/'});
      }

      return Promise.reject(error);
    },
);

export default api;
