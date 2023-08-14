import { reactive, ComponentPublicInstance, createApp, Component } from 'vue';
import { hideLoading, showLoading } from '../loading/useLoading';
import { Deferred } from '../_utils';
import template from './page.vue';

export type TEmptyInstance = {
  deferred?: Deferred<boolean>;
  value: ComponentPublicInstance;
  unmount: () => void;
};

let instance: TEmptyInstance | null;

export function mountComponent(RootComponent: Component, props: any = {}): TEmptyInstance {
  const app = createApp(RootComponent, props);
  const root = document.createElement('div');
  const mountTarget = document.body;
  mountTarget.appendChild(root);

  return {
    value: app.mount(root),
    unmount() {
      app.unmount();
      mountTarget.removeChild(root);
    }
  };
}

let deferred: Deferred<any> | null;
const state = reactive({
  isShow: false
});

function showEmpty(pageData = {}, bottomFunc?: () => void) {
  closeEmpty();
  deferred = new Deferred();
  showLoading();
  instance = mountComponent(template, {
    pageData: {
      image: 'error',
      imageSize: [250, 250],
      description: '加载失败，请检查网络',
      btnName: '重试',
      ...pageData
    },
    bottomFunc
  });
  hideLoading();
  return deferred;
}

function closeEmpty(closeData: any = null) {
  if (!state.isShow) return;
  deferred?.resolve(closeData);
  deferred = null;
  state.isShow = false;
  setTimeout(() => {
    instance?.unmount();
    instance = null;
  }, 500);
}
export { showEmpty, closeEmpty, state };
