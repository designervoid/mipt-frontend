// import http from "@/store/helpers/http";
import {
  SET_NEWS
} from "@/store/mutation-types";

const state = {
  news: [{
      header: "новость номер один",
      short_descriptions: "описание номер один",
      text: "текст номер один",
      mark_text: "Зюзино",
      mark_color: "orange",
      date_published: "2020-03-01"
    },
    {
      header: "новость номер два",
      short_descriptions: "описание номер два",
      text: "текст номер два",
      mark_text: "Зезино",
      mark_color: "black",
      date_published: "2020-03-02"
    },
    {
      header: "новость номер три",
      short_descriptions: "описание номер три",
      text: "текст номер три",
      mark_text: "Зузино",
      mark_color: "blue",
      date_published: "2020-03-03"
    },
    {
      header: "новость номер четыре",
      short_descriptions: "описание номер четыре",
      text: "текст номер три",
      mark_text: "Зазино",
      mark_color: "red",
      date_published: "2020-03-04"
    },
    {
      header: "новость номер пять",
      short_descriptions: "описание номер пять",
      text: "текст номер три",
      mark_text: "Зазино",
      mark_color: "red",
      date_published: "2020-03-05"
    }
  ]
};

const getters = {};

const actions = {
  // async getNews({
  //   commit
  // }) {
  //   try {
  //     const response = await http.get("/api/news/");
  //     console.log(response);
  //     const news = response.data.results;
  //     commit(SET_NEWS, news);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
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
