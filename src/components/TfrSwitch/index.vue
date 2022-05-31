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
  &::v-deep(.el-switch__core) {
    height: 32px;
    border-radius: 16px;
  }
  ::v-deep(.el-switch__action) {
    width: 24px;
    height: 24px;
    top: 3px;
    left: 3px;
    margin-left: auto;
  }
}
.el-switch.is-checked {
  ::v-deep(.el-switch__action) {
    top: 3px;
    left: 26px;
  }
}
</style>
