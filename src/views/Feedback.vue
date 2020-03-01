<template lang="html">
  <div>
    <main-header></main-header>
    <div class="container">
      <div class="columns">
        <main-sidebar></main-sidebar>
        <div class="column is-12" v-bind:style="{ 'padding-left': paddingMainBlock }">
          <div class="container">
            <div class="wrapped-container">
              <div class="columns">
                <div class="column is-12">
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">Обратная связь</h1>
                  <p class="is-size-5" style="margin-bottom: 1rem;">
                    Здесь вы можете напрямую обратиться к администрации общежития и задать вопрос на интересующую Вас тему.
                  </p>
                  <b-field>
                        <b-input placeholder="Заголовок"></b-input>
                  </b-field>
                  <b-field>
                      <b-input placeholder="Задайте свой вопрос" type="textarea"></b-input>
                  </b-field>
                  <div class="wrapper-for-feedback-button">
                    <b-button class="feedback-button is-info" rounded>
                      Отправить
                    </b-button>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-12">
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">Предыдущие обращения</h1>
                  <BlockFeedback v-for="(feedback, index) in feedbacks" :key="index"
                  :date="feedback.date"
                  :question="feedback.question"
                  :answer="feedback.answer"
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
import { mapState } from 'vuex';
import BlockFeedback from "@/components/BlockFeedback.vue";

export default {
  components: {
    BlockFeedback
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      feedbacks: [
        {
          date: '20:30, 19.03.2020',
          question: 'Здравствуйте! Вопрос?',
          answer: {
            boolean: true,
            text: 'Здравствуйте! Тут ответ'
          }
        },
        {
          date: '14:30, 27.03.2020',
          question: 'Здравствуйте! Другой вопрос?',
          answer: {
            boolean: false,
            text: ''
          }
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
