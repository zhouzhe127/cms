<template>
  <div :style="style">
    <CmsEdit :options="['edit_cms', 'add_white']" @optionClick="edit">
      <MarkdownUI :info="info" />
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CmsEdit from '@/components/CmsEdit/index.vue'
import MarkdownUI from './MarkdownUI.vue'
import appStore from '@/store'
import { useRoute, useRouter } from 'vue-router'
import { getStyle } from '@/utils/siteBuilder'
const router = useRouter()
interface Props {
  site?: number,
  childSite?: number,
  info?: any
}
const props = withDefaults(defineProps<Props>(), {
  site: 0,
  childSite: 0,
  info: {
    componentName: 'markdown',
    style: {}
  }
})
const style = computed(() => {
  const styleOption = props.info.style
  return getStyle(styleOption)
})

const edit = (index: number):void => {
  if (index === 0) {
    router.push({
      path: '/siteBuilder/markdownSettings',
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
    componentName: 'markdown',
  }, props.site, props.childSite)
}
</script>

<style lang="scss" scoped>

</style>