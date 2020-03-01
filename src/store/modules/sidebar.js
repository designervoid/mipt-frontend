import {
  SET_SIDEBAR_HEADER,
  SET_SIDEBAR_NAVIGATION,
  SET_PADDING_MAIN_BLOCK,
  SET_HIDDEN_SIDEBAR
} from "@/store/mutation-types";

const state = {
  sidebarHeader: "Личный кабинет",
  sidebarNavigation: [
    {
      href: "/news",
      title: 'Новости',
      icon: "far fa-newspaper"
    },
    {
      href: "/orders",
      title: 'Заявки',
      icon: "far fa-list-alt"
    },
    {
      href: "/feedback",
      title: 'Фидбек',
      icon: "far fa-comment-dots"
    }
  ],
  paddingMainBlock: "50px",
  isCollapsed: true,
  isHideSidebar: false
};

const getters = {};

const actions = {
  changeSidebarHeader({ commit }, payload) {
    let headerText = payload.headerText;
    commit(SET_SIDEBAR_HEADER, headerText);
    if (headerText === "Личный кабинет") {
      commit(SET_SIDEBAR_NAVIGATION, [
        {
          href: "/news",
          icon: "far fa-newspaper"
        },
        {
          href: "/orders",
          icon: "far fa-list-alt"
        },
        {
          href: "/feedback",
          icon: "far fa-comment-dots"
        }
      ]);
    } else if (headerText === "Профиль") {
      commit(SET_SIDEBAR_NAVIGATION, [
        {
          href: "/data-profile",
          icon: "fa fa-user"
        },
        {
          href: "/contacts-profile",
          icon: "fa fa-user"
        },
        {
          href: "/useful-info",
          icon: "fa fa-user"
        }
      ]);
    } else if (headerText === "Выход") {
      commit(SET_SIDEBAR_NAVIGATION, []);
    }
  },
  changeStateOfPadding({ commit }, payload) {
    if (payload.isCollapsed) {
      commit(SET_PADDING_MAIN_BLOCK, "50px");
    } else {
      commit(SET_PADDING_MAIN_BLOCK, "80px");
    }
  },
  fixStateOfPadding({ commit }) {
    commit(SET_PADDING_MAIN_BLOCK, "50px");
  },
  changeStateOfHideSidebar({ commit }) {
    commit(SET_HIDDEN_SIDEBAR);
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
  },
  [SET_HIDDEN_SIDEBAR](state) {
    state.isHideSidebar = !state.isHideSidebar;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
