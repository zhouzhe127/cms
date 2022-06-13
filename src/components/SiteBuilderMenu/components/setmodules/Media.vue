<template>
  <div class="container">
    <CmsEdit :options="['edit_cms', 'add_white']">
      <div class="media"></div>
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .media {
    width: 406px;
    height: 406px;
    border: 1px black dashed;
    background-color: #f8f8f8;
  }
}
</style>
