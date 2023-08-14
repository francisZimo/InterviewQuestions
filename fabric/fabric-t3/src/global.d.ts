/* eslint-disable no-underscore-dangle */

// 定义全局变量
declare const process: {
  env: {
    ERUDA: boolean;
    BUILD_TIME: string;
    NODE_ENV: string;
    LINE: string;
  };
};
declare const eruda: any;

// 在 window 上扩展定义全局变量
interface Window {
  xesApp: any;
  __your_variable: any;
  closeScrollEvent: any;
}

// // 补充模块不完整的定义, 按需删除
// declare module '@xes/xes-axios' {
//   type throttleRunnerFn = (callback: () => void, timeout?: number) => void;

//   export const throttle: (timeout?: number) => throttleRunnerFn;
// }
