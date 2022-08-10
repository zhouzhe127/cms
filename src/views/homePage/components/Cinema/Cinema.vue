<template>
  <CmsEdit @optionClick="edit">
    <CinemaUI :info="basic.cinema" />
  </CmsEdit>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import CinemaUI from './CinemaUI.vue'
import appStore from '@/store'
import { useRouter } from 'vue-router'
// const properties = appStore.setBuilder.pageState.basic.schema?.properties || []
interface LooseObject {
  [key: string]: any
}
interface Props {
  site?: number,
  childSite?: number,
  basic?: LooseObject,
}
const props = withDefaults(defineProps<Props>(), {
  site: 0,
  childSite: 0,
  basic: () => ({
    componentName: '',
    cinema: {},
    properties: []
  })
})
const edit = (index: number):void => {
  if (index === 1) {
    openedit()
  }
  if (index === 2) {
    addCinema()
  }
}
const router = useRouter()
const openedit = () => {
  router.push({
    path: '/siteBuilder/cinemaSettings',
    query: {
      site: `${props.site}-${props.childSite}`,
    }
  })
}
const addCinema = () => {
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
