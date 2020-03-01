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
              <div class="columns" v-if="!createNewRequest">
                <div class="column is-12">
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">
                    Заявки
                  </h1>
                  <p class="is-size-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <b-button
                    class="request-button"
                    rounded
                    @click="changeStateOfNewRequest()"
                    >Создать новую заявку</b-button
                  >
                </div>
              </div>
              <div class="columns" v-else>
                <div class="column is-12">
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">
                    Заявки
                  </h1>
                  <p class="is-size-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <b-dropdown
                    v-model="selectedCategory"
                    aria-role="list"
                    style="margin-top: 1rem; margin-bottom: 1rem;"
                  >
                    <button
                      class="button is-link selectedCategory"
                      type="button"
                      slot="trigger"
                    >
                      {{
                        selectedCategory.length > 0
                          ? selectedCategory
                          : "Выберите категорию"
                      }}
                    </button>

                    <b-dropdown-item
                      v-for="(category, index) in categories"
                      :key="index"
                      :value="category"
                      aria-role="listitem"
                    >
                      <span>{{ category }}</span>
                    </b-dropdown-item>
                  </b-dropdown>
                  <b-field>
                    <b-input
                      type="textarea"
                      placeholder="Опишите свою проблему"
                    >
                    </b-input>
                  </b-field>
                  <div class="category-buttons">
                    <b-button
                      type="is-link"
                      inverted
                      @click="changeStateOfNewRequest()"
                      >Отмена</b-button
                    >
                    <b-button
                      type="is-link"
                      @click="
                        sendOrder({
                          category: selectedCategory,
                          description: 'test'
                        })
                      "
                      >Отправить</b-button
                    >
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-12">
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">
                    Предыдущие заявки
                  </h1>
                  <BlockOrders
                    v-for="(order, index) in orders"
                    :key="index"
                    :professionType="order.professionType"
                    :descriptionOfProblem="order.descriptionOfProblem"
                    :progressApproval="order.progressApproval"
                    :descriptionOfApproval="order.descriptionOfApproval"
                    :date="order.date"
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
import BlockOrders from "@/components/BlockOrders.vue";

export default {
  components: {
    BlockOrders
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      createNewRequest: false,
      selectedCategory: ""
      // form: {
      //   description
      // }
    };
  },
  computed: {
    ...mapState("sidebar", ["paddingMainBlock"]),
    ...mapState("orders", ["categories", "orders"]),
    isMobile() {
      return this.windowWidth < 979;
    }
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
    ...mapActions("sidebar", ["fixStateOfPadding"]),
    ...mapActions("orders", ["sendOrder"]),
    changeStateOfNewRequest() {
      this.createNewRequest = !this.createNewRequest;
    }
  }
};
</script>

<style lang="css">
.wrapped-container {
  padding: 2rem;
}
.request-button {
  margin-top: 2rem;
  width: 409px;
  height: 64px;
}

.dropdown,
.dropdown-trigger,
.selectedCategory,
.dropdown-menu,
.dropdown-content {
  width: 100%;
}
.category-buttons {
  display: flex;
  justify-content: flex-end;
}

@media screen and (max-width: 979px) {
  .request-button {
    width: 100%;
  }
}
</style>
