// import XesAxios from '@xes/xes-axios';
// @xes/xes-axios 使用文档 https://npm.xesv5.com/?token=eyJpdiI6IkNKRUJiUzdTS2NNV0drVlwvT0NheFFRPT0iLCJ2YWx1ZSI6IjgzZFNhTGZwemkydEdyRUtjQkUyYmJpYStPTFlPRnhScnl0YjlmSGZDWnBiblNEdURBVk5UZ2U1d3lCcTBPMVRYNTAzbE9Jd3J1TXk3dTdHXC9SWG5kNmo5ZFdFRW1XMTNlVE82elloYjMzWT0iLCJtYWMiOiJjYjkyZDU1MDM2YjNjYjE0NzA4YjBjNzAwNmRjYWE4MTBjZWYzZDI3ZGY5NDc5YmYyNGU4MmYxZTExY2I4MjM4In0=#/detial?name=%40xes%2Fxes-axios``

export type reqOpt = {
  basePath?: string;
  domain?: string;
  protocol?: string;
  origin?: string;
  baseURL?: string;
  headers?: any;
  errFall?: boolean;
  handleError?: (error) => void;
};

const DEF_OPT = {
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: '',
  withCredentials: true,
  timeout: 5000,
  // 以下为xes-axios特有配置
  xesQualityURLPrefix: true, // 素质app开关, 默认 false
  xesSwitchHeader: false, // 网校双活开关, 默认 false
  retry: 0, // 重试的次数, 默认 2
  errMsg: '网络错误', // 出错时返回的错误信息 默认为'网络错误'
  throttleTimeout: 1500, // 节流函数的默认时间间隔 默认 1500
  errFall: true, // 出错时, 是否可被用户 catch, 否则 promise 的 fulfilled 值为 null; true: 有错误时, 可以被用户catch; false: 有错误时, 不会被用户catch, 返回值为 null
  handleError: (error) => {
    // 错误处理, 这不会阻断错误的抛出, 通常用于设置出现错误时触发的通用行为, 比如 toast 网络错误
    // false: 阻止默认的错误行为处理
    // true: 默认,  让 fe-axios 执行默认错误处理, 弹出错误 toast
    // (error)=>void : 用户自己处理, 接收一个error对象, error 对象同下面描述的章节一致
    console.log(error.reason);
  }
};
/**
 * @description 生成http服务单例
 * @param opt 配置信息，opt的配置会覆盖DEF_OPT 详见DEF_OPT
 */
const createRequest = (opt: reqOpt = {}) => {
  const basePath = opt.basePath || '/super-community/api/';
  const domain = opt.domain || '';
  const protocol = opt.protocol || 'https:';
  const origin = process.env.LINE === 'proxy' ? '' : opt.origin || `${protocol}//${domain}`;
  opt.baseURL = opt.baseURL || origin + basePath;
  const axiosOpt = { ...DEF_OPT, ...opt };
  // const request = XesAxios.create(axiosOpt);
  // return request;
};

export default createRequest;
