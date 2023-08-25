import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoApp from '../views/TodoApp.vue'
import TodoPage from '../views/TodoPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoApp
    },
    {
      path: '/todoPage',
      name: 'Todo',
      component:TodoPage
    }
  ]
})

export default router
