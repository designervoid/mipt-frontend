<template>
  <sidebar-menu
    :menu="sidebarNavigation"
    @toggle-collapse="onToggleCollapse"
    width="150px"
    widthCollapsed="50px"
    :collapsed="true"
    ref="sidebar_menu"
  >
    <span slot="toggle-icon"><i class="fas fa-arrow-right"></i></span>
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
.vsm--icon {
  background-color: #2a2a2e !important;
  color: #ffffff !important;
}
.vsm--title {
  font-size: 0.5rem;
}
.vsm--icon:active {
  background-color: black !important;
  color: white !important;
}
@media screen and (max-width: 979px) {
  .column.is-3 {
    display: none;
  }
}
</style>
