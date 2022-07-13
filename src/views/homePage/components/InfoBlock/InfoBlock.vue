<template>
  <div class="infobox_container">
    <CmsEdit :options="['edit_cms', 'add_white']">
      <InfoBlockItem />
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import InfoBlockItem from './InfoBlockItem.vue';
</script>

<style lang="scss" scoped>
.infobox_container {
  width: 256px;
}
</style>
