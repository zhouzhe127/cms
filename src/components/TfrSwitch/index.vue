<template>
  <div>
    <el-switch
      v-bind="$attrs"
      active-color="rgb(27, 43, 39)"
      inactive-color="rgb(248, 248, 248)"
      width="54px"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.el-switch {
  line-height: 32px;
  height: 32px;
  &::v-deep(.el-switch__core) {
    width: 54px !important;
    height: 32px;
    border-radius: 16px;
  }
  ::v-deep(.el-switch__action) {
    top: 3px;
    left: 2px;
    width: 24px;
    height: 24px;
  }
}
.el-switch.is-checked {
  ::v-deep(.el-switch__action) {
    margin-left: -26px !important;
  }
}
</style>
