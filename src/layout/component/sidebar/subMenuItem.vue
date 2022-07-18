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
  <back-dialog
    :visible="backDialogVisible"
    @update:visible="backDialogVisible = $event"
    @confirmHandle="confirmLeaveHandle"
  />
</template>

<script setup lang="ts">
import BackDialog from './backDialog.vue'
import { provide, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { menuStore } from '@/store/modules/menu'
import { appStore } from '@/store/modules/app'
import { storeToRefs } from 'pinia'
const useMenuStore = menuStore()
const { currentMenuComponent, showMobileSubMenu, outSideMenuRouteName } =
  storeToRefs(menuStore())
const { device } = storeToRefs(appStore())
const backDialogVisible = ref(false)
useMenuStore.setCurrentMenuComponent()
useMenuStore.setShowMobileSubMenu()
const scrollRoot = ref(null)
provide('scrollRef', scrollRoot)
const router = useRouter()
const route = useRoute()
const backHandle = () => {
  /**
   * 判断是否有增加的编辑数据，一般预设一个状态
   */
  backDialogVisible.value = true
}

const directBackHandle = () => {
  if (device.value === 'mobile') {
    const routeName: any = route.name
    if (outSideMenuRouteName.value.includes(routeName)) {
      router.go(-1)
    } else {
      router.push({ path: '/home' })
    }
  } else {
    router.push({ path: '/home' })
  }
}

const confirmLeaveHandle = () => {
  /**
   * 清除二级菜单编辑中的数据
   * ...
   */
  directBackHandle()
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
