import { login, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "../../router";

const state = {
  token: getToken(),
  name: "",
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.token = name;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  // 登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password })
        .then(response => {
          const { data } = response;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  // 登出
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        commit("SET_TOKEN", "");
        commit("SET_ROLES", []);
        removeToken(); // 删除cookie中的token
        resetRouter(); // 重置路由

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        // dispatch('tagsView/delAllViews', null, { root: true })

        resolve();
      } catch (e) {
        reject(e);
      }
    });
  },
  // 得到用户信息
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(response => {
          const { data } = response;
          if (!data) {
            reject("验证失败，请重新登录");
          }
          const { roles, username } = data;
          if (!roles || roles.length <= 0) {
            reject("角色必须是非空数组");
          }
          commit("SET_NAME", username);
          commit("SET_ROLES", roles);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  // 重置token，token错误信息的时候重置并且跳转到登录页
  resetToken({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        commit("SET_TOKEN", "");
        commit("SET_ROLES", []);
        removeToken();
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
