<template>
  <div class="container">
    <InfoBlock />
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import InfoBlock from '@/views/homePage/components/InfoBlock.vue'
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
