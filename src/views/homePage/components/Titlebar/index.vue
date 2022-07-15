<template>
  <div class="titlebarbox">
    <div v-for="(item, index) in basic.properties" :key="index" class="citem">
      <Titlebar :site="site" :child-site="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentsSchema } from '@/views/homePage/type/index'
import Titlebar from './Titlebar.vue'
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
</style>
