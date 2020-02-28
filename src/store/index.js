import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
// import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { login }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
});
