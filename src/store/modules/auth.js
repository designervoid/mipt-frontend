import router from '@/router';
import {
  SET_USER
} from '@/store/mutation-types'

const state = {};

const getters = {};

const actions = {
  async getToken({
    commit
  }, payload) {
    try {
      const email = payload.email;
      const password = payload.password;
      console.log(email, password);
      commit(SET_USER, 'user from api', {
        root: true,
      })
      router.push('/user-profile')
    } catch (error) {
      console.error(error);
    }
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
