<template>
  <div class="container">
    Home...
    <div>{{ count }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

console.log(import.meta.env)
</script>

<style scoped lang="scss"></style>
