<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>Hello</div>
    <el-button @click="handleLogout">注销</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  // components: { }
  data() {
    return {};
  },
  methods: {
    handleLogout() {
      this.$store
        .dispatch("user/logout")
        .then(() => {
          this.$router.push(`/login?redirect=${this.$route.fullPath}`);
        })
        .catch(error => {
          console.error("注销错误：", error);
        });
    }
  }
};
</script>
