import createRequest from '@/utils/http';
import { AxiosRequestConfig } from '@xes/xes-axios';
import { getQueryObj } from '@/utils';
import toast from '@/components/libs/toast/useToast';
import { pretreatment } from './tools';

const http = createRequest({
  domain: '',
  basePath: '/icenter-go/App/Diary/',
  errFall: true, // 出错时, 需要手动catch
  handleError: () => toast('网络异常，请稍后再试')
});

/**
 * @description 参数预处理
 */
const mergeParams = (params = {}) => ({
  ...getQueryObj(),
  ...params
});

// pretreatment做数据预处理
const post = <T = any>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
  http.post(url, data, config).then((resData) => pretreatment<T>(resData));

/**
 * @description 演示 通用方法，会对数据进行预处理(扒皮) 使用封装好的post方法
 */
export const postDemo = (params = { id: 0 }) => post<DemoData>('postTest', mergeParams(params));

/**
 * @description 演示 少数特殊场景，不走通用处理时，直接使用 http.post 方法
 */
export const postDemo2 = (params = { id: 0 }) => http.post<DemoData>('postTest', mergeParams(params));

export default null;
