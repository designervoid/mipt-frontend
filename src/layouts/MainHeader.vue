<template lang="html">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/user-profile" class="navbar-item">
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
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item navbar-dropdown-item">
              About
            </a>
            <a class="navbar-item navbar-dropdown-item">
              Jobs
            </a>
            <a class="navbar-item navbar-dropdown-item">
              Contact
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item navbar-dropdown-item">
              Report an issue
            </a>
          </div>
        </div>

        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Documentation
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isToggledMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.isToggledMenu = !this.isToggledMenu;
    }
  }
};
</script>

<style lang="css" scoped>
nav {
  background-color: #0069b4;
  height: 80px;
}
.navbar-item,
.navbar-link {
  color: black;
}
.navbar-dropdown-item {
  color: black;
}

@media screen and (max-width: 979px) {
  nav {
    height: 100%;
  }
}
</style>
