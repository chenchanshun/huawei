/*
*Vue-CLI项目的核心配置文件
*/
const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ],
    //axios 跨域配置
    devServer: {
      proxy: {
          //名字可以自定义，这里我用的是api
          '/api': {
            target: 'http://api.63code.com',//设置你调用的接口域名和端口号 别忘了加http
            changeOrigin: true,//这里设置是否跨域
            pathRewrite: {
              '^/api': ''
            }
          }
      }
  }    
  
  
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    configureWebpack: {
      externals: {
      }
    }
  


}
