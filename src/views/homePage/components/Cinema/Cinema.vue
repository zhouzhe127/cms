<template>
  <CmsEdit @optionClick="edit">
    <CinemaUI />
  </CmsEdit>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import CinemaUI from './CinemaUI.vue'
import appStore from '@/store'
import { useRouter } from 'vue-router'
const properties = appStore.setBuilder.pageState.basic.schema.properties || []
interface Props {
  site?: number,
  childSite?: number
}
const props = withDefaults(defineProps<Props>(), {
  site: 0,
  childSite: 0
})
const edit = (index: number):void => {
  if (index === 2) {
    openedit()
  }
}
const router = useRouter()
const openedit = () => {
  appStore.setBuilder.pageState.addChildModle({
    componentName: 'Cinema',
  }, props.site, props.childSite)
  // router.push({
  //   path: '/siteBuilder/editModules',
  //   query: { site: properties?.length }
  // })
}
</script>

<style lang="scss" scoped>
</style>
