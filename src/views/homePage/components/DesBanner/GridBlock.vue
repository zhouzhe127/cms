<template>
  <div class="bannershow">
    <div class="t1">LOREM IPSUM</div>
    <div>SHOP ALL</div>
    <div class="tyable">
      <div class="tablebox">
        <div class="col">
          <SquareImage />
        </div>
        <div class="col">
          <SquareImage />
        </div>
        <div class="col">
          <SquareImage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SquareImage from '@/components/TfrImage/SquareImage.vue'
</script>

<style lang="scss" scoped>
.bannershow {
  background-color: $bg;
  height: 670px;
  border: 1px dashed black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:hover {
    background-color: #ffffff;
    .tyable {
      display: block;
      .tablebox {
        .col {
          animation-name: show;
        }
      }
    }
  }
  .t1 {
    font-size: 16px;
    margin-bottom: 27px;
  }
  .tyable {
    width: 100%;
  }
  .tablebox {
    width: 100%;
    display: flex;
    margin-top: 26px;
    justify-content: center;
    .col {
      width: 0;
      margin-right: 2px;
      border: 1px black dashed;
      animation-duration: .2s;
      animation-timing-function: linear;
      animation-play-state:running;
      animation-fill-mode: forwards;
      animation-name: hidden;
      visibility: hidden;
      &:last-child {
        margin-right: initial;
      }
    }
  }
}
@keyframes show {
  0% {
    width: 0;
  }
  20% {
    visibility: initial;
    width: 10%;
  }
  100% {
    width: 18%;
    visibility: initial;
  }
}
@keyframes hidden {
  0% {
    width: 18%;
    visibility: initial;
  }
  80% {
    width: 10%;
    visibility: initial;
  }
  100% {
    width: 0;
    visibility: hidden;
  }
}
</style>