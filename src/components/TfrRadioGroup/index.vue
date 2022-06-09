<template>
  <el-radio-group v-bind="$attrs" class="tfr-radio-group" @change="change">
    <slot></slot>
  </el-radio-group>
</template>

<script setup lang="ts">
const radioGroupEmits = defineEmits(['change'])
const change = (label: string) => {
  radioGroupEmits('change', label)
}
</script>

<style lang="scss" scoped>
.tfr-radio-group {
  ::v-deep(.el-radio__input.is-checked) {
    .el-radio__inner {
      background-color: $theme;
      border-color: $theme;
      &::after {
        transform: translate(-50%, -50%) scale(1.25);
      }
      &:hover {
        border-color: $theme;
      }
    }
    & + .el-radio__label {
      color: $theme;
    }
  }
  ::v-deep(.el-radio__label) {
    color: rgba(27, 42, 39, 0.5);
  }
  ::v-deep(.el-radio__inner) {
    width: 15px;
    height: 15px;
    border-color: rgba(27, 42, 39, 0.5);
    &:hover {
      border-color: rgba(27, 42, 39, 0.5);
    }
  }
}
</style>
