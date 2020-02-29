<template>
<section>
  <code>{{ this.$v }}</code> <br>
  <code>{{ focus }}</code> <br>
  <code>{{ blur }}</code> <br>
  {{ validateField('email') }}
  <b-field label="Email" :type="validateField('email')">
    <b-input v-model.trim="form.email" @input="setField('email', $event)"  @focus="onFocusField('email')" @blur="onBlurField('email')"
>
    </b-input>
  </b-field>

  <b-field label="Password" :type="validateField('password')">
    <b-input v-model.trim="form.password" @input="setField('password', $event)" @focus="onFocusField('password')" @blur="onBlurField('password')" password-reveal>
    </b-input>
  </b-field>

</section>
</template>

<script>
import {
  required,
  email,
  minLength,
} from 'vuelidate/lib/validators'

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
.control.has-icons-left .icon,
.control.has-icons-right .icon {
  pointer-events: auto !important;
}

</style>
