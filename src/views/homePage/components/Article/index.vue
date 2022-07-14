<template>
  <div class="articlebox">
    <div v-if="basic.properties && basic.properties.length > 1" class="listbox">
      <div v-for="(item, index) in basic.properties" :key="index" class="citem">
        <ArticleList :site="site" :child-site="index" :basic="item" />
      </div>
    </div>
    <Culture :site="site" :child-site="0" v-else />
  </div>
</template>

<script setup lang="ts">
import { ComponentsSchema } from '@/views/homePage/type/index'
import Culture from './Culture.vue'
import ArticleList from './ArticleList.vue'
interface Props {
  site?: number,
  basic?: ComponentsSchema,
}
const props = withDefaults(defineProps<Props>(), {
  site: 0,
  basic: () => ({
    componentName: '',
    properties: []
  })
})
</script>

<style lang="scss" scoped>
.articlebox {
  .listbox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 20px;
    padding: 15px;
  }
}
</style>