/**
 * 一般在容器中做这4件事
 *    1. 定义容器并导出
 *    2. 使用容器中的state
 *    3. 修改容器中的state
 *    4. 使用容器中的action
 */
import { markRaw, defineComponent } from 'vue'
import { defineStore } from 'pinia'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteBuilderMenu from '@/components/SiteBuilderMenu/index.vue'
import MarketingMenu from '@/components/MaketingMenu/index.vue'
import Default from '@/components/Default/index.vue'
import UpdateMenu from '@/components/UpdateMenu/index.vue'

/**
 * 1. 定义容器并导出
 * 参数一: 容器ID, 唯一, 将来 Pinia 会把所有的容器挂载到根容器
 * 参数二: 选项对象
 * 返回值: 函数, 调用的时候要空参调用, 返回容器实例
 */
export const menuStore = defineStore('menu', {
  /**
   * 类似组件的 data, 用于存储全局的的状态
   * 注意:
   *    1.必须是函数, 为了在服务端渲染的时候避免交叉请求导致的数据交叉污染
   *    2.必须是箭头函数, 为了更好的 TS 类型推导
   */
  state: () => {
    return {
      menuWidth: 213, // 左侧菜单宽度
      marketingMenuList: [
        {
          name: 'PROMOTION',
          type: 'promotion',
          expand: false,
          list: []
        },
        {
          name: 'GIFT CARD',
          type: 'giftCard',
          expand: false,
          list: []
        },
        {
          name: 'ANNOUNCEMENT',
          type: 'announcement',
          expand: false,
          list: []
        }
      ], // marketing 二级菜单数据
      currentMenuComponent: markRaw(Default), // 二级菜单组件
      showMobileMenuItem: true, // 手机端是否展示一级菜单
      showMobileSubMenu: true, // 手机端是否展示二级菜单
      mobileMainPaddingTop: 80, // 手机端主要区域底部内边距
      outSideMenuRouteName: ['promotion', 'giftCard', 'announcement'],
      menuWidthMap: new Map<string, string>([
        ['home', '213px'],
        ['siteBuilder', '320px'],
        ['marketing', '40%'],
        ['promotion', '40%'],
        ['giftCard', '40%'],
        ['announcement', '40%']
      ]),
      submenuComponent: new Map<string, ReturnType<typeof defineComponent>>([
        ['update', markRaw(UpdateMenu)],
        ['siteBuilder', markRaw(SiteBuilderMenu)],
        ['marketing', markRaw(MarketingMenu)],
        ['promotion', markRaw(MarketingMenu)],
        ['giftCard', markRaw(MarketingMenu)],
        ['announcement', markRaw(MarketingMenu)]
      ])
    }
  },
  /**
   * 类似组件的 computed, 用来封装计算属性, 具有缓存特性
   */
  getters: {},
  /**
   * 类似组件的 methods, 封装业务逻辑, 修改state
   * 注意: 里面的函数不能定义成箭头函数(函数体中会用到this)
   */
  actions: {
    // 获取菜单宽度
    getMenuWidth(routeName: any) {
      const menuWidth: any = this.menuWidthMap.has(routeName)
        ? this.menuWidthMap.get(routeName)
        : 213
      return menuWidth
    },
    // 设置菜单宽度
    setMenuWidth() {
      const route = useRoute()
      const routeName: any = route.name
      this.menuWidth = this.getMenuWidth(routeName.split('_')[0])
      watch(
        () => route.name,
        name => {
          const routeName: any = name
          this.menuWidth = this.getMenuWidth(routeName.split('_')[0])
        }
      )
    },
    // 设置二级菜单
    setCurrentMenuComponent() {
      const route = useRoute()
      const routeName: any = route.name
      this.currentMenuComponent = this.submenuComponent.get(
        routeName.split('_')[0]
      )
      watch(
        () => route.name,
        name => {
          const routeName: any = name
          this.currentMenuComponent = this.submenuComponent.get(
            routeName.split('_')[0]
          )
        }
      )
    },
    // 设置二级菜单数据
    setMarketingMenuList(menuList: []) {
      this.marketingMenuList = menuList
    },
    // 设置且监听是否显示二级菜单，用于移动端
    setShowMobileSubMenu() {
      const route = useRoute()
      const routeName: any = route.name
      this.showMobileSubMenu = !this.outSideMenuRouteName.includes(routeName)
      watch(
        () => route.name,
        name => {
          const routeName: any = name
          this.showMobileSubMenu =
            !this.outSideMenuRouteName.includes(routeName)
        }
      )
    },
    computedMobileMainPaddingTop(routeName: string) {
      if (routeName === 'home') {
        this.mobileMainPaddingTop = this.showMobileMenuItem ? 340 : 80
      } else {
        this.mobileMainPaddingTop = !this.outSideMenuRouteName.includes(
          routeName
        )
          ? 340
          : 140
      }
    },
    // 设置手机端主要区域底部内边距
    setMobileMainPaddingTop() {
      const route = useRoute()
      const routeName: any = route.name
      this.computedMobileMainPaddingTop(routeName)
      watch(
        () => route.name,
        name => {
          const routeName: any = name
          this.computedMobileMainPaddingTop(routeName)
        }
      )
    }
  }
})
