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
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">
                    Профиль
                  </h1>
                </div>
              </div>
              <div class="columns">
                <div class="column is-12 user-info">
                  <div class="avatar">
                    <v-avatar
                      inline
                      username="Amaury-Tobias Quiroz"
                      background-color="#FFC107"
                      :size="100"
                      rounded
                      :lighten="20"
                    ></v-avatar>
                  </div>
                  <div class="user-name">
                    <div
                      class="name title"
                      v-bind:class="!isMobile ? 'is-6' : 'is-8'"
                    >
                      Фамилия Имя Отчество
                    </div>
                    <div class="change-name">Сменить фото профиля</div>
                  </div>
                </div>
              </div>
              <div
                class="columns user-requisites-columns"
                v-for="(requisite, index) in requisites"
                :key="index"
              >
                <div class="column is-12 user-requisites-column">
                  <b-datepicker
                    :placeholder="requisite.value"
                    v-model="dates"
                    :disabled="!isEdit"
                    range
                    v-if="requisite.key === 'lengthOfStay'"
                  >
                  </b-datepicker>
                  <b-field v-else>
                    <b-input
                      :placeholder="requisite.text"
                      :value="requisite.value"
                      :disabled="!isEdit"
                      @input="setField(requisite.key, $event)"
                    ></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-12" v-if="!isEdit">
                  <b-button type="is-light" @click="startEdit()"
                    >Редактировать</b-button
                  >
                </div>
                <div class="column is-12" v-else>
                  <b-button type="is-success save-button" @click="saveEdit()"
                    >Сохранить</b-button
                  >
                  <b-button type="is-danger cancel-button" @click="cancelEdit()"
                    >Отменить</b-button
                  >
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
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      isEdit: false,
      form: {
        faculty: "",
        course: "",
        hostel: "",
        floor: "",
        room: "",
        lengthOfStay: "",
        rate: ""
      },
      requisites: [
        {
          key: "faculty",
          text: "Факультет",
          value: "ФОПФ"
        },
        {
          key: "course",
          text: "Курс",
          value: "1 курс магистратуры"
        },
        {
          key: "hostel",
          text: "Общежитие",
          value: "Зюзино"
        },
        {
          key: "floor",
          text: "Этаж",
          value: "5"
        },
        {
          key: "room",
          text: "Комната",
          value: "503-3"
        },
        {
          key: "lengthOfStay",
          text: "Срок проживания",
          value: "1.09.2019-31.08.2021"
        },
        {
          key: "rate",
          text: "Тариф",
          value: "4 руб/день"
        }
      ],
      dates: []
    };
  },
  validations: {
    form: {
      faculty: {
        required
      },
      course: {
        required
      },
      hostel: {
        required
      },
      floor: {
        required
      },
      room: {
        required
      },
      lengthOfStay: {
        required
      },
      rate: {
        required
      }
    }
  },
  computed: {
    ...mapState("sidebar", ["paddingMainBlock"]),
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
    setField(key, value) {
      this.form[key] = value;
      this.$v.form[key].$touch();
    },
    startEdit() {
      this.isEdit = true;
    },
    saveEdit() {
      this.isEdit = false;
    },
    cancelEdit() {
      this.isEdit = false;
    }
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
.user-info {
  display: flex;
}
.user-name {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-self: center;
}
.save-button {
  margin-right: 0.5rem;
}

@media screen and (max-width: 979px) {
  .request-button {
    width: 100%;
  }
}

@media screen and (max-width: 579px) {
  .avatar {
    display: flex;
    justify-content: center;
  }
  .user-info {
    flex-direction: column;
  }
}
</style>
