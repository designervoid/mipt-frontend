<template lang="html">
  <div>
    <main-header></main-header>
    <div class="container">
      <div class="columns">
        <main-sidebar></main-sidebar>
        <div class="column is-12" v-bind:style="{ 'padding-left': paddingMainBlock, 'transition': '0.55s all ease' }">
          <div class="container">
            <div class="wrapped-container">
              <div class="columns">
                <div class="column is-12">
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">Профиль</h1>
                </div>
              </div>
              <div class="columns">
                contact profile
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
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      isEdit: false,
      form: {
        faculty: '',
        course: '',
        hostel: '',
        floor: '',
        room: '',
        lengthOfStay: '',
        rate: ''
      },
      requisites: [{
          key: 'faculty',
          text: 'Факультет',
          value: 'ФОПФ'
        },
        {
          key: 'course',
          text: 'Курс',
          value: '1 курс магистратуры'
        },
        {
          key: 'hostel',
          text: 'Общежитие',
          value: 'Зюзино'
        },
        {
          key: 'floor',
          text: 'Этаж',
          value: '5'
        },
        {
          key: 'room',
          text: 'Комната',
          value: '503-3'
        },
        {
          key: 'lengthOfStay',
          text: 'Срок проживания',
          value: '1.09.2019-31.08.2021'
        },
        {
          key: 'rate',
          text: 'Тариф',
          value: '4 руб/день'
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
    },
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
  align-self:center;
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
