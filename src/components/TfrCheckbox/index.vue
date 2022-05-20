<template>
  <el-checkbox
    :class="buttonProps.type === 'radio' && 'tfr-radio'"
    v-bind="$attrs"
  >
    <slot></slot>
  </el-checkbox>
</template>

<script setup lang="ts">
interface PropsType {
  type?: string
}
const buttonProps = withDefaults(defineProps<PropsType>(), {
  type: '' // 默认值
})
</script>

<style lang="scss" scoped>
.tfr-radio {
  ::v-deep(.el-checkbox__inner::after) {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
  }
  ::v-deep(.el-checkbox__inner) {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border-color: $theme;
  }
}
.tfr-radio.is-checked {
  ::v-deep(.el-checkbox__inner:after) {
    transform: translate(-50%, -50%) scale(1);
  }
}
.el-checkbox.is-checked {
  ::v-deep(.el-checkbox__inner) {
    background-color: $theme;
    border-color: $theme;
  }
}
.el-checkbox {
  ::v-deep(.el-checkbox__inner) {
    border-color: $theme;
  }
  ::v-deep(.el-checkbox__label) {
    color: $theme;
  }
}
</style>
