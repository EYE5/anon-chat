import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/apiController';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: '',
    inputError: true,
    isUserAlreadyExist: false,
    messages: [],
    usersOnline: [],
  },
  mutations: {
    setUserName(state, newValue) {
      state.userName = newValue;
    },
    setError(state, newValue) {
      state.inputError = newValue;
    },
    setUserExits(state, newValue) {
      state.isUserAlreadyExist = newValue;
    },
    setMessages(state, newValue) {
      state.messages.push(newValue);
    },
    getUsersOnline(state, newValue) {
      state.usersOnline = newValue;
    },
  },
  actions: {
    async setUserName(context, newValue) {
      const res = await api.isUserAlreadyExisted(newValue);
      if (res.data === false) {
        context.commit('setUserName', newValue);
        localStorage.setItem('username', newValue);
        await router.push('chatroom');
      } else {
        context.commit('setUserExits', true);
      }
    },
    setError(context, newValue) {
      context.commit('setError', newValue);
    },
    setMessages(context, newValue) {
      context.commit('setMessages', newValue);
    },
    async getUsersOnline(context) {
      const res = await api.getUsersOnline();
      context.commit('getUsersOnline', res.data);
    },
    async setUserOnline(context) {
      const res = await api.setUserOnline(localStorage.getItem('username'));
      context.commit('getUsersOnline', res.data);
    },
  },
  modules: {
  },
});
