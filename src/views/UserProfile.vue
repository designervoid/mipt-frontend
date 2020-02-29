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
                  <h1 class="title is-2">Заявки</h1>
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
                  <b-button class="request-button" rounded
                    >Создать новую заявку</b-button
                  >
                </div>
              </div>
              <div class="columns">
                <div class="column is-12">
                  <h1 class="title is-2">Предыдущие заявки</h1>
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
import BlockRequests from "@/components/BlockRequests.vue";

export default {
  components: {
    BlockRequests
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      requests: [
        {
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
