<template>
  <el-select
    :class="['tfr-select', !selectProps.hasBorder ? 'border-less-select' : '']"
    v-bind="$attrs"
    :style="{ width: selectProps.width }"
    @change="change"
  >
    <slot></slot>
  </el-select>
</template>

<script setup lang="ts">
interface PropsType {
  width?: string
  hasBorder?: boolean
}
// eslint-disable-next-line no-undef
const selectProps = withDefaults(defineProps<PropsType>(), {
  width: 'auto', // 默认值
  hasBorder: true
})
const selectEmits = defineEmits(['change'])
const change = (val: any) => {
  selectEmits('change', val)
}
</script>

<style lang="scss" scoped>
.tfr-select {
  ::v-deep(.el-input__wrapper) {
    height: 50px;
    padding: 0 20px;
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px rgba(27, 43, 39, 0.25);
    &.is-focus {
      box-shadow: inset 0 0 0 1px rgba(27, 43, 39, 0.25) !important;
    }
  }
  ::v-deep(.el-input.is-focus) {
    .el-input__wrapper {
      box-shadow: inset 0 0 0 1px rgba(27, 43, 39, 0.25) !important;
    }
  }
  ::v-deep(.el-input__inner) {
    color: $theme;
    font-family: 'Brown Regular';
  }
  ::v-deep(.el-select__caret) {
    /*很关键：将默认的select选择框样式清除*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    padding-right: 14px;
    background: url('../../icons/svg/down.svg') no-repeat center center;
    background-size: 25px 25px;
    transform: rotate(0);
    &.is-reverse {
      transform: rotate(180deg);
    }
  }
  &.border-less-select {
    ::v-deep(.el-input__wrapper) {
      box-shadow: unset;
      &.is-focus {
        box-shadow: unset !important;
      }
    }
    ::v-deep(.el-input.is-focus) {
      .el-input__wrapper {
        box-shadow: unset !important;
      }
    }
  }
}
</style>
<style lang="scss">
.el-select-dropdown {
  .el-select-dropdown__item span {
    color: $theme;
  }
}
</style>
