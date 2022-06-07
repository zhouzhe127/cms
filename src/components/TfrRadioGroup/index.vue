<template>
  <el-radio-group v-bind="$attrs" class="tfr-radio-group">
    <slot></slot>
  </el-radio-group>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.tfr-radio-group {
  ::v-deep(.el-radio__input.is-checked) {
    .el-radio__inner {
      background-color: $theme;
      border-color: $theme;
      &::after {
        transform: translate(-50%, -50%) scale(1.25);
      }
    }
    & + .el-radio__label {
      color: $theme;
    }
  }
  ::v-deep(.el-radio__label) {
    color: $theme;
  }
  ::v-deep(.el-radio__inner) {
    width: 15px;
    height: 15px;
    &:hover {
      border-color: $theme;
    }
  }
}
</style>
