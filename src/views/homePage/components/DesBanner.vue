<template>
  <CmsEdit>
    <div class="bannershow">
      <div class="t1">LOREM IPSUM</div>
      <div>SHOP ALL</div>
      <div class="tyable">
        <div class="tablebox">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  </CmsEdit>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
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
  &:hover {
    background-color: #ffffff;
    .tyable {
      display: block;
    }
  }
  .t1 {
    font-size: 16px;
    margin-bottom: 27px;
  }
  .tyable {
    display: none;
  }
  .tablebox {
    display: grid;
    margin-top: 26px;
    grid-template-columns: 312px 312px 312px;
    grid-gap: 2px;
    .col {
      height: 312px;
      border: 1px black dashed;
    }
  }
}
</style>