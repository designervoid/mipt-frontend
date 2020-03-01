// import http from '@/store/helpers/http'
import { SET_REQUISITES } from "@/store/mutation-types";

const state = {
  requisites: [
    {
      key: "faculty",
      text: "Факультет",
      value: "ФОПФ"
    },
    {
      key: "course",
      text: "Курс",
      value: "1 курс магистратуры"
    },
    {
      key: "hostel",
      text: "Общежитие",
      value: "Зюзино"
    },
    {
      key: "floor",
      text: "Этаж",
      value: "5"
    },
    {
      key: "room",
      text: "Комната",
      value: "503-3"
    },
    {
      key: "lengthOfStay",
      text: "Срок проживания",
      value: "1.09.2019-31.08.2021"
    },
    {
      key: "rate",
      text: "Тариф",
      value: "4 руб/день"
    }
  ]
};

const getters = {};

const actions = {
  // getFeedbacks
  // sendUserData({ commit }, payload) {
  //
  // }
};

const mutations = {
  [SET_REQUISITES](state, payload) {
    state.feedbacks.unshift(payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
