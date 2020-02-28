import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: { title: "登录" }
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "首页" }
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
