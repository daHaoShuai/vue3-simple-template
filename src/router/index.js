import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: '404 not found'
    },
    component: () => import('@view/404.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('@view/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于'
    },
    component: () => import('@view/About.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

// 路由前置拦截
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'vue3-simple-template'
  next()
})

export default router
