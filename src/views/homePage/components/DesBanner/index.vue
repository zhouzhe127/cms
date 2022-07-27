<template>
  <CmsEdit :options="['edit_cms', 'add_white']" @option-click="optionClick">
    <GridBlock />
  </CmsEdit>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import GridBlock from './GridBlock.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const optionClick = (index: number) => {
  if (index === 0) {
    router.push({
      path: '/siteBuilder/gridSettings'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>