<template>
  <div class="markdown_box">
    <div v-for="(item, index) in basic.properties" :key="index" class="citem">
      <Markdown :site="site" :child-site="index" :info="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentsSchema } from '@/views/homePage/type/index'
import Markdown from './Markdown.vue'
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
.markdown_box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>