<template>
  <div class="culture-con">
    <CardView>
      <PhotoCard :imgurl="getAssetsImage('jewely.webp')" tips="" />
      <div class="text-card">
        <HomeText />
      </div>
    </CardView>
  </div>
</template>

<script setup lang="ts">
import CardView from '@/views/homePage/components/PhotoList/CardView.vue'
import PhotoCard from '@/views/homePage/components/PhotoList/PhotoCard.vue'
import HomeText from '@/views/homePage/components/Culture/HomeText.vue'
import { getAssetsImage } from '@/utils/fileSource'
</script>

<style lang="scss" scoped>
.culture-con {
  padding: 60px;
  background-color: #f8f8f8;
  border: 5px solid #fff;
}
.text-card {
  width: 50%;
  padding: 0px 30px;
}

@media screen and (max-width: 1200px) {
  .culture-con {
    padding: 5px;
  }
  .text-card {
    width: 100%;
  }
}
</style>
