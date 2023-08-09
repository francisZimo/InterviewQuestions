import { createRouter, createWebHashHistory } from 'vue-router';

/**
 * 这里尽量使用懒加载方式去写
 */
const HomePage = () => import('@src/pages/home/index.vue');
const AboutPage = () => import('@src/pages/AboutPage.vue');
const NotFound = () => import('@src/pages/not-found/index.vue');

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
