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
        <a class="navbar-item" @click="pushToPersonalArea()">
          Личный кабинет
        </a>

        <a class="navbar-item" @click="pushToContactsProfile()">
          Профиль
        </a>

        <a class="navbar-item" @click="exit()">
          Выход
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isToggledMenu: false
    };
  },
  methods: {
    ...mapActions("sidebar", ["changeSidebarHeader", "changeStateOfPadding"]),
    toggleMenu() {
      this.isToggledMenu = !this.isToggledMenu;
    },
    pushToPersonalArea() {
      this.changeSidebarHeader({ headerText: "Личный кабинет" });
      this.changeStateOfPadding({ isCollapsed: true });
      if (this.$route.path !== "/news") this.$router.push("/news");
    },
    pushToContactsProfile() {
      this.changeSidebarHeader({ headerText: "Профиль" });
      this.changeStateOfPadding({ isCollapsed: true });
      if (this.$route.path !== "/data-profile")
        this.$router.push("/data-profile");
    },
    exit() {
      this.changeSidebarHeader({ headerText: "" });
      this.$router.push("/login");
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
  margin-left: 5rem;
}
.navbar-item,
.navbar-link {
  text-align: center;
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
