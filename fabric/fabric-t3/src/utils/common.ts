/**
 * @desc 获取url中的参数，其中包含hash中的参数
 * @warn 如出现 search和hash中同名参数，请修改业务代码逻辑，规避同名参数问题
 */
export const getQueryObj = (): any => {
  const url = window.location.href;
  const obj = {};
  url.replace(/([^?#=&]+)=([^?#=&]+)/g, (...res): any => {
    obj[res[1]] = res[2];
  });
  return obj;
};

/**
 * @desc 将px转成基于375设计搞的rpx
 * @param {number} px 设计稿中基于375宽度度量的px单位
 * @return {number} 根据当前真实宽度换算出来的px单位
 */
export function px2Rpx(px: number): number {
  const clientWidth = document.documentElement.clientWidth;
  return (clientWidth * px) / 375;
}

let timer: any; //定时器
export function debounce(func: () => void, delay: number, immediate = false) {
  return function (...args) {
    // 判断定时器是否存在，存在的话进行清除
    timer && clearTimeout(timer);
    // 判断是立即执行的防抖还是非立即执行的防抖
    if (immediate) {
      const flag = !timer; //取反
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      // 触发时间后立即执行
      flag && func.call(this, args);
    } else {
      timer = setTimeout(() => {
        func.call(this, args);
      }, delay);
    }
  };
}
