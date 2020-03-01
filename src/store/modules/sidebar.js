import { SET_SIDEBAR_HEADER, SET_SIDEBAR_NAVIGATION, SET_PADDING_MAIN_BLOCK } from "@/store/mutation-types";

const state = {
  sidebarHeader: 'Личный кабинет',
  sidebarNavigation: [
    {
        header: true,
        title: 'Личный кабинет',
        hiddenOnCollapse: true,
    },
    {
      href: '/news',
      title: 'Новости',
      icon: 'fa-caret-down'
    },
    {
      href: '/orders',
      title: 'Заявки',
      icon: 'fa fa-user'
    },
    {
      href: '/feedback',
      title: 'Обратная связь',
      icon: 'fa fa-user'
    }
  ],
  paddingMainBlock: '50px'
};

const getters = {};

const actions = {
  changeSidebarHeader({ commit }, payload) {
    let headerText = payload.headerText;
    commit(SET_SIDEBAR_HEADER, headerText);
    if (headerText === 'Личный кабинет') {
      commit(SET_SIDEBAR_NAVIGATION, [
        {
            header: true,
            title: 'Личный кабинет',
            hiddenOnCollapse: true,
        },
        {
          href: '/news',
          title: 'Новости',
          icon: 'fa fa-user'
        },
        {
          href: '/orders',
          title: 'Заявки',
          icon: 'fa fa-user'
        },
        {
          href: '/feedback',
          title: 'Обратная связь',
          icon: 'fa fa-user'
        }
      ])
    } else if (headerText === 'Профиль') {
      commit(SET_SIDEBAR_NAVIGATION,
        [
          {
              header: true,
              title: 'Профиль',
              hiddenOnCollapse: true,
          },
          {
            href: '/data-profile',
            title: 'Данные профиля',
            icon: 'fa fa-user'
          },
          {
            href: '/contacts-profile',
            title: 'Контакты',
            icon: 'fa fa-user'
          },
          {
            href: '/useful-info',
            title: 'Полезная информация',
            icon: 'fa fa-user'
          }
        ])
    } else if (headerText === 'Выход') {
      commit(SET_SIDEBAR_NAVIGATION, [])
    }
  },
  changeStateOfPadding({commit}, payload) {
    if (payload.isCollapsed) {
      commit(SET_PADDING_MAIN_BLOCK, '50px')
    } else {
      commit(SET_PADDING_MAIN_BLOCK, '250px')
    }
  },
  fixStateOfPadding({ commit }) {
    commit(SET_PADDING_MAIN_BLOCK, '50px')
  }

};

const mutations = {
  [SET_SIDEBAR_HEADER](state, payload) {
    state.sidebarNavigation[0].title = payload;
  },
  [SET_SIDEBAR_NAVIGATION](state, payload) {
    state.sidebarNavigation = payload;
  },
  [SET_PADDING_MAIN_BLOCK](state, payload) {
    state.paddingMainBlock = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
