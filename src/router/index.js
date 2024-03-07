import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/v-home-page.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../views/v-tasks.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
