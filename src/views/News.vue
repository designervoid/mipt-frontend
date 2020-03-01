<template lang="html">
  <div>
    <main-header></main-header>
    <div class="container">
      <div class="columns">
        <main-sidebar ref="sidebar_menu"></main-sidebar>
        <div
          class="column is-12"
          v-bind:style="{
            'padding-left': paddingMainBlock,
            transition: '0.55s all ease'
          }"
        >
          <div class="container">
            <div class="wrapped-container">
              <div class="columns">
                <div class="column is-12">
                  <div class="wrapped-header">
                    <h1
                      class="title news-header-text"
                      v-bind:class="!isMobile ? 'is-2' : 'is-4'"
                    >
                      Новости
                    </h1>
                    <div class="filter-buttons">
                      <b-button
                        v-if="selectedMarks.length > 0"
                        type="is-light clear-selected-marks"
                        @click="clearMarks()"
                        >Очистить метки</b-button
                      >
                      <b-dropdown
                        v-model="selectedMarks"
                        multiple
                        aria-role="list"
                        @active-change="activateFilterDropdown();"
                      >
                        <button
                          class="button is-info selected-marks"
                          type="button"
                          slot="trigger"
                        >
                          <span v-if="selectedMarks.length > 0"
                            >Выбрано меток ({{ selectedMarks.length }})</span
                          >
                          <span v-else>Выбрать метки</span>
                        </button>

                        <b-dropdown-item
                          v-for="(pieceOfNews, index) in news"
                          :key="index"
                          :value="pieceOfNews.mark_text"
                          aria-role="listitem"
                        >
                          <span>{{ pieceOfNews.mark_text }}</span>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </div>
                  <BlockNews
                    v-for="(pieceOfNews, index) in news"
                    :key="index"
                    :header="pieceOfNews.header"
                    :short_description="pieceOfNews.short_description"
                    :text="pieceOfNews.text"
                    :date_published="pieceOfNews.date_published"
                    :mark_text="pieceOfNews.mark_text"
                    :mark_color="pieceOfNews.mark_color"
                    :selectedMarks="selectedMarks"
                  />
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
import { mapState, mapActions } from "vuex";
import BlockNews from "@/components/BlockNews.vue";

export default {
  components: {
    BlockNews
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      moveMainBlock: false,
      selectedMarks: []
    };
  },
  computed: {
    ...mapState("sidebar", ["paddingMainBlock"]),
    ...mapState("news", ["news"]),
    isMobile() {
      return this.windowWidth < 979;
    }
  },
  created() {
    this.getNews();
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
    if (
      this.$refs.sidebar_menu.$children[0].collapsed &&
      this.paddingMainBlock
    ) {
      this.fixStateOfPadding();
    }
  },
  methods: {
    ...mapActions("sidebar", ["fixStateOfPadding", "changeStateOfHideSidebar"]),
    ...mapActions("news", ["getNews"]),
    clearMarks() {
      this.selectedMarks = [];
    },
    activateFilterDropdown() {
      this.changeStateOfHideSidebar();
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

.filter-buttons {
  display: flex;
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
    text-align: left;
    width:100%;
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
