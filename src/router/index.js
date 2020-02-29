import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Loader from "../views/Loader.vue";
import UserProfile from "../views/UserProfile";

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
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.replace({ path: '/login', redirect: '/' })

export default router;
