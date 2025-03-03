import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/chapter1",
      name: "chapter1",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Chapter1.vue"),
    },
    {
      path: "/chapter2",
      name: "chapter2",
      component: () => import("../views/Chapter2.vue"),
    },
    {
      path: "/chapter3",
      name: "chapter3",
      component: () => import("../views/Chapter3.vue"),
    },
  ],
});

export default router;
