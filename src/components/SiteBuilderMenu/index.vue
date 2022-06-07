<template>
  <div>
    <second-side>
      <Navigation />
    </second-side>
  </div>
</template>

<script setup lang="ts">
import SecondSide from '@/components/SecondSide/index.vue'
import Navigation from '@/components/SiteBuilderMenu/Navigation.vue'
</script>

<style>
.confirm-title-con {
  --framer-font-family: 'Brown Bold', serif;
  font-weight: 600;
}
</style>
