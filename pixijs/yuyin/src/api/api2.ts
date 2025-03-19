// import createRequest from '@/utils/http';
// import { AxiosRequestConfig } from '@xes/xes-axios';
// import { getQueryObj } from '@/utils';
// import toast from '@/components/libs/toast/useToast';
// import { pretreatment } from './tools';

// const http = createRequest({
//   domain: '',
//   basePath: '/icenter-go/App/Diary/',
//   errFall: true, // 出错时, 需要手动catch
//   handleError: () => toast('网络异常，请稍后再试')
// });

// /**
//  * @description 参数预处理
//  */
// const mergeParams = (params = {}) => ({
//   ...getQueryObj(),
//   ...params
// });

// // const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
// //   new Promise<T>((resLv1) => {
// //     setTimeout(() => {
// //       http.post(url, qs.stringify(data), config).then((res) => resLv1(pretreatment<T>(res)));
// //     }, 3 * 1000);
// //   });

// // pretreatment做数据预处理
// const post = <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
//   http.post(url, data, config).then((resData) => pretreatment<T>(resData));

// /**
//  * @description 演示demo
//  */
// export const postDemo2 = (params = { name: '默认名称' }) => post<DemoData>('postTest', mergeParams(params));

// export default null;
