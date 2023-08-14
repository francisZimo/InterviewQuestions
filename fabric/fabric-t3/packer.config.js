const path = require('path');
const resolveFn = (dir) => path.resolve(__dirname, './', dir);
const packer = require('@xes/packer');
const proxy = require('./proxy');
// 只有开发模式才注入打包时间，避免每次打包文件变化
const BUILD_TIME = JSON.stringify(new Date().toLocaleString());

const webpackConfig = {
  resolve: {
    alias: {
      '@': resolveFn('src')
    }
  },
  // stats: 'errors-only',
  output: {},
  devServer: {
    proxy,
    port: 80,
    static: {
      directory: path.resolve(__dirname, 'public')
    }
    // hot: true,    // 模块热更新HMR 酌情开启
  },
  module: {
    rules: []
  }
};

const checkLineIsDev = () => {
  return process.env.NODE_ENV === 'development' || packer.argv.line === 'test' || packer.argv.line === 'proxy';
};

module.exports = {
  // paths: {
  //   appHtml: 'publicxx/index.html', // 调整 html 的位置
  //   publicPath: '',
  //   appBuild: path.resolve('ddiss'),
  //   appPublic: path.resolve('publicxx') // 绝对路径
  // },
  // // webpack 配置
  webpackConfig: webpackConfig,
  // devEslint: false, // dev 模式是否开启 esLint , 暂时不支持
  // // 兼容性, 是否使用 core-js 兼容使用的api
  // // false: 默认, 不引入 core-js
  // // polyfill: 使用 @babel/preset-env 进行按需引入 core-js 库,以 polyfill
  // // transform: 使用 @babel/plugin-transform-runtime 转换运行时代码的方式引入 core-js api
  // // polyfill vs transform: 推荐优先使用 polyfill, 大多情况下其比 transform 产生更少的代码量
  compatibility: 'polyfill', // polyfill, transform
  runtimeCompiler: false, // 同 vue-cli 的 runtimeCompiler
  // transpileDependencies: [path.resolve('node_modules')] // 同 vue-cli 的 transpileDependencies
  // // css 处理相关的配置
  // css: {
  //   // 传递给相关 loader 的选项参数
  //   loaderOptions: {
  //     css: {
  //       // 这里的选项会传递给 css-loader
  //     },
  //     postcss: {
  //       // 这里的选项会传递给 postcss-loader
  //     }
  //   }
  // },

  // 注入环境变量
  defineEnvironment: {
    BUILD_TIME: checkLineIsDev() ? BUILD_TIME : ''
  }
  // 传递给 webpack plugin 的 配置项, 如
  // webpackPluginOptions: {}
};
