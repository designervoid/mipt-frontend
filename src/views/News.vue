<template lang="html">
  <div>
    <main-header></main-header>
    <div class="container">
      <div class="columns">
        <main-sidebar ref="sidebar_menu"></main-sidebar>
        <div class="column is-12" v-bind:style="{ 'padding-left': paddingMainBlock, 'transition': '0.55s all ease'  }">
          <div class="container">
            <div class="wrapped-container">
              <div class="columns">
                <div class="column is-12">
                  <div class="wrapped-header">
                    <h1 class="title news-header-text" v-bind:class="!isMobile ? 'is-2' : 'is-4'">Новости</h1>
                    <div class="filter-buttons">
                      <b-button v-if="selectedMarks.length > 0"
                        type="is-light clear-selected-marks"
                      @click="clearMarks();">Очистить метки</b-button>
                      <b-dropdown
                          v-model="selectedMarks"
                          multiple
                          aria-role="list">
                          <button class="button is-info selected-marks" type="button" slot="trigger">
                              <span v-if="selectedMarks.length > 0">Выбрано меток ({{ selectedMarks.length }})</span>
                              <span v-else>Выбрать метки</span>
                          </button>

                          <b-dropdown-item v-for="(pieceOfNews, index) in news" :key="index"
                          :value="pieceOfNews.mark.text"
                          aria-role="listitem"
                          >
                              <span>{{ pieceOfNews.mark.text }}</span>
                          </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </div>
                  <BlockNews v-for="(pieceOfNews, index) in news" :key="index"
                  :header="pieceOfNews.header"
                  :shortDescription="pieceOfNews.shortDescription"
                  :text="pieceOfNews.text"
                  :mark="pieceOfNews.mark"
                  :selectedMarks="selectedMarks"/>
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
import { mapState } from 'vuex';
import BlockNews from "@/components/BlockNews.vue";

export default {
  components: {
    BlockNews
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      moveMainBlock: false,
      news: [
        {
          header: 'Профилактика короновируса',
          shortDescription: 'В связи с эпидемией короновируса просьба студентам прочитать следующую памятку.',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          mark: {
            text: 'Общее',
            color: 'black'
          }
        },
        {
          header: 'Профилактика короновируса',
          shortDescription: 'В связи с эпидемией короновируса просьба студентам прочитать следующую памятку.',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          mark: {
            text: 'Зюзино',
            color: 'orange'
          }
        }
      ],
      selectedMarks: [],
    };
  },
  computed: {
    ...mapState('sidebar', ['paddingMainBlock']),
    isMobile() {
      return this.windowWidth < 979;
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  methods: {
    clearMarks() {
      this.selectedMarks = [];
    }
  }
};
</script>

<style lang="css" scoped>
.wrapped-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.news-header-text {
  margin-bottom: 0 !important;
}
.wrapped-container {
  padding: 2rem;
}
.request-button {
  margin-top: 2rem;
  width: 409px;
  height: 64px;
}
a.dropdown-item.is-active {
  background-color: #209cee !important;
}
.clear-selected-marks {
  margin-right: 0.5rem;
}
.selected-marks {
  min-width: 200px;
}

@media screen and (max-width: 979px) {
  .request-button {
    width: 100%;
  }
}

@media screen and (max-width: 573px) {
  .wrapped-header {
    display: flex;
    flex-direction: column;
  }
  .title.news-header-text.is-4 {
    margin-bottom: 1rem !important;
  }
  .filter-buttons {
    flex-direction: column;
    width: 100%;
  }
  .clear-selected-marks {
    margin-bottom: 1rem;
    width: 100%;
  }
  .dropdown.is-mobile-modal,
  .dropdown-trigger,
  button.selected-marks {
    width: 100% !important;
  }
}

</style>
