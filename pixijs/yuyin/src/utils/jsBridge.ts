import WXJsBridge from '@xes/wxjsbridge';
import { isApp } from './is';
/**
 * @description 隐藏端上返回按钮
 */
export const hideAppNavBar = () => {
  WXJsBridge.setNavigationBar({
    navigationBarType: 1,
    rightButtonHidden: 1,
    hidden: 1
  });
};
export function getDeviceInformation() {
  return new Promise<Record<string, unknown>>((resolve) => {
    if (isApp) {
      const timer = setTimeout(() => {
        resolve({});
      }, 1000);
      WXJsBridge.deviceInformation((e, res) => {
        resolve(res);
        clearTimeout(timer);
      });
    } else {
      resolve({});
    }
  });
}

export function getUserInformation() {
  return new Promise<Record<string, unknown>>((resolve) => {
    if (isApp) {
      const timer = setTimeout(() => {
        resolve({});
      }, 1000);
      WXJsBridge.userInformation((e, res) => {
        resolve(res);
        clearTimeout(timer);
      });
    } else {
      resolve({});
    }
  });
}

/**
 * @description 隐藏端上返回按钮
 */
export const hideBackBtnOfClient = () => {
  window?.xesApp?.setTitleVisible(0); // xesApp 端上在webview中注入方法
  WXJsBridge.setNavigationBar({
    navigationBarType: 1,
    rightButtonHidden: 1,
    hidden: 1
  });
};

type TShareSetting = {
  isOneKeyShare: number;
  type: number;
  scence: number;
  imageLocalPath?: string;
  title?: string;
  describe?: string;
  shareURL?: string;
};

export function launchAppToShare(setting: TShareSetting, shareCB?: () => void) {
  return new Promise((resolve, reject) => {
    // if (window.xesApp) {
    WXJsBridge.share(setting, (err: any, res: any) => {
      console.log(`分享回调：err:${err}`, `分享回调：res:${res}`);
      if (res && res.status === 1) {
        shareCB && shareCB();
        resolve(res);
      }
      reject(err);
    });
  });
}
