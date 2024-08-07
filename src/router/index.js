import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddApplicant from '../views/AddApplicant.vue';
import EditApplicant from '../views/EditApplicant.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddApplicant',
    component: AddApplicant
  },
  {
    path: '/edit/:id',
    name: 'EditApplicant',
    component: EditApplicant
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
