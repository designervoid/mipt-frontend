<template lang="html">
  <div class="block">
    <div class="wrapped-left-block">
      <div class="wrapped-left-heading has-text-grey-light">
        {{ date }}
      </div>
      <div class="wrapped-left-heading title is-5 has-text-link">
        {{ professionType }}
      </div>
      <div class="wrapped-left-description">
        {{ descriptionOfProblem }}
      </div>
    </div>
    <div class="wrapped-right-block">
      <div class="wrapped-right-heading title is-5">
        <span
          v-if="progressApproval === 'Обработка'"
          class="has-text-warning"
          >{{ progressApproval }}</span
        >
        <span
          v-if="progressApproval === 'Подтверждено'"
          class="has-text-warning"
          >{{ progressApproval }}</span
        >
        <span
          v-if="progressApproval === 'Выполнено'"
          class="has-text-success"
          >{{ progressApproval }}</span
        >
      </div>
      <div class="wrapped-right-description">
        <button
          class="button is-primary is-rounded"
          v-if="progressApproval === 'Выполнено'"
          @click="isCardModalActive = true"
        >
          {{ descriptionOfApproval }}
        </button>
        <span v-if="progressApproval === 'Обработка'">{{
        descriptionOfApproval
        }}</span>
        <span v-if="progressApproval === 'Подтверждено'">{{
          descriptionOfApproval
        }}</span>
      </div>
      <b-modal :active.sync="isCardModalActive" :width="600" scroll="keep">
                  <div class="card">
                      <div class="card-header">
                          Подать жалобу на выполненную заявку:
                      </div>
                      <div class="card-content">
                          <div class="content">
                            <b-field>
                                        <b-input maxlength="200" type="textarea" placeholder="Опишите, что вас не устроило"></b-input>
                            </b-field>
                          </div>
                      </div>
                      <div class="card-footer">
                        <b-button type="is-link close-button-footer" @click="closeModal()" inverted rounded>Отменить</b-button>
                        <b-button type="is-link" rounded>Отправить</b-button>
                      </div>
                  </div>
              </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCardModalActive: false
    }
  },
  props: {
    professionType: {
      type: String,
      default () {
        return "";
      }
    },
    descriptionOfProblem: {
      type: String,
      default () {
        return "";
      }
    },
    progressApproval: {
      type: String,
      default () {
        return "";
      }
    },
    descriptionOfApproval: {
      type: String,
      default () {
        return "";
      }
    },
    date: {
      type: String,
      default () {
        return "";
      }
    }
  },
  methods: {
    closeModal() {
      this.isCardModalActive = false;
    }
  }
};
</script>

<style lang="css">
.block {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  white-space: nowrap;
  overflow: auto;
}
.wrapped-left-block {
  text-align: left;
  padding-right: 3rem;
}
.wrapped-right-block {
  text-align: right;
  padding-left: 3rem;
}
.wrapped-right-description {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.modal-content {
  border-radius: 10px;
}
.card-header {
  padding: 1rem;
  background-color: #3273dc !important;
  color: #ffffff;
}
.card-footer {
  padding: 1rem;
  justify-content: flex-end;
}
</style>
