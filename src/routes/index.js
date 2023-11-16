import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: '/', component: () => import("../pages/Home.vue")},
    { path: '/login', component: () => import("../pages/Login.vue")},
    { path: '/categories', component: () => import("../pages/Categories.vue")},
    { path: '/categories/:category', component: () => import("../pages/Category.vue")},
    {path: '/products/:productId', component: () => import("../pages/products/Product.vue")}


  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history:createWebHistory(),
    routes, // short for `routes: routes`
    scrollBehavior (to, from, savedPosition) {
      return { top:0 } 
    }
  })

  
  export default router