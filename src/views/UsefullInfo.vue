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
                  <h1 class="title" v-bind:class="!isMobile ? 'is-2' : 'is-4'" style="font-size: 36px;">Контакты общежития</h1>
                  <h2>Что вообще есть в общежитии?</h2>
                  <p>Стиралка 4 и 13 этажи, запись производится через сайт, имеется 7 стиральных машин и 3 сушильных барабана, стоимость стирки - 30 рублей (2 часа), стоимость сушки - 25 рублей (3 часа).<br>
                     Боталка расположена на 1 этаже справа от выхода из лифта. Ключи можно получить на посту охраны (записаться в журнал и отдать пропуск). Боталка оборудована партами, доской и принтером.<br>
                     Спортивный зал находится на 1 этаже, напротив боталки. Ключи можно получить на посту охраны. Обязательно пройти инстуктаж перед посещением!<br>
                     Также есть 2 стола для настольного тенниса с комплектом ракеток и мячей.</p>
                  <br>
                  <h2>Смена белья</h2>
                  <p>пн-чт 9:00-18:00, перерыв 12:00-13:00; <br>
                     суббота и воскресенье - выходной;</p> <br>
                  <h2>Аптеки</h2>
                  <ul>
                    <li>Ближайшая: Керченская 1Б, ориентир - "Пятёрочка". Время работы: ежедневно с 8:00 до 23:00. Наличный рассчёт;</li>
                    <li>Ул. Одесская, д. 14к1. Время работы: круглосуточно. Наличный и безналичный рассчёт;</li>
                  </ul>
                  <br>
                  <h2>Продуктовые магазины:</h2>
                  <p>- Пятёрочка: Керченская 1Б, каждый день 6.00-23.45;<br>
                    - Вкусвилл: Малая Юшуньская 3, каждый день 9.00-22.00; Каховка 19к1, каждый день 9.00-22.00;<br>
                    - Атак: каждый день 8.00-23.00. Круглосуточные продуктовые магазины;<br>
                    - “Дикси”, Каховка 19с1;<br>
                    - “Виктория”, Севастопольский 28 стр. 2.;<br></p>
                  <br>
                  <h2>Центр госуслуг района Зюзино</h2>
                  <p>Ул. Одесская, 21/29;</p>
                  <br>
                  <h2>Военный комиссариат г. Москвы по Академическому р-ну ЮЗАО</h2>
                  <p>Ул. Дмитрия Ульянова, д. 14к5 (м. Академическая);</p>
                  <br>
                  <h2>Банкоматы:</h2>
                  <p> - "Сбербанк" Малая Юшуньская 1к1 9.00-18.00; Каховка 27, круглосуточный;<br>
                      - "Почта банк" Каховка 23, круглосуточный;<br>
                      - "Московский кредитный банк" Керченская 1Б;</p><br>
                  <h2>Дубликаты ключей</h2>
                  <p>Керченская 1Ак2 "Дом быта"; стоимость - 250 рублей. Часы работы: <br>
                  будние дни: 9:00-21:00; выходные: 10:00-18:00; только наличный рассчёт;</p>
                  <br>
                  <h2>Фотография</h2>
                  <p>Каховка, 19; 10.00-20.00 каждый день 10.00-20.00;<br>
                  Гостиница “Берлин” (вход над Атаком, слева);</p><br>
                  <h2>Флюорография</h2>
                  <p>Поликлиника: ул. Азовская, 20к ; пн-пт 8.00-20.00, сб 9.00-18.00, вс 8.00-16.00 (посещение после прикрепления к поликлинике);</p><br>
                  <h2>Печать документов</h2>
                  <p>Принтер есть в боталке на первом этаже, ключ от боталки даётся взамен на пропуск, бумага своя.<br>
                     Каховка, 19; 10.00-20.00 каждый день 10.00-20.00;</p><br>
                  <h2>Парикмахерская</h2>
                  <p>Барбершоп “TOPGUN” Малая Юшуньская 3, 10.00-22.00; <br>
                     “New-Style” Малая Юшуньская 1к1, 9.00-21.00;</p>
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
h2 {
  font-size: 24px;
  font-weight: bold;
}
h1 {
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
