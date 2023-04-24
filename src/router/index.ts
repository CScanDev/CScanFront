import { createRouter, createWebHistory } from "vue-router";
import UserCourses from "../views/UserCoursesView.vue";
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
      path: "/UserCourses",
      name: "coureses",
      component: UserCourses,
    },
  ],
});

export default router;
