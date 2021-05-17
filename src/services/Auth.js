import api from './api';

export default {
  register: async (
      username,
      password,
      passwordConfirmation,
  ) => api.post('register', {
    username,
    password,
    passwordConfirmation,
  })
      .then((r) => ({
        ok: true,
        user: r.data.user,
      }))
      .catch((e) => ({
        ok: false,
        message: e.response ?
          e.response.data.message || 'Can not register now' :
          '',
      })),
  login: async (
      username,
      password,
  ) => api.post('login', {
    username,
    password,
  })
      .then((r) => ({
        ok: true,
        user: r.data.user,
      }))
      .catch((e) => ({
        ok: false,
        message: e.response ?
          e.response.data.message || 'Can not register now' :
          '',
      }))
  ,
};
