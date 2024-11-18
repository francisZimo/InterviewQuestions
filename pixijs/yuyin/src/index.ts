import { L } from '@/utils/log';
import { createApp } from 'vue';
import { getQueryObj } from '@/utils';
import router from './router';
import App from './App.vue';
import '@src/assets/styles/reset.css';
import 'lib-flexible/flexible.js';

// 关闭弹性
window?.closeScrollEvent?.(0);

// 调试工具;
if (/eruda=true/.test(window.location.href) || process.env.ERUDA) {
  const script = document.createElement('script');

  document.body.appendChild(script);
  script.onload = function () {
    eruda.init();
    initConsoleLog();
  };
} else {
  initConsoleLog();
}

const app = createApp(App);
app.use(router).use(L.handleVueError());
app.mount('#app');

function initConsoleLog() {
  console.log('getQueryObj', getQueryObj());
  console.log('LINE', process.env.LINE);
  console.log('CURRENT_NODE_ENV', process.env.NODE_ENV);
  console.log('打包时间', process.env.BUILD_TIME);
}
