import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 不需要权限
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    hidden: true,
    component: () => import('@/views/error/index.vue')
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/update',
        name: 'update',
        component: () => import('@/views/home/index.vue'),
        meta: { title: 'Update', icon: 'update' }
      },
      {
        path: '/analytics',
        name: 'analytics',
        component: () => import('@/views/home/index.vue'),
        meta: { title: 'Analytics', icon: 'analytics' }
      },
      {
        path: '/marketing',
        name: 'marketing',
        component: () => import('@/views/home/index.vue'),
        meta: { title: 'Update', icon: '' }
      },
      {
        path: '/siteBuilder',
        name: 'siteBuilder',
        component: () => import('@/views/home/index.vue'),
        meta: { title: 'Site Builder', icon: 'siteBuilder' }
      },
      {
        path: 'main',
        name: 'Main',
        component: () => import('@/views/pagecontent/index.vue')
      }
    ]
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
