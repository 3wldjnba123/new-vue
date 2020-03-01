import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// 解决在升级了Vue-Router版本到到3.1.0及以上之后，页面在跳转路由控制台会报Uncaught (in promise)的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

// 正常路由
export const constantRoutes = [
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

// 权限路由
export const asyncRoutes = [
  // ...
  // 404页面必须放在最后！！
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new VueRouter({
    // mode: "history", // 需要服务支持
    scrollBehavior: () => ({ y: 0 }), // 滚动行为，跳转页面后的位置，也可以具体在meta中指定一些路由，有需求具体看官方文档
    routes: constantRoutes
  });

const router = createRouter(); //路由实例化对象给vue实例

export function resetRouter() {
  let newRouter = createRouter(); //vue实例后如果根据用户权限router.addRouters动态添加了一些路由，上面的router就变了，而这一步利用闭包的特性巧妙的得到了最开始的路由状态，
  router.matcher = newRouter.matcher; // 重置路由（重新赋值给route，路由数组内容包含在matcher内）
}

export default router;
