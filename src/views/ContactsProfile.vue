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
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'">Контакты</h1>
                  <h2>Адрес</h2>
                  <p>ул. Керченская, 1Ак1<br>Почтовый индекс: 117303</p>
                  <br>
                  <h2>Проезд</h2>
                  <ul>
                    <li>Первый и последний проезд ст. "Севастопольская";</li>
                    <li>Первый в сторону "Нахимовский проспект" в 5:33, в сторону "Чертановская" в 6:06 (6:09 в выходные);</li>
                    <li>Последний в сторону "Нахимовский проспект" в 1:17, в сторону "Чертановская" в 1:47;</li>
                  </ul>
                  <br>
                  <h2>Администрация общежития</h2>
                  <p>Начальник: Григорьев Сергей Иванович<br>
                  Зам. начальника: Рзянина Наталия Евгеньевна<br>
                  Завхоз: Козлова Надежда Семёновна<br>
                  Паспортный стол: Егорова Марина Владимировна</p>
                  <br>
                  <h2>Время работы</h2>
                  <p>пн-чт 9:00-18:00, пт 9:00-17:00; перерыв 12:00-13:00</p>
                  <br>
                  <h2>Кабинеты администрации на 2 этаже</h2>
                  <p>201 -  Кастелянная <br>
                     205 -  Зам. начальника <br>
                     206 -  Паспортный стол <br>
                     208 -  Начальник <br>
                     212 -  Завхоз <br>
                     210 -  Инженер</p>
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
h1 {
  font-size: 36px;
  font-weight: bold;
}
h2 {
  font-size: 24px;
  font-weight: bold;
}
h1, h2, p, li {
  color: #000000;
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
