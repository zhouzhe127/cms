<template>
  <div class="infobox_container">
    <CmsEdit :options="['edit_cms', 'add_white']" @optionClick="edit">
      <InfoBlockItem />
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import InfoBlockItem from './InfoBlockItem.vue'
import appStore from '@/store'
import { useRouter } from 'vue-router'

interface Props {
  site?: number,
  childSite?: number
}
const props = withDefaults(defineProps<Props>(), {
  site: 0,
  childSite: 0
})
const router = useRouter()
const edit = (index: number):void => {
  if (index === 0) {
    router.push({
      path: '/siteBuilder/infoSettings',
      query: {
        site: props.site,
        childSite: props.childSite
      }
    })
  }
  if (index === 1) {
    openedit()
  }
}
const openedit = () => {
  appStore.setBuilder.pageState.addChildModle({
    componentName: 'info_block',
  }, props.site, props.childSite)
  // router.push({
  //   path: '/siteBuilder/editModules',
  //   query: { site: properties?.length }
  // })
}
</script>

<style lang="scss" scoped>
.infobox_container {
  width: 256px;
}
</style>
