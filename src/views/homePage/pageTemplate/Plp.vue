<template>
  <div class="template_box">
    <Pagetop />
    <PlpRegular :info="plp" />
    <div class="pagecontent">
      <div v-for="(item, index) in pageTemplate.properties" :key="index">
        <component :is='pageComponents[item.componentName]' :site="index"></component>
      </div>
      <AddModule />
    </div>
    <FootContent />
  </div>
</template>

<script setup lang="ts">
import Pagetop from '@/views/homePage/components/Pagetop.vue'
import FootContent from '@/views/homePage/components/FootContent.vue'
import AddModule from '@/views/homePage/components/AddModule.vue'
import PlpRegular from '@/views/homePage/components/PlpRegular.vue'
import appStore from '@/store'
import pageComponents from '@/views/homePage/config/pageComponents'
const pageTemplate = appStore.setBuilder?.pageState.basic.schema
const plp = pageTemplate.plp
</script>

<style lang="scss" scoped>

</style>