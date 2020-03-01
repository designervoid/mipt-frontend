import http from "@/store/helpers/http";
import { SET_NEWS } from "@/store/mutation-types";

const state = {
  news: []
};

const getters = {};

const actions = {
  async getNews({ commit }) {
    try {
      const response = await http.get("/api/news/");
      console.log(response);
      const news = response.data.results;
      commit(SET_NEWS, news);
    } catch (error) {
      console.error(error);
    }
  }
};

const mutations = {
  [SET_NEWS](state, payload) {
    state.news = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
