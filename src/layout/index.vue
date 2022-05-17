<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="213px">
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
</template>

<script setup lang="ts">
import SideBar from '@/layout/component/sidebar/index.vue'
import PlatformControl from '@/components/PlatformControl/index.vue'
import appStore from '@/store/index.ts'
console.log(appStore.userStore.$state.count)
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
