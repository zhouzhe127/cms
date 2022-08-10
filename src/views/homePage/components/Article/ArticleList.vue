<template>
  <CmsEdit :options="['edit_cms', 'add_white']" @optionClick="edit">
    <ArticleListUI />
  </CmsEdit>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import ArticleListUI from './ArticleListUI.vue'
import appStore from '@/store'
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
}
const openedit = () => {
  appStore.setBuilder.pageState.addChildModle({
    componentName: 'article',
  }, props.site, props.childSite)
}
</script>

<style lang="scss" scoped>
</style>