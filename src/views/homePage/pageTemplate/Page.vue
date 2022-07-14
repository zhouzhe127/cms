<template>
  <div class="template_box">
    <Pagetop />
    <div class="pagecontent">
      <div v-for="(item, index) in mContent" :key="index">
        <component
          :is="pageComponents[item.componentName]"
          :basic="item"
          :site="index"
        ></component>
      </div>
      <AddModule :page-length="mContent?.length || 0" />
    </div>
    <FootContent />
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import Pagetop from '@/views/homePage/components/Pagetop.vue'
import FootContent from '@/views/homePage/components/FootContent.vue'
import AddModule from '@/views/homePage/components/AddModule.vue'
import appStore from '@/store'
import pageComponents from '@/views/homePage/config/pageComponents'
const pageTemplate = appStore.setBuilder.pageState.basic.schema
const mContent = computed(() => {
  return pageTemplate.properties?.filter(v => {
    return v.componentName !== 'footer'
  })
})
</script>

<style lang="scss" scoped>
.template_box {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  .pagecontent {
    flex: 1;
  }
}
</style>
