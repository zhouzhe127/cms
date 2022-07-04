<template>
  <div class="container">
    <div>
      <CmsEdit :options="['edit_cms', 'add_white']">
        <div class="typefrom"></div>
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
  .typefrom {
    width: 406px;
    height: 406px;
    border: 1px black dashed;
  }
}
</style>
