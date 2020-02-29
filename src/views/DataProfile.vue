<template lang="html">
  <div>
    <main-header></main-header>
    <div class="container">
      <div v-bind:class="!isMobile ? 'columns' : 'columns-mobile'">
        <main-sidebar v-if="!isMobile"></main-sidebar>
        <div class="column" v-bind:class="isMobile ? 'is-12' : 'is-9'">
          <div class="container">
            <div class="wrapped-container">
              <div class="columns">
                <div class="column is-12">
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">Профиль</h1>
                </div>
              </div>
              <div class="columns">
                <div class="column is-12">
                  Avatar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 979;
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>

<style lang="css" scoped>
.wrapped-container {
  padding: 2rem;
}
.wrapper-for-feedback-button {
  width: 100%;
}
.feedback-button {
  display: flex;
  margin: 0;
}


@media screen and (max-width: 979px) {
  .request-button {
    width: 100%;
  }
}
</style>
