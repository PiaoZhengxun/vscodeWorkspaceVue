const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8081,
  },
  lintOnSave: false
})
