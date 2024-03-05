import { createRouter, createWebHistory } from "vue-router";

// Update once you need routes
// Remember to import over at `main.ts` by adding
// `app.use(router)` before `app.mount('#app')`

const routes = [
  {
    path: "/",
    component: () => import("./views/HomePage.vue"),
    meta: { transition: "slide-left" },
  },
  {
    path: "/about",
    component: () => import("./views/AboutMe.vue"),
    meta: { transition: "fade" },
  },
  {
    path: "/contactme",
    component: () => import("./views/ContactMe.vue"),
    meta: { transition: "slide-right" },
  },
  {
    path: "/projects",
    component: () => import("./views/TheProjects.vue"),
    meta: { transition: "zoom" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("./views/NotFound.vue"),
    meta: { transition: "fade" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
