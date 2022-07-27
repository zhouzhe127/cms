<template>
  <div :style="{width: width}">
    <div class="imgbox">
      <div class="imgstar">
        <img class="pric" :src="src" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  width?: string
  src?: string
}
const props = withDefaults(defineProps<PropsType>(), {
  width: '100%',
  src: 'https://framerusercontent.com/modules/IJMCmYONqb0JJCrbl69T/RpsAsAKyolq7x03XCRW0/assets/512/4m4BEfnGmf7jjFV1hM0EVtVEREM.png'
})
</script>

<style lang="scss" scoped>
.imgbox {
  height: 0;
  padding-bottom: 100%;
  background-color: #f8f8f8;
  position: relative;
  .imgstar {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    .pric {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>