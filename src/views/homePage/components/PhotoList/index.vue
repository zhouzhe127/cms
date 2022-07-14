<template>
  <div class="photo-view">
     <CardView>
      <PhotoCard :imgurl="getAssetsImage('photoLeft.webp')" tips="Back To Love: This Valentine’s Day, Celebrate Love’s Various Faces"/>
      <PhotoCard :imgurl="getAssetsImage('photoRight.webp')" tips="FACETS BY THE RAYY"/>
    </CardView>
  </div>
</template>

<script setup lang="ts">
import CardView from '@/views/homePage/components/PhotoList/CardView.vue'
import PhotoCard from '@/views/homePage/components/PhotoList/PhotoCard.vue'
import { getAssetsImage } from '@/utils/fileSource'
</script>

<style lang="scss" scoped>
  .photo-view {
    padding: 20px;
  }
</style>
