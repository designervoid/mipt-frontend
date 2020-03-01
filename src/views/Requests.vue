<template lang="html">
  <div>
    <main-header></main-header>
    <div class="container">
      <div class="columns">
        <main-sidebar></main-sidebar>
        <div class="column is-12" v-bind:style="{ 'padding-left': paddingMainBlock, 'transition': '0.55s all ease'  }">
          <div class="container">
            <div class="wrapped-container">
              <div class="columns" v-if="!createNewRequest">
                <div class="column is-12">
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">Заявки</h1>
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
                  <b-button class="request-button" rounded @click="changeStateOfNewRequest();"
                    >Создать новую заявку</b-button
                  >
                </div>
              </div>
              <div class="columns" v-else>
                <div class="column is-12">
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">Заявки</h1>
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
                      aria-role="list">
                      <button class="button is-link" type="button" slot="trigger">
                          Выберите категорию
                          <b-icon icon="caret-down"></b-icon>
                      </button>

                      <b-dropdown-item v-for="(category, index) in categories" :key="index" :value="category" aria-role="listitem">
                          <span>{{ category }}</span>
                      </b-dropdown-item>
                  </b-dropdown>
                  <b-field>
                              <b-input type="textarea"
                                  placeholder="Опишите свою проблему">
                              </b-input>
                          </b-field>
                            <div class="category-buttons">
                              <b-button type="is-link" inverted>Отмена</b-button>
                              <b-button type="is-link">Отправить</b-button>
                            </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-12">
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">Предыдущие заявки</h1>
                  <BlockRequests
                    v-for="(request, index) in requests"
                    :key="index"
                    :professionType="request.professionType"
                    :descriptionOfProblem="request.descriptionOfProblem"
                    :progressApproval="request.progressApproval"
                    :descriptionOfApproval="request.descriptionOfApproval"
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
import {
  mapState
} from 'vuex';
import BlockRequests from "@/components/BlockRequests.vue";

export default {
  components: {
    BlockRequests
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      createNewRequest: false,
      categories: [
        'Сантехник',
        'Электрик',
        'Плотник'
      ],
      requests: [{
          professionType: "Сантехник",
          descriptionOfProblem: "Протек смеситель",
          progressApproval: "Обработка",
          descriptionOfApproval: "Заявка на рассмотрении"
        },
        {
          professionType: "Электрик",
          descriptionOfProblem: "Сгорела лампочка",
          progressApproval: "Подтверждено",
          descriptionOfApproval: "Ждите мастера 2 марта, 14:00-15:00"
        },
        {
          professionType: "Плотник",
          descriptionOfProblem: "Сломалась ручка двери",
          progressApproval: "Выполнено",
          descriptionOfApproval: "Подать жалобу"
        }
      ]
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
    changeStateOfNewRequest() {
      this.createNewRequest = true;
    }
  }
};
</script>

<style lang="css" scoped>
.wrapped-container {
  padding: 2rem;
}
.request-button {
  margin-top: 2rem;
  width: 409px;
  height: 64px;
}

@media screen and (max-width: 979px) {
  .request-button {
    width: 100%;
  }
}
</style>
