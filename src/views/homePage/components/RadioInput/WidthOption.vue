<template>
  <div class="wpdfull">
    <RadioInput>
      <div>
        <div class="itemfox">
          <svg-icon icon-class="pc" class="svgicon" />
          <input type="text" class="pdipt" />
          <span>PX</span>
        </div>
        <div class="itemfox">
          <svg-icon icon-class="straighten" class="svgicon" />
          <input type="text" class="pdipt" />
          <span>Max</span>
        </div>
        <div class="itemfox">
          <svg-icon icon-class="mobile" class="svgicon rot" />
          <input type="text" class="pdipt" />
          <span>PX</span>
        </div>
        <div class="itemfox">
          <svg-icon icon-class="straighten" class="svgicon" />
          <input type="text" class="pdipt" />
          <span>Max</span>
        </div>
      </div>
    </RadioInput>
  </div>
</template>

<script setup lang="ts">
import RadioInput from './index.vue'
</script>

<style lang="scss" scoped>
.wpdfull {
  .itemfox {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .pdipt {
      width: 80px;
      height: 40px;
      text-align: center;
      padding: 10px;
      margin: 0 8px;
      border: 1px black solid;
    }
    .svgicon {
      font-size: 20px;
    }
    .rot {
      transform: rotate(90deg);
    }
  }
}
</style>