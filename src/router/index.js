import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Loader from "../views/Loader.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.replace({ path: '/login', redirect: '/' })

export default router;
