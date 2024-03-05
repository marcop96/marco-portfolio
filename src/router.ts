import { createRouter, createWebHistory } from 'vue-router'



// Update once you need routes
// Remember to import over at `main.ts` by adding
// `app.use(router)` before `app.mount('#app')`

const routes = [
  {
    path: '/',
    component: () => import('./views/HomePage.vue'),
  },
  {
    path: '/about',
    component: () => import('./views/AboutMe.vue'),
  },
  {
    path: '/contactme',
    component: () => import('./views/ContactMe.vue'),
  },
  {
    path: '/projects',
    component: () => import('./views/TheProjects.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
