<template>
  <div class="container">
    <div class="cinemabox">
      <CmsEdit :options="['edit_cms', 'add_white']">
        <CinemaUI />
      </CmsEdit>
    </div>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import appStore from '@/store'
import { useRoute } from 'vue-router'
import { SITE_MODULES } from '@/views/homePage/config/pageComponents'
import CinemaUI from '@/views/homePage/components/Cinema/CinemaUI.vue'

interface Props {
  close?: Function
  rightbtn: string
}
const props = withDefaults(defineProps<Props>(), {
  close: () => {}
})
const route = useRoute()
const site = route.query.site
const confirm = () => {
  appStore.setBuilder.pageState.addPageModle(
    {
      componentName: SITE_MODULES.CINEMA,
      properties: [
        {
          componentName: SITE_MODULES.CINEMA
        }
      ]
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .cinemabox {
    width: 100%;
  }
}
</style>
