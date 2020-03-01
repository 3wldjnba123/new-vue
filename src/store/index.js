import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import user from "./modules/user";
import permission from "./modules/permission";
// import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters,
  modules: { user, permission }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
});
