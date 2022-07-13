<template>
  <div class="infoblock">
    <div v-for="(item, index) in [basic.properties]" :key="index" class="citem">
      <InfoBlock :site="site" :child-site="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentsSchema } from '@/views/homePage/type/index'
import InfoBlock from './InfoBlock.vue'
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
console.log(props.basic)
</script>

<style scoped>
.infoblock {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
