<template>
  <sidebar-menu
    :menu="sidebarNavigation"
    @toggle-collapse="onToggleCollapse"
    width="250px"
    widthCollapsed="50px"
    :collapsed="true"
    ref="sidebar_menu"
    theme="white-theme"
  >
    <span slot="toggle-icon">Open menu</span>
  </sidebar-menu>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("sidebar", ["sidebarHeader", "sidebarNavigation"])
  },
  methods: {
    ...mapActions("sidebar", ["changeStateOfPadding"]),
    onToggleCollapse(collapsed) {
      this.changeStateOfPadding({ isCollapsed: collapsed });
    }
  }
};
</script>
<style lang="css">
.menu {
  padding: 1rem;
}

@media screen and (max-width: 979px) {
  .column.is-3 {
    display: none;
  }
}
</style>
