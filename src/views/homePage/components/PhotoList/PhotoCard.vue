<template>
  <div class="photo-card" :style="{'background-image': `url(${imgurl})`}">
    <div class="tip-card" v-if="tips">
      {{ tips.toLocaleUpperCase() }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetsImage } from '@/utils/fileSource'

interface IProps {
  imgurl: string
  tips: string
}

withDefaults(defineProps<IProps>(), {
  imgurl: getAssetsImage('photoLeft.webp'),
  tips: 'Back To Love: This Valentine’s Day, Celebrate Love’s Various Faces'
})
</script>

<style lang="scss" scoped>
.photo-card {
  width: 49%;
  padding-bottom: 49%;
  height: 0;
  display: inline-block;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    width: 100%;
    height: 100%;
  }
  .tip-card {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px 20px 20px 10px;
    max-width: 75%;
    background-color: #fff;
    font-size: 14px;
    font-family: "Brown Regular", serif;
  }
}

@media screen and (max-width:1200px) {
 .photo-card {
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 20px;
 } 
}
</style>
