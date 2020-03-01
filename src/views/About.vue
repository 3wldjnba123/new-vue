<template>
  <div class="about">
    <h3>其它页面</h3>
    <el-button @click="handleLogout">注销</el-button>
  </div>
</template>
<script>
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
          console.error(error);
        });
    }
  }
};
</script>
