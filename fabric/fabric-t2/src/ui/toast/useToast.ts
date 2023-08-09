import { createVNode, render } from 'vue';
import ToastTemplate, { ToastProps } from './Toast.vue';
function showToast(props: ToastProps) {
  const close = () => {
    if (!container) {
      return;
    }
    // 卸载
    render(null, container);
    container && document.body.removeChild(container);
  };
  const container = document.createElement('div');
  const vm = createVNode(ToastTemplate, { close, ...props });
  render(vm, container);
  document.body.appendChild(container);
}

function Toast(msg: string) {
  showToast({ msg });
}

export { showToast };

export default Toast;
