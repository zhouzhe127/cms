<template>
  <div class="photo-card" :style="{ 'background-image': `url(${imgurl})` }">
    <div class="tip-card" v-if="tips">
      {{ tips.toLocaleUpperCase() }}
    </div>
    <div class="describ">
      <div class="con">{{ describ }}</div>
      <div class="title">{{ describ_title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetsImage } from '@/utils/fileSource'

interface IProps {
  imgurl?: string
  tips?: string
  describ?: string
  describ_title?: string
}

withDefaults(defineProps<IProps>(), {
  imgurl: getAssetsImage('photoLeft.webp'),
  tips: 'Back To Love: This Valentine’s Day, Celebrate Love’s Various Faces',
  describ:
    'Unveil your hidden side with the FACETS collection. Sculptural and abstract, it is the fruit of a collaboration with surrealist artist Blanca Miró Skoudy. The light-shaping surface – called the Mirror – is set by hand in a perfectly crafted 18 karat gold ring. Its hidden message drawn by the artist is revealed when sunlight reflects on the surface.',
  describ_title: 'SHOP NOW'
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
    font-family: 'Brown Regular', serif;
  }

  .describ {
    width: 100%;
    padding: 20px;
    background-color: #fff;
    font-family: 'Brown Light', serif;
    font-size: 14px;
    line-height: 1.3em;
    .title {
      font-family: 'Brown Regular', serif;
    }
  }
}
</style>
<style lang="scss">
.mobile_platform .photo-card,
.tablet_platform .photo-card {
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 20px;
}
</style>
