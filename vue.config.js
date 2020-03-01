const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src")); //快速指定对应的路径
    //   .set("assets", resolve("src/assets"))
    //   .set("components", resolve("src/components"))
    //   .set("layout", resolve("src/layout"))
    //   .set("base", resolve("src/base"))
    //   .set("static", resolve("src/static"));
    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(
        process.env.NODE_ENV === "development",
        config => config.devtool("eval") //开发代码调试"cheap-source-map"为原代码，运行编译时会更慢
      );
  }
};
