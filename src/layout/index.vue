<template>
  <div class="common-layout" v-if="device !== 'mobile'">
    <el-aside :width="`${menuWidth}px`">
      <SideBar />
    </el-aside>
    <el-container :style="{ paddingLeft: menuWidth + 'px' }">
      <el-header :style="{ left: menuWidth + 'px' }">
        <PlatformControl />
      </el-header>
      <el-main>
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
  background-color: #f8f8f8;
  min-height: 100%;
  .el-aside {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
  }
  .el-header {
    position: fixed;
    top: 0;
    right: 0;
    background: #f8f8f8;
    z-index: 2000;
  }
  .el-main {
    background-color: #ffffff;
    padding: 0;
    padding-top: 60px;
    overflow: unset;
  }
}
</style>
