<template>
  <div>
    <CmsEdit @optionClick="edit">
      <TitlebarUI />
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import TitlebarUI from './TitlebarUI.vue'
import appStore from '@/store'

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
  }
}
</script>

<style scoped>

</style>
