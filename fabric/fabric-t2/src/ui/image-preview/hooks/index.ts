import { reactive, ComponentPublicInstance, createApp, Component } from 'vue';
import Deferred from '../../_utils/deferred';
import template from './template.vue';

export type TPreviewInstance = {
  deferred?: Deferred<boolean>;
  value: ComponentPublicInstance;
  unmount: () => void;
};

let instance: TPreviewInstance | null;

export function mountComponent(RootComponent: Component, props: any = {}): TPreviewInstance {
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
  modelValue: false
});

function showImagePreview(pageData = {}) {
  state.modelValue = true;
  deferred = new Deferred();
  instance = mountComponent(template, {
    ...pageData
  });
  return deferred;
}

function closeImagePreview() {
  if (!state.modelValue) return;
  deferred = null;
  state.modelValue = false;

  setTimeout(() => {
    instance?.unmount();
    instance = null;
  }, 0);
}
export { showImagePreview, closeImagePreview, state };
