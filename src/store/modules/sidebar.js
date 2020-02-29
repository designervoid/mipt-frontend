import { SET_SIDEBAR_HEADER, SET_SIDEBAR_NAVIGATION } from "@/store/mutation-types";

const state = {
  sidebarHeader: 'Личный кабинет',
  sidebarNavigation: [
    {
      path: '/news',
      text: 'Новости'
    },
    {
      path: '/requests',
      text: 'Заявки'
    },
    {
      path: '/feedback',
      text: 'Обратная связь'
    },
  ]
};

const getters = {};

const actions = {
  changeSidebarHeader({ commit }, payload) {
    let headerText = payload.headerText;
    commit(SET_SIDEBAR_HEADER, headerText);
    if (headerText === 'Личный кабинет') {
      commit(SET_SIDEBAR_NAVIGATION, [
        {
          path: '/news',
          text: 'Новости'
        },
        {
          path: '/requests',
          text: 'Заявки'
        },
        {
          path: '/feedback',
          text: 'Обратная связь'
        },
      ])
    } else if (headerText === 'Профиль') {
      commit(SET_SIDEBAR_NAVIGATION, [
        {
          path: '/data-profile',
          text: 'Данные профиля'
        },
        {
          path: '/contacts-profile',
          text: 'Контакты'
        },
        {
          path: '/useful-info',
          text: 'Полезная информация'
        },
      ])
    } else if (headerText === 'Выход') {
      commit(SET_SIDEBAR_NAVIGATION, [])
    }
  }
};

const mutations = {
  [SET_SIDEBAR_HEADER](state, payload) {
    state.sidebarHeader = payload;
  },
  [SET_SIDEBAR_NAVIGATION](state, payload) {
    state.sidebarNavigation = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
