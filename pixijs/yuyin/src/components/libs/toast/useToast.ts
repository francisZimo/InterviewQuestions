import { createVNode, render } from 'vue';
import ToastTemplate from './Toast.vue';

export interface IProps {
  type?: string;
  msg?: string;
  icon?: string;
  duration?: number;
}

let container: Element | ShadowRoot = null;

function showToast(props: IProps) {
  container = document.createElement('div');
  const vm = createVNode(ToastTemplate, { ...props });
  render(vm, container);
  document.body.appendChild(container);
  // hide(props.duration || 0.5 * 1000);
  return {
    showToast,
    hideToast
  };
}

function hideToast(duration = 0.5 * 1000) {
  if (!container) return;
  setTimeout(() => {
    render(null, container);
    container = null;
    document.body.removeChild(container);
  }, duration);
}

function Toast(msg: string) {
  showToast({ msg });
}

export { showToast, hideToast };

export default Toast;
