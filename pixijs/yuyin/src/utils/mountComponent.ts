import { createApp, Component } from 'vue';

export default (RootComponent: Component, prop: any) => {
  const app = createApp(RootComponent, prop);
  const root = document.createElement('div');
  document.body.appendChild(root);
  return {
    root,
    value: app.mount(root),
    unmount() {
      app.unmount();
      document.body.removeChild(root);
    },
    isAutoClose: true
  };
};
