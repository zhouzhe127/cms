<template>
  <div class="template_box">
    <Pagetop />
    <PlpRegular :info="plp" />
    <div class="pagecontent">
      <div v-for="(item, index) in mContent" :key="index">
        <component
          :is="pageComponents[item.componentName]"
          :basic="item"
          :site="index"
        />
      </div>
      <AddModule :page-length="mContent?.length || 0" />
    </div>
    <FootContent />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Pagetop from '@/views/homePage/components/Pagetop.vue'
import FootContent from '@/views/homePage/components/Footer/index.vue'
import AddModule from '@/views/homePage/components/AddModule.vue'
import PlpRegular from '@/views/homePage/components/PlpRegular/index.vue'
import appStore from '@/store'
import pageComponents from '@/views/homePage/config/pageComponents'
const pageTemplate = appStore.setBuilder.pageState.basic.schema
const mContent = computed(() => {
  return pageTemplate.properties?.filter(v => {
    return v.componentName !== 'footer'
  })
})
const plp = pageTemplate.plp
</script>

<style lang="scss" scoped>

</style>