import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: "main" },
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: '/page/:pageSlug?',
    name: 'CurrentPage',
    meta: { layout: "main" },
    component: () => import("../views/CurrentPage.vue"),
    props: true,
  },
  {
    path: '/admin/',
    name: 'adminPage',
    meta: {
      layout: "empty",
    },
    component: () => import("../views/AdminPage.vue"),
  },
  {
    path: '/admin/menuEditor',
    name: 'menuEditor',
    meta: {
      layout: "empty",
    },
    component: () => import("../components/admin-panel/MenuEditor.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
