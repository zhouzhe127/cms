<template>
  <div v-if="pageTemplate.template">
    <component :is='TemplateMap[pageTemplate.template]'></component>
  </div>
  <Empty v-else />
  <router-view />
</template>

<script setup lang="ts">
import Empty from '@/views/homePage/components/Empty.vue'
import appStore from '@/store'
import TemplateMap from '@/views/homePage/templateMap'
const pageTemplate = appStore.setBuilder.basic.pageTemplate

</script>

<style lang="scss" scoped>
</style>
