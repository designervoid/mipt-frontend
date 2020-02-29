import Vue from "vue";
import Vuex from "vuex";
import tokenHandling from "@/store/modules/tokenHandler";
import auth from "@/store/modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tokenHandling,
    auth
  }
});
