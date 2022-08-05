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
import { useRoute, RouteRecordName } from 'vue-router'
import SiteBuilderMenu from '@/components/SiteBuilderMenu/index.vue'
import DiscoverMenu from '@/components/DiscoverMenu/index.vue'
import MarketingMenu from '@/components/MaketingMenu/index.vue'
import Default from '@/components/Default/index.vue'
import UpdateMenu from '@/components/UpdateMenu/index.vue'
import {
  getAnnouncementList,
  getGiftCardList,
  getPromotionList
} from '@/api/marketing'
import {
  PromotionItem,
  AnnouncementItem,
  PagingBack
} from '@/api/marketing.type'

interface IMarketingItem {
  name: string
  type: string
  expand: boolean
  isEdit: boolean
  list: PromotionItem[] | AnnouncementItem[]
}
interface IMenuState {
  marketingMenuList: IMarketingItem[]
  routeNameRelativeList: any[]
  [key: string]: any
}

type RouterNameType = RouteRecordName | string | null | undefined

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
  state: (): IMenuState => {
    return {
      menuWidth: 213, // 左侧菜单宽度
      marketingMenuList: [
        {
          name: 'PROMOTION',
          type: 'promotion',
          expand: false,
          isEdit: false, // 是否在编辑数据
          list: []
        },
        {
          name: 'GIFT CARD',
          type: 'giftCard',
          expand: false,
          isEdit: false, // 是否在编辑数据
          list: []
        },
        {
          name: 'ANNOUNCEMENT',
          type: 'announcement',
          expand: false,
          isEdit: false, // 是否在编辑数据
          list: []
        }
      ], // marketing 二级菜单数据
      currentMenuComponent: markRaw(Default), // 二级菜单组件
      showMobileMenuItem: true, // 手机端是否展示一级菜单
      showMobileSubMenu: true, // 手机端是否展示二级菜单
      mobileMainPaddingTop: 80, // 手机端主要区域底部内边距
      outSideMenuRouteName: ['promotion', 'giftCard', 'announcement', 'discover'],
      routeNameRelativeList: [
        {
          parentRouteName: 'marketing',
          sunRouteNames: ['promotion', 'giftCard', 'announcement']
        },
        {
          parentRouteName: 'siteBuilder',
          sunRouteNames: ['discover']
        },
      ], // 用于mobile点击Dashboard返回时的逻辑
      menuWidthMap: new Map<string, string>([
        ['home', '213px'],
        ['siteBuilder', '320px'],
        ['discover', '320px'],
        ['marketing', '40%'],
        ['promotion', '40%'],
        ['giftCard', '40%'],
        ['announcement', '40%']
      ]),
      submenuComponent: new Map<string, ReturnType<typeof defineComponent>>([
        ['update', markRaw(UpdateMenu)],
        ['siteBuilder', markRaw(SiteBuilderMenu)],
        ['discover', markRaw(DiscoverMenu)],
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
    getMenuWidth(routeName: RouterNameType) {
      const menuWidth: number = this.menuWidthMap.has(routeName)
        ? this.menuWidthMap.get(routeName)
        : 213
      return menuWidth
    },
    // 设置菜单宽度
    setMenuWidth() {
      const route = useRoute()
      const routeName: RouterNameType = route.name
      if (typeof routeName === 'string') {
        this.menuWidth = this.getMenuWidth(routeName?.split('_')[0])
      }
      watch(
        () => route.name,
        name => {
          const routeName: RouterNameType = name
          if (typeof routeName === 'string') {
            this.menuWidth = this.getMenuWidth(routeName?.split('_')[0])
          }
        }
      )
    },
    // 设置二级菜单
    setCurrentMenuComponent() {
      const route = useRoute()
      const routeName: RouterNameType = route.name
      if (typeof routeName === 'string') {
        this.currentMenuComponent = this.submenuComponent.get(
          routeName.split('_')[0]
        )
      }
      watch(
        () => route.name,
        name => {
          const routeName: RouterNameType = name
          if (typeof routeName === 'string') {
            this.currentMenuComponent = this.submenuComponent.get(
              routeName.split('_')[0]
            )
          }
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
      const routeName: RouterNameType = route.name
      this.showMobileSubMenu = !this.outSideMenuRouteName.includes(routeName)
      watch(
        () => route.name,
        name => {
          const routeName: RouterNameType = name
          this.showMobileSubMenu =
            !this.outSideMenuRouteName.includes(routeName)
        }
      )
    },
    computedMobileMainPaddingTop(routeName: RouterNameType) {
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
      const routeName: RouterNameType = route.name
      this.computedMobileMainPaddingTop(routeName)
      watch(
        () => route.name,
        name => {
          const routeName: RouterNameType = name
          this.computedMobileMainPaddingTop(routeName)
        }
      )
    },
    // 更新菜单列表数据
    async updateMarketingMenuList(type: string) {
      const index: number = this.marketingMenuList.findIndex(
        item => item.type === type
      )
      if (index < 0) return
      let data!: PagingBack<AnnouncementItem[] | PromotionItem[]>
      if (type === 'announcement') {
        data = await getAnnouncementList()
        this.marketingMenuList[index].list = data.list as AnnouncementItem[]
      } else if (type === 'promotion') {
        data = await getPromotionList()
        this.marketingMenuList[index].list = data.list as PromotionItem[]
      } else if (type === 'giftCard') {
        data = await getGiftCardList()
      }
      console.log(data, 'data')
      this.marketingMenuList[index].expand = true
    },
    updateMarketingMenuListIsEdit(type: string, value?: boolean) {
      const index: number = this.marketingMenuList.findIndex(
        item => item.type === type
      )
      if (index < 0) return
      this.marketingMenuList[index].isEdit = Boolean(value)
    },
    recoverMarketingMenuList() {
      this.marketingMenuList.forEach(item => {
        item.isEdit = false
        item.expand = false
      })
    }
  }
})
