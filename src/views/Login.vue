<template>
  <v-wait for="my list is to load">
    <template slot="waiting">
      <preloader-test></preloader-test>
    </template>
    <section>
      <b-field label="Email" :type="validateField('email')">
        <b-input v-model.trim="form.email" @input="setField('email', $event)" @focus="onFocusField('email')" @blur="onBlurField('email')">
        </b-input>
      </b-field>

      <b-field label="Password" :type="validateField('password')">
        <b-input v-model.trim="form.password" @input="setField('password', $event)" @focus="onFocusField('password')" @blur="onBlurField('password')" password-reveal>
        </b-input>
      </b-field>
      <b-button @click="login();" :disabled="isValidEmail || isValidPassword">Login</b-button>
    </section>
  </v-wait>
</template>

<script>

import {
  required,
  email,
  minLength,
} from 'vuelidate/lib/validators'
import {
  mapActions
} from 'vuex';

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      focus: {
        email: false,
        password: false
      },
      blur: {
        email: null,
        password: null
      }
    }
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
      return this.$v.form.email.$invalid
    },
    isValidPassword() {
      return this.$v.form.password.$invalid
    }
  },
  methods: {
    ...mapActions('auth', ['getToken']),
    login() {
      const email = this.form.email;
      const password = this.form.password;
      this.getToken({ email, password });
    },
    setField(key, value) {
      this.form[key] = value;
      this.$v.form[key].$touch()
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
        return this.$v.form[key].$invalid ? 'is-danger' : 'is-success';
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
