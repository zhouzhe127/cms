<template>
  <el-checkbox
    :class="
      checkboxProps.type === 'tfr-radio' ? 'tfr-radio' : checkboxProps.type
    "
    v-bind="$attrs"
    @change="change"
  >
    <slot></slot>
  </el-checkbox>
</template>

<script setup lang="ts">
interface PropsType {
  type?: string
}
const checkboxProps = withDefaults(defineProps<PropsType>(), {
  type: '' // 默认值
})
const checkboxEmits = defineEmits(['change'])
const change = (value: any) => {
  checkboxEmits('change', value)
}
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
.lagre {
  ::v-deep(.el-checkbox__inner) {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background-color: #ebebeb;
    border: initial;
    &::after {
      border-width: 2px;
      width: 4px;
      height: 9px;
      top: 3px;
      left: 7px;
    }
  }
}
</style>
