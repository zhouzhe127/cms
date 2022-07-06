<template>
  <div class="svg-page">
    <div v-for="name in svgNames" class="svg-item">
      <svg-icon :icon-class="name" />
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const svgNames = ref<string[]>([])
onMounted(() => {
  const modules = import.meta.glob('@/icons/svg/*.svg')
  for (const path in modules) {
    let pathArr = path.split('/')
    let length = pathArr.length
    const componentName = pathArr[length - 1].split('.')[0]
    console.log(componentName)
    svgNames.value.push(componentName)
  }
})
</script>

<style lang="scss" scoped>
.svg-page {
  display: flex;
  flex-wrap: wrap;
  .svg-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    svg {
      font-size: 30px;
      margin-bottom: 10px;
    }
  }
}
</style>
