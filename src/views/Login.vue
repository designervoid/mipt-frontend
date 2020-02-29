<template>
<section>
  {{ this.$v }}
  <b-field label="Email" type="is-danger">
    <b-input  v-model.trim="form.email" @input="setField(event, 'email')">
    </b-input>
  </b-field>

  <b-field label="Password" type="is-success">
    <b-input v-model.trim="form.password" @input="setField(event, 'password')" password-reveal>
    </b-input>
  </b-field>

</section>
</template>

<script>
import {
  required,
  minLength
} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    setField(key, value) {
      this.form[key] = value;
      this.$v.form[key].$touch()
    },
  }
}
</script>

<style lang="css" scoped>
.control.has-icons-left .icon,
.control.has-icons-right .icon {
  pointer-events: auto !important;
}

</style>
