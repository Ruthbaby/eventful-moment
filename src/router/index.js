import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MyBucketsView from '../views/MyBucketsView.vue';
import SingleItemView from '../views/SingleItemView.vue';
import AddItemView from '../views/AddItemView.vue';
import EditItemView from '../views/EditItemView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/my-buckets',
      name: 'my-buckets',
      component: MyBucketsView,
    },
    {
      path: '/item/:id',
      name: 'single-item',
      component: SingleItemView,
    },
    {
      path: '/add-item',
      name: 'add-item',
      component: AddItemView,
    },
    {
      path: '/edit-item/:id',
      name: 'edit-item',
      component: EditItemView,
    },
  ],
});

export default router;
