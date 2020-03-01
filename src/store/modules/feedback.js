// import http from '@/store/helpers/http'
import { SET_FEEDBACKS } from "@/store/mutation-types";

const state = {
  feedbacks: [
    {
      question: 'Здравствуйте! Вопрос?',
      answer: {
        boolean: true,
        text: 'Здравствуйте! Тут ответ'
      },
      date: '20:30, 19.03.2020',
    },
    {
      question: 'Здравствуйте! Другой вопрос?',
      answer: {
        boolean: false,
        text: ''
      },
      date: '14:30, 27.03.2020',
    }
  ]
};

const getters = {};

const actions = {
  // getFeedbacks
  sendFeedback({ commit }, payload) {
    // const title = payload.title;
    const question = payload.question;
    let today = new Date();
    let dateToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const object = {
      question: question,
      answer: {
        boolean: false,
        text: ''
      },
      date: dateToday,
    }
    commit(SET_FEEDBACKS, object);
  }
};

const mutations = {
  [SET_FEEDBACKS](state, payload) {
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
