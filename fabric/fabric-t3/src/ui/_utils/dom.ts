import { Component, createApp } from 'vue';

export const stopPropagation = (event: Event) => event.stopPropagation();

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

export function mountComponent(RootComponent: Component, props: any = {}) {
  const app = createApp(RootComponent, props);
  const root = document.createElement('div');
  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount() {
      app.unmount();
      document.body.removeChild(root);
    }
  };
}
