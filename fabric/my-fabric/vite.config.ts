import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 本地服务器配置

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3009,
    open: true,
    host: true,
  },
  plugins: [vue()],
});
