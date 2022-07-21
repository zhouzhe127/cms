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
    path: '/svg',
    name: 'svg',
    component: () => import('@/views/svg/index.vue')
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
            component: () =>
              import('@/views/homePage/pageDialog/editModules/index.vue')
          },
          {
            path: 'editPage',
            name: 'siteBuilder_editPage',
            component: () =>
              import('@/views/homePage/pageDialog/editPage/index.vue')
          },
          {
            path: 'selectPage',
            name: 'siteBuilder_selectPage',
            component: () =>
              import('@/views/homePage/pageDialog/selectPage/index.vue')
          },
          {
            path: 'editFolder',
            name: 'siteBuilder_editFolder',
            component: () =>
              import('@/views/homePage/pageDialog/editFolder/index.vue')
          },
          {
            path: 'editSmart',
            name: 'siteBuilder_editSmart',
            component: () =>
              import('@/views/homePage/pageDialog/editSmart/index.vue')
          },
          {
            path: 'editLinkPage',
            name: 'siteBuilder_editLinkPage',
            component: () =>
              import('@/views/homePage/pageDialog/editLinkPage/index.vue')
          },
          {
            path: 'editLegal',
            name: 'siteBuilder_editLegal',
            component: () =>
              import('@/views/homePage/pageDialog/editLegal/index.vue')
          },
          {
            path: 'editClearBin',
            name: 'siteBuilder_editClearBin',
            component: () =>
              import('@/views/homePage/pageDialog/editClearBin/index.vue')
          },
          {
            path: 'plpSettings',
            name: 'siteBuilder_plpSettings',
            component: () =>
              import('@/views/homePage/pageDialog/plpSettings/index.vue')
          },
          {
            path: 'gridSettings',
            name: 'siteBuilder_gridSettings',
            component: () =>
              import('@/views/homePage/pageDialog/gridBlockSettings/index.vue')
          },
          {
            path: 'infoSettings',
            name: 'siteBuilder_infoSettings',
            component: () =>
              import('@/views/homePage/pageDialog/infoBlockSettings/index.vue')
          },
          {
            path: 'footerSettings',
            name: 'siteBuilder_footerSettings',
            component: () =>
              import('@/views/homePage/pageDialog/footerSettings/index.vue')
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
            path: 'giftCard/:target/:id?',
            name: 'giftCard',
            component: () => import('@/views/marketing/giftCard/index.vue')
          },
          {
            path: 'announcement/:target/:id?',
            name: 'announcement',
            component: () => import('@/views/marketing/announcement/index.vue')
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
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
