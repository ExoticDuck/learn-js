import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView.vue";
import { routes, handleHotUpdate } from "vue-router/auto-routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

if (import.meta.hot) {
  handleHotUpdate(router);
}

export default router;
