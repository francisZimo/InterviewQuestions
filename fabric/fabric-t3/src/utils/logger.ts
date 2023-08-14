import { getQueryObj, MJsBridge } from '@/utils';
import createLog from '@xes/web-log';
import { vPlatform } from '@xes/xytools-core';
const { isAndroid, isIos } = vPlatform;

const config = {
  appid: '1001667',
  eventid: '',
  // 配置 common 字段
  common: {
    platform: platform(),
    ...getQueryObj()
  },
  events: {},
  daemonLog: {
    // 进入页面后自动打pv
    enterPV: {
      open: true //默认 true
    },

    // 视图改变后是否自动打pv
    // 主要是监听 hash 或 history 的改变
    viewChange: {
      open: false, //默认 false
      // 路由的类型
      routerType: 'hash' as const //默认 hash, 可选: 'hash' | 'history' | 'all'
    },
    // 是否收集页面性能日志
    performance: {
      open: true //默认 true
    },
    // 是否收集网络和返回异常日志
    network: {
      open: true, //默认 true
      trace: false, // 默认false, 是否给请求加上trace header, 同时单独打一个 trace 其中
      ignorePatterns: [], // 哪些网络请求不记录日志
      // 哪些网络请求不打trace日志, 不给请求加上trace header
      ignoreTracePatterns: []
    },
    // 是否收集运行时异常日志
    runtimeError: {
      open: true //默认 true
    },
    // 是否收集资源加载异常日志
    resourceError: {
      open: true //默认 true
    }, // 白屏检测
    whiteScreenDetected: {
      open: true, // 默认 true
      boxDom: ['#app', '#root'], // 白屏检测的容器列表
      skeleton: false // 是否骨架屏 (提供白屏检测准确性)
    },
    // 错误后上报录屏
    screenRecord: {
      // 注意, 录屏数据在出错后才上报
      open: true, // 默认 false
      // 一个分段的录制时长
      // 比如出错后, 上报的是最近10秒的用户行为
      captureDuration: 10000,
      // 遇到哪些错误会上报
      // ['runtime', 'resource', 'network']
      errorTypes: ['runtime']
    }
  }
};

export const L = createLog(config);

let userInfo = {};
let deviceInfo = {};

function platform() {
  if (isIos) return 1;
  if (isAndroid) return 2;
  return 3;
}

// 从app内获取用户信息，设备信息等
(async () => {
  [userInfo, deviceInfo] = await Promise.all([MJsBridge.getAppDeviceInfo(), MJsBridge.getAppUserInfo()]);
})();

export function showMsg(eventtype, data) {
  data.pageFrom = data.pageFrom || getQueryObj().from;
  const logData = getParams(data);
  L.pv(eventtype, logData);
}

export function clickMsg(eventtype: string, data) {
  const logData = {
    params: getParams(data)
  };
  L(eventtype, logData);
}

const getParams = (data) => {
  return {
    // timestamp: new Date().getTime(),
    ...userInfo,
    ...deviceInfo,
    ...data
  };
};
