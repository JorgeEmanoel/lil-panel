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
      state.user = {...state.user, ...payload};
    },
    freeUser(state, _payload) {
      state.user = null;
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
