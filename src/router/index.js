import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Home from '../views/Home.vue';
import Panels from '../views/Panels.vue';
import Cards from '../views/Cards.vue';
import authMiddleware from '@/middleware/authMiddleware';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: '/namespaces',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/namespaces/:slug',
    name: 'Panels',
    component: Panels,
  },
  {
    path: '/namespaces/:slug/panels/:panelId',
    name: 'Cards',
    component: Cards,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(authMiddleware);

export default router;
