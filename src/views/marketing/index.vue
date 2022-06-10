<template>
  <div class="marketing-page">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, provide } from 'vue'
const isRouterAlive = ref(true)
const reload = () => {
  isRouterAlive.value = false
  nextTick(() => {
    isRouterAlive.value = true
    window.scrollTo(0, 0)
  })
}
provide('reload', reload)
</script>

<style scoped></style>
