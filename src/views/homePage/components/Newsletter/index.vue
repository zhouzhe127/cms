<template>
  <div class="newsletter">
    <div v-for="(item, index) in basic.properties" :key="index" class="citem">
      <Newsletter :site="site" :child-site="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentsSchema } from '@/views/homePage/type/index'
import Newsletter from './Newsletter.vue'
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
.newsletter {
  display: flex;
  justify-content: center;
}
</style>