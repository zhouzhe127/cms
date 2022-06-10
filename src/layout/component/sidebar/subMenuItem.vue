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
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { menuStore } from '@/store/modules/menu'
import { appStore } from '@/store/modules/app'
import { storeToRefs } from 'pinia'
const useMenuStore = menuStore()
const { currentMenuComponent, showMobileSubMenu, outSideMenuRouteName } =
  storeToRefs(menuStore())
const { device } = storeToRefs(appStore())
// const currentComponent = shallowRef(useMenuStore.currentMenuComponent)
useMenuStore.setCurrentMenuComponent()
useMenuStore.setShowMobileSubMenu()
const scrollRoot = ref(null)
provide('scrollRef', scrollRoot)
// const scroll = () => {
//   console.log(111)
// }
const router = useRouter()
const route = useRoute()
const backHandle = () => {
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
</script>

<style lang="scss" scoped>
.back {
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
