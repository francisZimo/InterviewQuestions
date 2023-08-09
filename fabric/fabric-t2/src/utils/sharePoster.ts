import { Component, createApp } from 'vue';
import QRCode from 'qrcode';
import { MJsBridge } from '@/utils';
import { MJsBridgeSetting, ShareStatusEnum } from '@/utils/mJsBridge';

const mountComponent = (component: Component, rootProps: any = {}) => {
  const rootContainer = document.createElement('div');
  document.body.appendChild(rootContainer);
  const app = createApp(component, rootProps);
  app.mount(rootContainer);
  return {
    dom: rootContainer.children[0],
    unmount() {
      app.unmount();
      document.body.removeChild(rootContainer);
    }
  };
};

let posterDom: HTMLElement | null = null;

interface DefaultProps {
  isRawQrCode?: boolean; //true 如果传入的url并非真实二维码图片，则可以启动进行前端生成
  qrCode?: string; //传入的二维码url
}
/**
 * useReportPoster 调用函数进行海报分享
 * @param template 海报模板
 * @param props 传入的props参数 默认有个qrCode，传入值则会生成二维码，否则不会
 * @param setting 需要传入的额外参数
 */
export const useReportPoster = async <T extends DefaultProps>(
  template: any,
  props: T,
  setting?: Partial<MJsBridgeSetting>
): Promise<ShareStatusEnum> => {
  try {
    let qrCode = '';
    if (props?.qrCode) {
      qrCode = await QRCode.toDataURL(props?.qrCode);
    }
    if (!posterDom) {
      const { dom, unmount } = mountComponent(template, {
        ...props,
        qrCode
      });
      posterDom = dom as HTMLElement;
    }

    const res = await MJsBridge.shareAndSnippingPoster(posterDom, setting);
    if (res === ShareStatusEnum.SHARE_SUCCESS) {
      return Promise.resolve(ShareStatusEnum.SHARE_SUCCESS);
    }
    throw new Error();
  } catch (e) {
    return Promise.resolve(ShareStatusEnum.SHARE_FAIL);
  }
};
