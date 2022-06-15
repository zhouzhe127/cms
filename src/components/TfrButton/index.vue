<template>
  <el-button
    v-if="buttonProps.type === 'primary'"
    :class="['tfr-btn', 'tfr-button--primary', className]"
    v-bind="$attrs"
    @click="click"
  >
    <slot></slot>
  </el-button>
  <el-button
    v-else-if="buttonProps.type === 'gray'"
    :class="['tfr-btn', 'tfr-button--gray', className]"
    v-bind="$attrs"
    @click="click"
  >
    <slot></slot>
  </el-button>
  <el-button
    v-else-if="buttonProps.type === 'danger'"
    :class="['tfr-btn', 'tfr-button--danger', className]"
    v-bind="$attrs"
    @click="click"
  >
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
interface PropsType {
  type?: string
  className?: string
}
const buttonProps = withDefaults(defineProps<PropsType>(), {
  type: 'primary', // 默认值
  className: ''
})
const buttonEmits = defineEmits(['click'])
const click = () => {
  buttonEmits('click')
}
</script>

<style lang="scss" scoped>
.tfr-btn {
  width: 335px;
  height: 50px;
  font-size: 14px;
  border: none;
  text-align: center;
  border-radius: 0;
  cursor: pointer;
  padding: 12px 10px;
}
.tfr-button--primary {
  color: #fff;
  background-color: $theme;
}
.tfr-button--primary:hover,
.tfr-button--primary:focus,
.tfr-button--primary:active {
  background-color: $theme;
  color: #fff;
  border: none;
}
.tfr-button--gray {
  background-color: #f4f4f4;
  border: none;
  color: $theme;
}
.tfr-button--gray:hover,
.tfr-button--gray:focus,
.tfr-button--gray:active {
  background-color: #f4f4f4;
  border: none;
  color: $theme;
}
.tfr-button--danger {
  background-color: #fd7e7e;
  border: none;
  color: #fff;
}
.tfr-button--danger:hover,
.tfr-button--danger:focus,
.tfr-button--danger:active {
  background-color: #fd7e7e;
  border: none;
  color: #fff;
}
</style>
