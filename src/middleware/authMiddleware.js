import store from '@/store';

export default (to, _from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.getUser) {
      next();
    } else {
      next({
        path: '/',
      });
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (store.getters.getUser) {
      next({
        name: 'Home',
      });
    } else {
      next();
    }
  } else {
    next();
  }
};
