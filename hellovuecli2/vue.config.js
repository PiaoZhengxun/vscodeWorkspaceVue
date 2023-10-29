const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8081,
    proxy: {
      '/testmybatisplusbackendserver': {
        target: 'http://127.0.0.1:8080',    //需要跨域的url
        ws: true,                                    //代理webSocket
        changeOrigin: true,                          //允许跨域
        pathRewrite: {
          '^/testmybatisplusbackendserver': ''                         //重写路径
        }
      }
    }
  },
  lintOnSave: false
})
