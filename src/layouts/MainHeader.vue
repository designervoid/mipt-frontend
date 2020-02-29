<template lang="html">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/user-profile" class="navbar-item navbar-logo">
        <img src="@/assets/mipt_rus_inv.png" alt="" />
      </router-link>

      <a
        role="button"
        ref="navbar_burger"
        class="navbar-burger burger"
        v-bind:class="{ 'is-active': isToggledMenu }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu"
        @click="toggleMenu()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbar-menu"
      class="navbar-menu"
      v-bind:class="{ 'is-active': isToggledMenu }"
    >
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <router-link class="navbar-item" to="/news" @click="pushToPersonalArea();">
          Личный кабинет
        </router-link>

        <router-link class="navbar-item" to="/data-profile" @click="pushToContactsProfile();">
          Профиль
        </router-link>

        <router-link class="navbar-item" to="/login" @click="exit();">
          Выход
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      isToggledMenu: false
    };
  },
  methods: {
    ...mapActions('sidebar', ['changeSidebarHeader']),
    toggleMenu() {
      this.isToggledMenu = !this.isToggledMenu;
    },
    pushToPersonalArea() {
      this.changeSidebarHeader({ headerText: 'Личный кабинет' });
    },
    pushToContactsProfile() {
      this.changeSidebarHeader({ headerText: 'Профиль' });
    },
    exit() {
      this.changeSidebarHeader({ headerText: '' });
    }
  }
};
</script>

<style lang="css" scoped>
nav {
  background-color: #0069b4;
  height: 80px;
}
.navbar-logo {
  margin-left: 3.5rem;
}
.navbar-item,
.navbar-link {
  color: #ffffff;
}

@media screen and (max-width: 979px) {
  nav {
    height: 100%;
  }
  .navbar-burger {
    color: white;
  }
  .navbar-item,
  .navbar-link {
    color: black;
  }
}
</style>
