<template>
  <section>
  <div class="container1">
    <div class="menu-header">
      <img src="@/assets/mipt_rus_inv.png" alt="Logo">
    </div>
    <div class="menu">
      <h1>Авторизация</h1>
      <p>Привет всем заходящим пришельцам. <br>
         Войдите на наш жилищно-бытовой сервис!</p>
      <b-field label="" :type="validateField('email')">
        <b-input class="input-field e-mail" v-model.trim="form.email" @input="setField('email', $event)" @focus="onFocusField('email')" @blur="onBlurField('email')">
        </b-input>
      </b-field>
      <b-field label="" :type="validateField('password')">
        <b-input class="input-field pass" v-model.trim="form.password" @input="setField('password', $event)" @focus="onFocusField('password')" @blur="onBlurField('password')" password-reveal>
        </b-input>
      </b-field>
      <b-button class="button1" @click="login();">Login</b-button>
    </div>
  </div>
</section>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      focus: {
        email: false,
        password: false
      },
      blur: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  computed: {
    isValidEmail() {
      return this.$v.form.email.$invalid;
    },
    isValidPassword() {
      return this.$v.form.password.$invalid;
    }
  },
  methods: {
    ...mapActions("auth", ["getToken"]),
    login() {
      const email = this.form.email;
      const password = this.form.password;
      this.getToken({ email, password });
    },
    setField(key, value) {
      this.form[key] = value;
      this.$v.form[key].$touch();
    },
    onFocusField(key) {
      this.focus[key] = true;
      this.blur[key] = null;
    },
    onBlurField(key) {
      this.focus[key] = false;
      this.blur[key] = true;
    },
    validateField(key) {
      if (this.blur[key] === null) {
        return null;
      } else {
        return this.$v.form[key].$invalid ? "is-danger" : "is-success";
      }
    }
  }
};
</script>

<style lang="css" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/mft.svg);
  background-size: 200%;
  height: 100%;
  max-width: 1440px;
  width: 100%;
}
.container1 {
  background-color: #FFFFFF;
  max-width: 1280px;
  height: 484px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  /* justify-content: space-around; */
}

.menu-header {
  background-color: #0069B4;
  width: 426px;
  height: 72px;
  text-align: center;
  padding: 10px 0 0 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
}
h1 {
  display: flex;
  justify-content: center;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-top: 40px;
}
p {
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-top: 32px;
}
.input-field {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 46px;
  width: 311px;
}
.e-mail {
  margin-top: 13px;
}
.button1 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #0069b4;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  width: 311px;
  height: 46px;
  color: #FFFFFF;
}
img {
  width: 128.13px;
  height: 56px;
}
  @media screen and (max-width: 768px) {
  section {width: 105%;}
}
  @media screen and (max-width: 375px) {
  section {width: 130%;}
  /* section {height: 500px;} */
}
   @media screen and (max-width: 320px) {
     section {width: 144%;}
}

</style>
