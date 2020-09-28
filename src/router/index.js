import Vue from 'vue';
import Router from 'vue-router';
import List from '../views/List';
import About from '../views/About';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'list',
    component: List,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  }
];


export default routes;
