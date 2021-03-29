import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("../views/pricing/Pricing.vue")
  },
  {
    path: "/quality",
    name: "Quality",
    component: () => import("../views/quality/Quality.vue")
  },
  // {
  //   path: "/meet-us",
  //   name: "MeetUs",
  //   component: () => import("../views/meet-us/MeetUs.vue")
  // },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: () => import("../views/not-found/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
