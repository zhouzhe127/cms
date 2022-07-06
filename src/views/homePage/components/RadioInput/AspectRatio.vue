<template>
  <div class="wpdfull">
    <RadioInput>
      <div>
        <div class="itemfox">
          <svg-icon icon-class="aspect_ratio" class="svgicon" />
          <input type="text" class="pdipt" />
          <span>:</span>
          <input type="text" class="pdipt" />
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
      width: 30px;
      height: 40px;
      text-align: center;
      padding: 10px;
      border: 1px #c6c9c9 solid;
    }
    .svgicon {
      font-size: 20px;
      margin-right: 8px;
      &.svg-icon {
        fill: #c6c9c9;
      }
    }
    span {
      display: inline-block;
      margin: 0 4px;
    }
    .rot {
      transform: rotate(90deg);
    }
  }
  ::v-deep(.is-checked) {
    .pdipt {
      border: 1px $theme solid;
    }

    .svgicon.svg-icon {
      fill: $theme;
    }
  }
}
</style>
