<template>
  <div class="container">
    <CmsEdit :options="['edit_cms', 'add_white']">
      <div class="condbox">
        <NewsletterUI />
      </div>
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import NewsletterUI from '@/views/homePage/components/Newsletter/NewsletterUI.vue'
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
  appStore.setBuilder.pageState.addPageModle(
    {
      componentName: SITE_MODULES.NEWSLETTER
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
  .condbox {
    border: 1px black dashed;
  }
}
</style>
