<template>
  <div class="text-con">
    <div class="top-tag">CULTURE</div>
    <div class="title">The Right Jewelry Metal for Your Astrology Sign</div>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
    <div class="link">READ AND SHOP</div>
  </div>
</template>

<script setup lang="ts">
import { getAssetsImage } from '@/utils/fileSource'

interface IProps {
  imgurl?: string
  tips?: string
}

withDefaults(defineProps<IProps>(), {
  imgurl: getAssetsImage('photoLeft.webp'),
  tips: 'Back To Love: This Valentine’s Day, Celebrate Love’s Various Faces'
})
</script>

<style lang="scss" scoped>
.text-con {
  font-family: 'Brown Regular', serif;
  color: $theme;
  padding: 30px 0px;
  .top-tag {
    font-size: 14px;
  }
  .title {
    font-size: 24px;
    line-height: 1.3em;
    margin-top: 10px;
  }
  .content {
    font-size: 14px;
    margin: 10px 0;
  }
  .link {
    font-size: 14px;
  }
}
</style>
