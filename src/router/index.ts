import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

console.log(import.meta.env)

export default router
