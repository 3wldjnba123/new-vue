<template>
  <form>
    用户名: <input type="text" name="user" /> 密码:
    <input type="password" name="pwd" />
    <input type="button" value="登录" @click="handleLogin" />
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleLogin() {
      console.log("登录成功");
    }
  }
};
</script>

<style></style>
