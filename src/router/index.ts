import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 不要权限
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/error/index.vue')
  }
]
// 需要权限管理
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'main',
        name: 'Main',
        component: () => import('@/views/pagecontent/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
