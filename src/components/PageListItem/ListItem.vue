<template>
  <div class="page-item">
    <div class="con">
      <svg-icon icon-class="article" class="svg"></svg-icon>
      <span>
        TFR’s Women: Denni Elias, Lea Naumman On The Power Of Standing Out And
        Speaking Up
      </span>
    </div>
    <div class="date">
      <div class="year">15 Jun 2022</div>
      <div class="time">14:57</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
const clearBin = () => {}
</script>

<style lang="scss" scoped>
.page-item {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  .con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin: 0px 20px;
    margin-right: 20px;
    flex: 1;
    .svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      flex-basis: 20px;
    }
    span {
      display: inline-block;
      width: 100%;
      font-size: 14px;
      flex-wrap: wrap;
      line-height: 16px;
    }
  }

  .date {
    text-align: right;
    flex-basis: 80px;
  }
}
</style>
