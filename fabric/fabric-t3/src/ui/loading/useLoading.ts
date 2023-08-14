import { createVNode, render } from 'vue';
import LoadingTemplate from './Loading.vue';

let container: Element | ShadowRoot | null = null;

function showLoading(msg = '加载中...') {
  container = document.createElement('div');
  const vm = createVNode(LoadingTemplate, { msg });
  render(vm, container);
  return {
    showLoading,
    hideLoading
  };
}

function hideLoading() {
  if (!container) return;
  setTimeout(() => {
    render(null, container as Element | ShadowRoot);
    container = null;
  }, 0.5 * 1000);
}

export { showLoading, hideLoading };
