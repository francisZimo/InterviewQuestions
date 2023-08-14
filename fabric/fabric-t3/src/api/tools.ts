import toast from '@/ui/toast/useToast';
import { AxiosResponse } from '@xes/xes-axios';

// 数据扒皮
export function pretreatment<T = any>(responseData: AxiosResponse): T | undefined {
  const { code, data, msg } = responseData?.data || {};
  if (code === 200) {
    return data as T;
  }
  // 自定义的错误
  if (code === 67890) {
    return undefined;
  }
  // 自定义的错误
  if (code === 12345) {
    return undefined;
  }
  toast(msg || '网络异常，请稍后再试');
  return undefined;
}

export default null;
