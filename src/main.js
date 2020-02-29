import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "@/router";
import store from "@/store";
import Buefy from "buefy";
import Vuelidate from "vuelidate";
import VueWait from "vue-wait";
import vAvatar from '@amaury-tobias/v-avatar'

import Preloader from "./components/Preloader";
import MainHeader from "./layouts/MainHeader";
import MainSidebar from "./layouts/MainSidebar";

Vue.component("preloader-test", Preloader);
Vue.component("main-header", MainHeader);
Vue.component("main-sidebar", MainSidebar);

import "./main.scss";

Vue.config.productionTip = false;

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGlobe,
  faEye,
  faEyeSlash,
  faCheck,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGlobe, faEye, faEyeSlash, faCheck, faExclamationCircle);
Vue.component("vue-fontawesome", FontAwesomeIcon);
Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});
Vue.use(Vuelidate);
Vue.use(VueWait);
Vue.use(vAvatar)

new Vue({
  router,
  store,
  wait: new VueWait({
    useVuex: true
  }),
  render: h => h(App)
}).$mount("#app");
