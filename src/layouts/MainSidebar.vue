<template>
  <sidebar-menu
    :menu="sidebarNavigation"
    @toggle-collapse="onToggleCollapse"
    width="80px"
    widthCollapsed="50px"
    :collapsed="isCollapsed"
    ref="sidebar_menu"
    :style="{ display: isHideSidebar ? 'none' : 'flex' }"
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
    ...mapState("sidebar", [
      "sidebarHeader",
      "sidebarNavigation",
      "isCollapsed",
      "isHideSidebar"
    ])
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
  margin: 0 !important;
}
.vsm--header,
.vsm--title {
  font-size: 0.5rem !important;
}

.vsm--link {
  width: 100%;
  display: flex !important;
  justify-content: center !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.vsm--item {
  display: flex !important;
  width: 100%;
  transition: top 0.55s all ease;
}
/* .vsm--toggle-btn {
  margin-bottom: 100px;
} */
.vsm--mobile-bg {
  display: none;
}
.vsm--mobile-item {
  display: none;
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
