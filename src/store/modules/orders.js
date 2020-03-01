// import http from '@/store/helpers/http'
// SET_CATEGORIES
import { SET_ORDERS } from "@/store/mutation-types";

const state = {
  categories: [
    'Сантехник',
    'Электрик',
    'Плотник'
  ],
  orders: [{
      professionType: "Сантехник",
      descriptionOfProblem: "Протек смеситель",
      progressApproval: "Обработка",
      descriptionOfApproval: "Заявка на рассмотрении",
      date: '20:30, 19.03.2020'
    },
    {
      professionType: "Электрик",
      descriptionOfProblem: "Сгорела лампочка",
      progressApproval: "Подтверждено",
      descriptionOfApproval: "Ждите мастера 2 марта, 14:00-15:00",
      date: '20:30, 19.03.2020'
    },
    {
      professionType: "Плотник",
      descriptionOfProblem: "Сломалась ручка двери",
      progressApproval: "Выполнено",
      descriptionOfApproval: "Подать жалобу",
      date: '20:30, 19.03.2020'
    }
  ]
};

const getters = {};

const actions = {
  // getOrder
  sendOrder({ commit }, payload) {
    const category = payload.category;
    const description = payload.description;
    let today = new Date();
    let dateToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const object = {
      professionType: category,
      descriptionOfProblem: description,
      progressApproval: "Обработка",
      descriptionOfApproval: "Заявка на рассмотрении",
      date: dateToday
    }
    console.log('sending to api', category, description)
    commit(SET_ORDERS, object);
  }
};

const mutations = {
  [SET_ORDERS](state, payload) {
    state.orders.unshift(payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
