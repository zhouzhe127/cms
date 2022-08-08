<template>
  <div
    v-if="pageTemplate.template"
    :class="{
      pagemain: true,
      pc_platform: platformState === 'desktop',
      mobile_platform: platformState === 'mobile',
      tablet_platform: platformState === 'ipad'
    }"
  >
    <component :is="TemplateMap[pageTemplate.template]"></component>
  </div>
  <Empty v-else />
  <router-view />
</template>

<script setup lang="ts">
import Empty from '@/views/homePage/components/Empty.vue'
import appStore from '@/store'
import TemplateMap from '@/views/homePage/config/templateMap'
import { ref, watchEffect } from 'vue'
// 这部分的数据要从接口拿过来替换成当前模块的参数
const pageTemplate = appStore.upadte.basic.schema
// 当前平台数据
const platformState = ref(appStore.setBuilder.basic.platformState)
watchEffect(() => {
  if (platformState.value !== appStore.setBuilder.basic.platformState)
    platformState.value = appStore.setBuilder.basic.platformState
})
</script>

<style lang="scss" scoped>
.pagemain {
  height: 100%;
  margin: 0 auto;
}
</style>
<style>
.pc_platform {
  width: 100%;
  min-width: 1440px;
}
.mobile_platform {
  width: 750px;
}
.tablet_platform {
  width: 1200px;
}
</style>
