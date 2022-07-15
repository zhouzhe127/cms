<template>
  <div v-if="pageTemplate.template" class="pagemain">
    <component :is='TemplateMap[pageTemplate.template]'></component>
  </div>
  <Empty v-else />
  <router-view />
</template>

<script setup lang="ts">
import Empty from '@/views/homePage/components/Empty.vue'
import appStore from '@/store'
import TemplateMap from '@/views/homePage/config/templateMap'
const pageTemplate = appStore.setBuilder.pageState.basic.schema
</script>

<style lang="scss" scoped>
.pagemain {
  height: 100%;
}
</style>
