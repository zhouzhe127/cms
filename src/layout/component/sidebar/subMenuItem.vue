<template>
  <div class="back">
    <div @click="backHandle">
      <svg-icon icon-class="back" />
      <span>{{ device !== 'mobile' ? 'Dashboard' : 'Back' }} </span>
    </div>
  </div>
  <el-scrollbar
    v-if="device != 'mobile' || showMobileSubMenu"
    ref="scrollRoot"
    style="padding: 20px"
  >
    <component :is="currentMenuComponent" />
  </el-scrollbar>
  <!--  <back-dialog-->
  <!--    :visible="backDialogVisible"-->
  <!--    @update:visible="backDialogVisible = $event"-->
  <!--    @confirmHandle="confirmLeaveHandle"-->
  <!--  />-->
</template>

<script setup lang="ts">
//import BackDialog from './backDialog.vue'
import { provide, ref } from 'vue'
import { useRouter, useRoute, RouteRecordName } from 'vue-router'
import { menuStore } from '@/store/modules/menu'
import { appStore } from '@/store/modules/app'
import { storeToRefs } from 'pinia'
import { TfrMessageBox } from '@/components/TfrMessageBox'
const useMenuStore = menuStore()
const { currentMenuComponent, showMobileSubMenu, outSideMenuRouteName } =
  storeToRefs(menuStore())
const { device } = storeToRefs(appStore())
//const backDialogVisible = ref(false)
useMenuStore.setCurrentMenuComponent()
useMenuStore.setShowMobileSubMenu()
const scrollRoot = ref(null)
provide('scrollRef', scrollRoot)
const router = useRouter()
const route = useRoute()
type RouterNameType = RouteRecordName | string | null | undefined

//获取父路由name
const getParentRouteName = (sunRouteName: RouterNameType) => {
  const currentRouteNames = useMenuStore.routeNameRelativeList.find(item =>
    item.sunRouteNames.includes(sunRouteName)
  )
  if (currentRouteNames) {
    return currentRouteNames.parentRouteName
  }
}

const directBackHandle = () => {
  if (device.value === 'mobile') {
    const routeName: RouterNameType = route.name
    if (outSideMenuRouteName.value.includes(routeName)) {
      router.push({ path: `/${getParentRouteName(routeName)}` })
    } else {
      router.push({ path: '/home' })
    }
  } else {
    router.push({ path: '/home' })
  }
}

//打开提示框是否leave
const openLeaveMessageBox = () => {
  TfrMessageBox.confirm(
    'If you leave this page,any unsaved changes will be lost.',
    {
      title: 'UNSAVE CHANGES',
      secTitle: '',
      confirmButtonText: 'LEAVE'
    }
  )
    .then(async (res: string) => {
      if (res === 'confirm') {
        /**
         * 清除二级菜单编辑中的数据
         * ...
         */
        directBackHandle()
      }
    })
    .catch(() => {})
}

const backHandle = () => {
  /**
   * 1、看是否是mobile端（如果是mobile直接返回二级菜单）
   * 2、判断是否有编辑数据
   */

  if (device.value === 'mobile') {
    // 先判断是否满足条件2
    const routeName: RouterNameType = route.name
    if (outSideMenuRouteName.value.includes(routeName)) {
      router.push({ path: `/${getParentRouteName(routeName)}` })
    } else {
      router.push({ path: '/home' })
    }
  } else {
    // 先判断是否满足条件2
    openLeaveMessageBox()
  }
}
</script>

<style lang="scss" scoped>
.back {
  & > div {
    cursor: pointer;
  }
  svg {
    font-size: 20px;
    margin-right: 10px;
  }
  padding: 10px 20px;
  height: 60px;
  display: flex;
  align-items: center;
}
</style>
