import Vue from "vue";
import Vuex from "vuex";
import tokenHandling from "@/store/modules/tokenHandler";
import auth from "@/store/modules/auth";
import sidebar from "@/store/modules/sidebar";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tokenHandling,
    auth,
    sidebar
  }
});
