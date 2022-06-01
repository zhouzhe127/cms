<template>
  <div class="back">
    <router-link to="/home">
      <svg-icon icon-class="back" />
      <span>{{ device === 'mobile' ? 'Back' : 'Dashboard' }}</span>
    </router-link>
  </div>
  <el-scrollbar ref="scrollRoot" style="padding: 20px">
    <component :is="currentMenuComponent" />
  </el-scrollbar>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { menuStore } from '@/store/modules/menu'
import { appStore } from '@/store/modules/app'
import { storeToRefs } from 'pinia'
const useMenuStore = menuStore()
const { currentMenuComponent } = storeToRefs(menuStore())
const { device } = storeToRefs(appStore())
// const currentComponent = shallowRef(useMenuStore.currentMenuComponent)
useMenuStore.setCurrentMenuComponent()
const scrollRoot = ref(null)
provide('scrollRef', scrollRoot)
// const scroll = () => {
//   console.log(111)
// }
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
