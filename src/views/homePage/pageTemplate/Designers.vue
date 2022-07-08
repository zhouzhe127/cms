<template>
  <div class="template_box">
    <Pagetop />
    <DesBanner />
    <Newsletter />
    <InfoBlock />
    <div class="pagecontent">
      <div v-for="(item, index) in pageTemplate.properties" :key="index">
        <component
          :is="pageComponents[item.componentName]"
          :site="index"
        ></component>
      </div>
      <AddModule />
    </div>
    <FootContent />
  </div>
</template>

<script setup lang="ts">
import Pagetop from '@/views/homePage/components/Pagetop.vue'
import DesBanner from '@/views/homePage/components/DesBanner.vue'
import FootContent from '@/views/homePage/components/FootContent.vue'
import AddModule from '@/views/homePage/components/AddModule.vue'
import appStore from '@/store'
import pageComponents from '@/views/homePage/config/pageComponents'
import Newsletter from '@/views/homePage/components/Newsletter.vue'
import InfoBlock from '@/views/homePage/components/InfoBlock.vue'

const pageTemplate = appStore.setBuilder.pageState.basic.schema
</script>

<style lang="scss" scoped>
</style>
