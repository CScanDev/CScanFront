import { createRouter, createWebHistory } from "vue-router";
import SearchView from "../views/SearchView.vue";
import ProductListView from "../views/ProductListNullView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductListView,
    },
    {
      path: "/:searchValue",
      name: "search",
      component: SearchView,
    },
  ],
});

export default router;
