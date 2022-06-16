import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 不需要权限
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import('@/views/login/reset.vue')
  },
  {
    path: '/404',
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
        path: '/siteBuilder',
        name: 'siteBuilder',
        component: () => import('@/views/homePage/index.vue'),
        children: [
          {
            path: 'editModules',
            name: 'siteBuilder_editModules',
            component: () => import('@/views/homePage/editModules/index.vue'),
          },
          {
            path: 'editPage',
            name: 'siteBuilder_editPage',
            component: () => import('@/views/homePage/editPage/index.vue'),
          },
          {
            path: 'selectPage',
            name: 'siteBuilder_selectPage',
            component: () => import('@/views/homePage/selectPage/index.vue'),
          },
          {
            path: 'editLinkPage',
            name: 'siteBuilder_editLinkPage',
            component: () => import('@/views/homePage/editLinkPage/index.vue'),
          },
          {
            path: 'editClearBin',
            name: 'siteBuilder_editClearBin',
            component: () => import('@/views/homePage/editClearBin/index.vue')
          }
        ]
      },
      {
        path: '/marketing',
        name: 'marketing',
        component: () => import('@/views/marketing/index.vue'),
        meta: { title: 'Update', icon: 'marketing' },
        children: [
          {
            path: 'promotion/:type/:target',
            name: 'promotion',
            component: () => import('@/views/marketing/promotion/index.vue')
          },
          {
            path: 'giftCard/:target',
            name: 'giftCard',
            component: () => import('@/views/marketing/giftCard/index.vue')
          }
        ]
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/homePage/index.vue')
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
        component: () => import('@/views/homePage/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
