import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "./router/permission"; //路由权限控制
import "./plugins/element.js"; //插件方式按需加载，直接在vue ui插件里下载or vue add element就自动生产文件代码和插件配置

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
