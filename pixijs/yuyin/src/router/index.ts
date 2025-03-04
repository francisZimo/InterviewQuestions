import { createRouter, createWebHashHistory } from 'vue-router';

/**
 * 这里尽量使用懒加载方式去写
 */
const HomePage = () => import('@src/pages/home/index.vue');
const BoWen = () => import('@src/pages/bolang/index.vue');
const Dragon = () => import('@src/pages/game/index.vue');
const Base = () => import('@src/pages/base/index.vue');
const Mask = () => import('@src/pages/base/mask/index.vue');
const Spine = () => import('@src/pages/base/spine/index.vue');
const Spine2 = () => import('@src/pages/base/spine-2/index.vue');
const Spine3 = () => import('@src/pages/base/spine-3/index.vue');
const Run = () => import('@src/pages/run/index.vue');

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/run',
    component: Run
  },
  {
    path: '/bowen',
    component: BoWen
  },
  {
    path: '/game',
    component: Dragon
  },
  {
    path: '/base',
    component: Base,
    children: [
      {
        path: 'mask',
        component: Mask
      },
      {
        path: 'spine',
        component: Spine
      },
      {
        path: 'spine2',
        component: Spine2
      },
      {
        path: 'spine3',
        component: Spine3
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
