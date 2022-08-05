<template>
  <div class="photo-card" :style="{ 'background-image': `url(${imgurl})` }">
    <div class="footer">
      <div class="tip-card" v-if="tips">
        {{ tips.toLocaleUpperCase() }}
      </div>
      <div class="describ" v-if="tips && (describ || describ_title)">
        <div class="con" v-html="describ" />
        <div class="title">{{ describ_title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetsImage } from '@/utils/fileSource'

interface IProps {
  imgurl?: string
  tips?: string
  describ?: string
  describ_title?: string,
  site?: number,
  childSite?: number
}

const props = withDefaults(defineProps<IProps>(), {
  imgurl: getAssetsImage('photoLeft.webp'),
  tips: 'Back To Love: This Valentine’s Day, Celebrate Love’s Various Faces',
  describ:
    'Unveil your hidden side with the FACETS collection. Sculptural and abstract, it is the fruit of a collaboration with surrealist artist Blanca Miró Skoudy. The light-shaping surface – called the Mirror – is set by hand in a perfectly crafted 18 karat gold ring. Its hidden message drawn by the artist is revealed when sunlight reflects on the surface.',
  describ_title: 'SHOP NOW',
  childSite: 0,
  site: 0,

})

</script>

<style lang="scss" scoped>
.photo-card {
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 20px;
  height: 0;
  display: inline-block;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    width: 100%;
    height: 100%;
  }
  .footer {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: transform 1s ;
    font-size: 0px;
  }
  .tip-card {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px 20px 20px 10px;
    max-width: 75%;
    background-color: #fff;
    height: 58px;
    font-size: 14px;
    font-family: 'Brown Regular', serif;
  }

  .describ {
    width: 100%;
    padding: 20px;
    background-color: #fff;
    font-family: 'Brown Light', serif;
    color: $theme;
    font-size: 14px;
    line-height: 1.3em;
    visibility: hidden;
    transform: translateY(-100%);
    .con {
      font-size: inherit;
      margin-bottom: 20px;
    }
    .title {
      font-size: inherit;
      font-family: 'Brown Regular', serif;
    }
  }
}


.photo-card:hover .footer {
  transform: translateY(-100%);
  transition: transform 0.5s;
  .describ {
    transform: translateY(100%);
    visibility: visible;
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
