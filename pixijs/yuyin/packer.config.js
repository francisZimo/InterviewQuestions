import packageJson from './package.json';
import packer from '@xes/packer-rsp';
import * as path from 'path';

const resolveFn = (dir) => path.resolve(__dirname, './', dir);

const env = packer.getEnv();

const rspackConfig = {
  resolve: {
    alias: {
      '@': resolveFn('src')
    }
  },
  // stats: 'errors-only',
  output: {},
  devServer: {
    port: 8001,
    static: {
      directory: path.resolve(__dirname, 'public')
    }
    // hot: true,    // 模块热更新HMR 酌情开启
  },
  module: {
    rules: []
  },
  optimization: {
    minimize: true
  }
};

const checkLineIsDev = () => {
  return (
    process.env.NODE_ENV === 'development' ||
    process.env.LINE === 'test' ||
    // process.env.LINE === 'gray' ||
    process.env.LINE === 'proxy'
  );
};

// 只有开发模式才注入打包时间，避免每次打包文件变化
const BUILD_TIME = JSON.stringify(new Date().toLocaleString());

module.exports = {
  rspackConfig,
  uilib: 'vue3',
  targets: ['chrome >=54', 'ios >= 11'],
  monita: {
    enable: !checkLineIsDev(), // 上传监控数据总开关 建议在开发环境关闭 ，在生产环境开启，可根据环境变量来控制
    // sourceMap 上传相关
    enableSourceMap: true, // 默认true, 是否开启对sourcemap相关的处理
    postSourceMap: true, // 默认true, 是否上传 sourceMap 到 OSS ，用于智子监控系统 错误日志的定位
    emitSourceMap: false, // 默认false, 是否把sourceMap 输出到本地目录.
    sourceMapAppend: false, // 默认false

    // 分析数据上传相关
    enableAnalysis: true, // 默认true, 构建数据上传相关, 是否开启，用于智子监控系统 性能分析->项目构建分析
    eventid: 'reverse-speaking', // 在监控平台注册的eventid
    appid: '1001667' // 在监控平台注册的appid
  },
  include: [
    /node_modules[/\\]pixi\.js/,
    /node_modules[/\\]@pixi/
    // /node_modules[/\\]rrweb/, // TODO: 问老翟还需要不
  ],
  defineEnvironment: {
    BUILD_TIME,
    H5_VERSION: packageJson.version
  },
  internalPlugins: {
    MinimizerPlugin: {
      safari11: true, // 会打开safari11的兼容
      drop_console: !checkLineIsDev() // 默认移除 console
    }
  }
};
