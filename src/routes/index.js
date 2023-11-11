import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: '/', component: () => import("../pages/Home.vue")},
    { path: '/login', component: () => import("../pages/Login.vue")},
  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history:createWebHistory(),
    routes, // short for `routes: routes`
  })

  
  export default router