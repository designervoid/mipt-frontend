import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Loader from "../views/Loader.vue";
import Requests from "../views/Requests.vue";
import News from "../views/News.vue";

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
    path: "/requests",
    name: "Requests",
    component: Requests
  },
  {
    path: "/news",
    name: "News",
    component: News
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.replace({ path: '/login', redirect: '/' })

export default router;
