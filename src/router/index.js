import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Home from '../views/Home.vue';
import Panels from '../views/Panels.vue';
import Cards from '../views/Cards.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/namespaces',
    name: 'Home',
    component: Home,
  },
  {
    path: '/namespaces/:name',
    name: 'Panels',
    component: Panels,
  },
  {
    path: '/panels/:name',
    name: 'Cards',
    component: Cards,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
