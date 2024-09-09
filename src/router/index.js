import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programing',
      name: 'programing',
      component: () => import('../views/Programing.vue')
    },
    {
      path: '/designer',
      name: 'designer',
      component: () => import('../views/Designer.vue')
    },
    {
      path: '/dj',
      name: 'dj',
      component: () => import('../views/Dj.vue')
    }
  ]
})

export default router
