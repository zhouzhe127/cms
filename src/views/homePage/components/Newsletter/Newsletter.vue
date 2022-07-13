<template>
  <div class="newsletter_container">
    <CmsEdit>
      <NewsletterUI />
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import NewsletterUI from './NewsletterUI.vue'
</script>

<style lang="scss" scoped>
.newsletter_container {
  width: 500px;
}
</style>