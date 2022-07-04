<template>
  <div class="container">
    <div>
      <CmsEdit :options="['edit_cms', 'add_white']">
        <div class="titlebar">LOREM IPSUM</div>
      </CmsEdit>
    </div>
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
  .titlebar {
    width: 406px;
    padding: 20px;
    border: 1px black dashed;
  }
}
</style>
