<template>
  <div class="contentbox">
    <div class="imgbox"></div>
    <div class="inpbox">
      <EdgeInput :has-clear="false" placeholder="Enter TFRID" />
    </div>
    <svg-icon icon-class="drag_indicator" class="svgicon" />
  </div>
</template>

<script setup lang="ts">
import EdgeInput from '@/components/TfrInput/EdgeInput.vue'
</script>

<style lang="scss" scoped>
.contentbox {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .inpbox {
    width: 218px;
    height: 50px;
    display: flex;
    margin: 0 16px 0 10px;
    align-items: flex-end;
  }
  .imgbox {
    width: 50px;
    height: 50px;
    background-color: $bg;
  }
  .svgicon {
    font-size: 20px;
    opacity: .5;
  }
}
</style>