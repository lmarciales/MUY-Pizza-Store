import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('LoggedUser');
  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.name !== 'Home' && isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
