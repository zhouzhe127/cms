<template>
  <div class="container">
    <div>
      <CmsEdit :options="['edit_cms', 'add_white']">
        <div class="titlebar">
          <TitlebarUI />
        </div>
      </CmsEdit>
    </div>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import TitlebarUI from '@/views/homePage/components/Titlebar/TitlebarUI.vue'
import { useRoute } from 'vue-router'
import appStore from '@/store'
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
  appStore.setBuilder.pageState.addPageModle(
    {
      componentName: SITE_MODULES.TITLEBAR,
      properties: [{
        componentName: SITE_MODULES.TITLEBAR,
      }]
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
  .titlebar {
    width: 406px;
    border: 1px black dashed;
  }
}
</style>
