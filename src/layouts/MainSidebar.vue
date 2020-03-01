<template>
  <sidebar-menu :menu="sidebarNavigation" ref="sidebar_menu" />
</template>
<script>
import { mapState } from 'vuex';
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState('sidebar', ['sidebarHeader', 'sidebarNavigation'])
    },
    mounted() {
      // this.$refs.sidebar_menu.isCollapsed = true;
    }
  }
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
