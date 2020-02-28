import router from "./index";

const title = "new vue";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || title;
  next();
});
