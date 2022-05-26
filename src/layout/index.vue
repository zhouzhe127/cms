<template>
  <div v-if="device !== 'mobile'" class="common-layout">
    <el-container>
      <el-aside :width="`${menuWidth}px`">
        <SideBar />
      </el-aside>
      <el-main>
        <PlatformControl />
        <div class="main_content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </div>
  <div
    v-else
    class="common-layout"
    :style="{ paddingTop: showMobileMenuItem ? '340px' : '80px' }"
  >
    <MobileSideBar />
    <el-main>
      <router-view />
    </el-main>
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/layout/component/sidebar/index.vue'
import MobileSideBar from '@/layout/component/sidebar/mobile.vue'
import PlatformControl from '@/components/PlatformControl/index.vue'
import { menuStore } from '@/store/modules/menu'
import { appStore } from '@/store/modules/app'
import { storeToRefs } from 'pinia'
const useMenuStore = menuStore()
// 通过storeToRefs转换为响应式对象解构可正常使用
const { menuWidth } = storeToRefs(menuStore())
const { device, showMobileMenuItem } = storeToRefs(appStore())
// useUserStore.setMenuWidth(routeName)
useMenuStore.setMenuWidth()
console.log(device, showMobileMenuItem)
</script>

<style lang="scss" scoped>
.common-layout {
  min-height: 100%;
  background-color: #f8f8f8;
  .main_content {
    background-color: #ffffff;
  }
  .el-main {
    padding-top: 0;
  }
}
</style>
