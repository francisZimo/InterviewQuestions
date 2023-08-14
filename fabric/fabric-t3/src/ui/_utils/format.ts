import { CSSProperties } from 'vue';

// 判断是有定义的数据
export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null;
}

// 判断是否为数字类型
export function isNumeric(val: string | number): val is string {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}

// 给样式添加单位
export function addUnit(value?: string | number) {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : value.toString();
  }
  return undefined;
}

// 获取样式格式
export function getSizeStyle(originSize?: Array<string | number>): CSSProperties | undefined {
  if (isDef(originSize)) {
    return {
      width: addUnit(originSize[0]),
      height: addUnit(originSize[1])
    };
  }
  return undefined;
}

export function getZIndexStyle(zIndex?: string | number) {
  const style: CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}

const camelizeRE = /-(\w)/g;

export const camelize = (str: string): string => str.replace(camelizeRE, (_, c) => c.toUpperCase());

/**
 * 校验视频的格式
 * @param videoUrl 视频链接
 * @returns 返回判断值
 */
export function verifyVideoFormat(videoUrl: string): boolean {
  if (!videoUrl) return false;
  // 根据名称获取文件后缀名
  const suffixName = videoUrl.substring(videoUrl.lastIndexOf('.'));
  return /.(mp4|avi|wmv)$/i.test(suffixName);
}

/**
 * 校验图片的格式
 * @param imageUrl 视频链接
 * @returns 返回判断值
 */
export function verifyImageFormat(imageUrl: string): boolean {
  if (!imageUrl) return false;
  // 根据名称获取文件后缀名
  const suffixName = imageUrl.substring(imageUrl.lastIndexOf('.'));
  return /.(jpg|jpeg|gif|bmp|png)$/i.test(suffixName);
}

/**
 * @description 秒转化时 分 单位
 * @param number 秒单位
 * @returns '01:02:03' 字符串形式 小时 分钟 秒
 */

export function secondToMMSS(params: number): string {
  if (typeof params === 'undefined') return '';
  if (params < 0) throw new Error('[params]: should not < 0');
  const m = Math.floor(params / 60);
  const s = Math.floor(params % 60);
  //默认输出
  return `${setZero(m)}:${setZero(s)}`;
}
/**
 * @description 秒转化时 分 单位
 * @param number 秒单位
 * @returns '02分钟03分钟' 字符串形式 小时 分钟 秒
 */

export function secondToMMSSZH(params: number): string {
  if (typeof params === 'undefined') return '';
  if (params < 0) {
    throw new Error('[params]: should not < 0');
  }
  const m = Math.floor(params / 60);
  const s = Math.floor(params % 60);
  //默认输出
  return `${m}分${s}秒`;
}
/**
 * @description 秒转化时 分 秒 单位
 * @param number 秒单位
 * @returns '01:02:03' 字符串形式 小时 分钟 秒
 */
export function secondTohhmmss(params: number): string {
  if (typeof params === 'undefined') return '';
  if (params <= 0) return '00:00:00';
  const h = Math.floor(params / 360);
  const m = Math.floor((params % 360) / 60);
  const s = Math.floor((params % 360) % 60);
  //时 分 秒
  //默认输出
  return `${setZero(h)}:${setZero(m)}:${setZero(s)}`;
}

/**
 * 时间戳转hhmmss
 *
 * @param   {number}  pramas  时间戳
 *
 * @return  {string}  hhmmss        [return description]
 */
export function secondToHHMMSS(params: number): string {
  if (params < 0) return '00:00:00';
  const time = new Date(params * 1000);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  //默认输出
  return `${setZero(hours)}:${setZero(minutes)}:${setZero(seconds)}`;
}

// 将分钟转为时间00:00:00
export function minuteToHHMMSS(params: number): string {
  if (params <= 0) return '00:00:00';
  const hours = params < 60 ? 0 : Math.floor(params / 60);
  const minutes = params % 60;
  const seconds = 0;

  //默认输出
  return `${setZero(hours)}:${setZero(minutes)}:${setZero(seconds)}`;
}

/**
 *
 * @param num 时间数字
 * @returns 补零后的
 */
export function setZero(num: number): string {
  return `00${num}`.slice(-2);
}

const weekMap = {
  0: '日',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六'
};
/**
 * 转为时间 12.12 周三 12:12
 *
 * @param   {number}  time  输入的时间戳
 *
 * @return  {string}        返回要求的时间格式
 */
export function timeToDate(time: number): string {
  if (time <= 0) return '';

  const date = new Date(time * 1000);
  const weekDay = date.getDay();
  const months = date.getMonth();
  const dates = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${setZero(months + 1)}.${setZero(dates)} 周${weekMap[weekDay]} ${setZero(hours)}:${setZero(minutes)}`;
}

/**
 * 秒转分钟
 * @param time [number] 秒钟
 * @return 分钟
 */
export function secondToMinute(time: number): number {
  if (time > 0) return Math.ceil(time / 60);
  return 0;
}
