<template>
  <form>
    用户名:
    <input type="text" v-model="username" /> 密码:
    <input type="password" v-model="password" />
    <el-button size="mini" @click="handleLogin">登录</el-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      redirect: undefined,
      otherQuery: {}
    };
  },
  watch: {
    $route: {
      //注销后再通过参数redirect跳转到之前注销的页面
      handler: function(route) {
        let query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true // 确认是否以当前的初始值执行handler的函数
    }
  },
  methods: {
    handleLogin() {
      this.$store
        .dispatch("user/login", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({
            path: this.redirect || "/",
            query: this.otherQuery
          });
          console.log("登录成功", this.redirect || "/", this.otherQuery);
        })
        .catch(error => {
          console.error("登录错误：", error);
        });
    },
    getOtherQuery(query) {
      //不包含redirect的其它参数
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    }
  }
};
</script>

<style></style>
