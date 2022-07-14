<template>
  <div class="container">
    <CmsEdit :options="['edit_cms', 'add_white']">
      <div class="infobox_container">
        <InfoBlockItem />
      </div>
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import InfoBlockItem from '@/views/homePage/components/InfoBlock/InfoBlockItem.vue'
import appStore from '@/store'
import { defineExpose } from 'vue'
import { useRoute } from 'vue-router'
import { SITE_MODULES } from '@/views/homePage/config/pageComponents'
import CmsEdit from '@/components/CmsEdit/index.vue'

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
      componentName: SITE_MODULES.INFOBLOCK,
      properties: [{
        componentName: SITE_MODULES.INFOBLOCK,
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
  .infobox_container {
    padding: 16px;
    border: 1px $theme dashed;
  }
}
</style>
