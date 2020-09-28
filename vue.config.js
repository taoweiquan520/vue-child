const path = require("path");
const { name } = require('./package');
console.log(name)
module.exports = {
  publicPath:'//172.30.5.81:7101',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,

  devServer: {
    // 监听端口
    port: 7101,
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    historyApiFallback:true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    output: {
      // // 微应用的包名，这里与主应用中注册的微应用名称一致
      // library: `${name}-[name]`,
      // // 将你的 library 暴露为所有的模块定义下都可运行的方式
      // libraryTarget: "umd",
      // // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
      // jsonpFunction: `webpackJsonp_${name}`,

      library: 'demo1',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};