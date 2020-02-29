import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Loader from "../views/Loader.vue";
import Requests from "../views/Requests.vue";
import News from "../views/News.vue";
import ContactsProfile from "../views/ContactsProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/loader",
    name: "Loader",
    component: Loader
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/requests",
    name: "Requests",
    component: Requests
  },
  {
    path: "/contacts-profile",
    name: "ContactsProfile",
    component: ContactsProfile
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.replace({ path: '/login', redirect: '/' })

export default router;
