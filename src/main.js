import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import Vuelidate from 'vuelidate'

import "./main.scss";

Vue.config.productionTip = false

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faEye, faEyeSlash, faCheck, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGlobe, faEye, faEyeSlash, faCheck, faExclamationCircle);
Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
