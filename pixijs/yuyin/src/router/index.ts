import { createRouter, createWebHashHistory } from 'vue-router';

/**
 * 这里尽量使用懒加载方式去写
 */
const HomePage = () => import('@src/pages/home/index.vue');
const AboutPage = () => import('@src/pages/AboutPage.vue');
const NotFound = () => import('@src/pages/not-found/index.vue');
const BoWen = () => import('@src/pages/bolang/index.vue');
const Dragon = () => import('@src/pages/game/index.vue');

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/bowen',
    component: BoWen
  },
  {
    path: '/game',
    component: Dragon
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
