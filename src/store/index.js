import Vue from "vue";
import Vuex from "vuex";
import tokenHandling from "@/store/modules/tokenHandler";
import auth from "@/store/modules/auth";
import sidebar from "@/store/modules/sidebar";
import news from "@/store/modules/news";
import orders from "@/store/modules/orders";
import feedback from "@/store/modules/feedback";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tokenHandling,
    auth,
    sidebar,
    news,
    orders,
    feedback
  }
});
