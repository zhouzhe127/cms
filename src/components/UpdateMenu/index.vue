<template>
  <div class="update-menu">
    <header>
      <TfrButton type="normal" :class="'btn'">PREVIEW</TfrButton>
      <div style="width: 10px"></div>
      <TfrButton type="primary" :class="'btn'">PUBLISH</TfrButton>
    </header>
    <EdgeInput placeholder="SEARCH" width="100%" />
    <CheckCard />
    <PublishCard />
  </div>
</template>

<script setup lang="ts">
import EdgeInput from '@/components/TfrInput/EdgeInput.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import CheckCard from '@/components/UpdateMenu/components/CheckCard.vue'
import PublishCard from '@/components/UpdateMenu/components/PublishCard.vue'
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  .btn {
    flex: 1;
  }
}

::v-deep(.edge) {
  margin-bottom: 10px;
}
</style>
