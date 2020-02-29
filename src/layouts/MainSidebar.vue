<template>
  <div class="column is-3">
    <aside class="menu">
      <p class="menu-label">
        {{ sidebarHeader }}
      </p>
      <ul class="menu-list">
        <li v-for="(pieceOfNavigation, index) in sidebarNavigation" :key="index">
          <router-link :to="pieceOfNavigation.path">{{ pieceOfNavigation.text }}</router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState('sidebar', ['sidebarHeader', 'sidebarNavigation'])
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
