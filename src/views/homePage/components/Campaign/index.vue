<template>
  <div class="campainbox">
    <div v-for="(item, index) in basic.properties" :key="index" class="citem">
      <Campaign :site="site" :child-site="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentsSchema } from '@/views/homePage/type/index'
import Campaign from './Campaign.vue'
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

<style scoped>
</style>
