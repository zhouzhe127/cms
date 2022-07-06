<template>
  <div class="container">
    <InfoBlock />
  </div>
</template>

<script setup lang="ts">
import InfoBlock from '@/views/homePage/components/InfoBlock.vue'
import appStore from '@/store'
import { defineExpose } from 'vue'
import { useRoute } from 'vue-router'
import { SITE_MODULES } from '@/views/homePage/config/pageComponents'
interface Props {
  close?: Function
}
const props = withDefaults(defineProps<Props>(), {
  close: () => {}
})
const route = useRoute()
const site = route.query.site
const confirm = () => {
  appStore.setBuilder.addPageModle(
    {
      componentName: SITE_MODULES.INFOBLOCK
    },
    Number(site)
  )
  if (props.close) props.close()
}
defineExpose({
  confirm
})
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
