<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="`${sideWidth}px`">
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
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import appStore from '@/store/index'
const route = useRoute()
const sideWidth = ref()
const sideWidthMap = new Map([
  ['siteBuilder', 320],
  ['marketing', 576]
])
console.log('layout', route.name)
sideWidth.value = sideWidthMap.get(route.name) || 213
watch(
  () => route.name,
  name => {
    sideWidth.value = sideWidthMap.get(name) || 213
  }
)
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
