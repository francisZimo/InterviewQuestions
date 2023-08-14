import html2canvas from 'html2canvas';
import { hideLoading, showLoading } from '@/ui/loading/useLoading';
import MJsBridge from '@xes/wxjsbridge';
import { vPlatform } from '@xes/xytools-core';
/**
 * @description 隐藏端上返回按钮
 */
export function hideAppWebviewBack() {
  window?.xesApp?.setTitleVisible(0); // xesApp 端上在webview中注入方法
  MJsBridge.setNavigationBar({
    navigationBarType: 1,
    rightButtonHidden: 1,
    hidden: 1
  });
}

/**
 * @description 获取端上设备信息
 * @returns
 */
export function getAppDeviceInfo() {
  return new Promise<Record<string, unknown>>((resolve) => {
    if (vPlatform.isXesMobile) {
      const timer = setTimeout(() => {
        resolve({});
      }, 1000);
      MJsBridge.deviceInformation((e, res) => {
        resolve(res);
        clearTimeout(timer);
      });
    } else {
      resolve({});
    }
  });
}

/**
 * @description 获取端上用户信息
 * @returns
 */
export function getAppUserInfo() {
  return new Promise<Record<string, unknown>>((resolve) => {
    if (vPlatform.isXesMobile) {
      const timer = setTimeout(() => {
        resolve({});
      }, 1000);
      MJsBridge.userInformation((e, res) => {
        resolve(res);
        clearTimeout(timer);
      });
    } else {
      resolve({});
    }
  });
}

export type MJsBridgeSetting = {
  isOneKeyShare: boolean; // 是否一键分享，true是 false否
  type: 1 | 2 | 3; //1.网页，2大图，3小程序
  scence: number; //分享按钮设置参考scence参数表
  imageURL?: string; //图片分享时图片网络地址 http://xxxxxx
  imageLocalPath?: string; //图片分享时本地图片缓存地址
  title?: string; //分享标题
  describe?: string; //分享内容
  shareURL?: string; //分享url
};
export enum ShareStatusEnum {
  SHARE_SUCCESS = 1,
  SHARE_FAIL = 2,
  SHARE_CANCEL = 3
}

/**
 * @description 调用端上分享
 * @param setting TMJsBridgeSetting 必填 分享配置的参数
 * @param shareCB function 可选 要进行处理事件的回调函数
 * @returns Promise<1|2|3> 分享后的异步状态 1-成功 2-失败 3-取消
 */
async function shareJsBridge(setting: MJsBridgeSetting, shareCB?: (params?: any) => void): Promise<ShareStatusEnum> {
  return new Promise((resolve) => {
    MJsBridge.share(setting, (_: Error, res?: { status?: ShareStatusEnum }) => {
      if (res?.status === ShareStatusEnum.SHARE_SUCCESS) {
        shareCB?.();
        resolve(ShareStatusEnum.SHARE_SUCCESS);
      } else if (res?.status === ShareStatusEnum.SHARE_CANCEL) {
        resolve(ShareStatusEnum.SHARE_CANCEL);
      } else {
        resolve(ShareStatusEnum.SHARE_FAIL);
      }
    });
  });
}

/**
 * @description 截取dom生成海报分享
 * @param posterDom 必填 海报dom
 * @param setting 可选 分享设置
 * @returns 生成海报成功状态 Promise<ShareStatusEnum | void>
 */
export async function shareAndSnippingPoster(
  posterDom: HTMLElement | null,
  setting?: Partial<MJsBridgeSetting>
): Promise<ShareStatusEnum | void> {
  if (posterDom) {
    try {
      showLoading('图片生成中...');
      const canvas = await html2canvas(posterDom, {
        useCORS: true,
        logging: false,
        backgroundColor: null
      });
      const base64URL = canvas.toDataURL();
      hideLoading();
      const res = await saveImageJsBridge({
        name: `${new Date().getTime()}`,
        base64: base64URL
      });

      const shareRes = await shareJsBridge({
        type: 2,
        isOneKeyShare: false,
        imageLocalPath: res as string,
        scence: 1 + 2 + 4 + 8 + 32,
        ...setting
      });
      Promise.resolve(shareRes);
    } finally {
      hideLoading();
    }
  } else {
    Promise.resolve(ShareStatusEnum.SHARE_FAIL);
  }
}

export interface SaveImageSetting {
  name: string; //图片名称
  url?: string; //网络图片url
  base64?: string; //图片base64
  mode?: 0 | 1 | 2; // 0 默认保存app本地缓存并返回路径path 1 仅保存到系统相册 2 既保存到系统相册又保存到app本地缓存并返回路径path
}
export interface SaveImageRes {
  status: number; // 保存图片成功状态 1 成功 0 失败
  path: string; // 保存图片后的路径
}
/**
 * 保存图片
 * @param saveImage 保存图片的参数
 * @returns Promise<string | Error> 成功返回图片路径，失败返回错误信息
 */
export function saveImageJsBridge(saveImage: SaveImageSetting): Promise<string | Error> {
  return new Promise((resolve, reject) => {
    return MJsBridge.saveImage(saveImage, (err: Error, res: SaveImageRes) => {
      if (res.status === 1) {
        resolve(res.path);
      }
      reject(err);
    });
  });
}
