import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Loader from "../views/Loader.vue";
import News from "../views/News.vue";
import Orders from "../views/Orders.vue";
import Feedback from "../views/Feedback.vue";
import DataProfile from "../views/DataProfile.vue";
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
    path: "/orders",
    name: "Orders",
    component: Orders
  },
  {
    path: "/feedback",
    name: "feedback",
    component: Feedback
  },
  {
    path: "/data-profile",
    name: "DataProfile",
    component: DataProfile
  },
  {
    path: "/contacts-profile",
    name: "ContactsProfile",
    component: ContactsProfile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.replace({ path: '/login', redirect: '/' })

export default router;
