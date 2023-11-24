import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/about",
    name: "about",
    // component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
