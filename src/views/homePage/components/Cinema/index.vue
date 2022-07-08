<template>
  <div class="cinemabox">
    <div v-for="(item, index) in basic.properties" :key="index" class="citem">
      <Cinema :site="site" :child-site="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentsSchema } from '@/views/homePage/type/index'
import Cinema from './Cinema.vue'
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
.cinemabox {
  display: flex;
  flex-wrap: wrap;
  .citem {
    min-width: 45%;
    flex: 1;
    margin-bottom: 30px;
    &:nth-child(2n) {
      margin-left: 30px;
    }
  }
}
</style>