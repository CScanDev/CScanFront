import { createRouter, createWebHistory } from "vue-router";
import SearchView from "../views/SearchView.vue";
import HomeViewVue from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViewVue,
    },
    {
      path: "/:searchValue",
      name: "search",
      component: SearchView,
      alias: "/:searchValue",
    },
  ],
});

export default router;
