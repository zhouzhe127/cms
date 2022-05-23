<template>
  <div class="side_container">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.side_container {
  width: 100%;
  height: 500px;
  overflow: auto;
  padding-top: 50px;
}
</style>