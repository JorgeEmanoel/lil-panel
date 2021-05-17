import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      console.log(payload);
      state.user = payload;
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
});
