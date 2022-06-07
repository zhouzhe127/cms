<template>
  <div class="edge">
    <el-input
      class="tfr-input"
      :style="{ width: inputProps.width }"
      v-bind="$attrs"
      @input="input"
    />
    <span class="clear" @click="clearClick">CLEAR</span>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  width?: string,
}
// eslint-disable-next-line no-undef
const inputProps = withDefaults(defineProps<PropsType>(), {
  width: '100%' // 默认值
})
// eslint-disable-next-line no-undef
const inputEmits = defineEmits(['input', 'change', "update:modelValue"])
const input = () => {
  inputEmits('input')
}
const clearClick = () => {
  inputEmits("update:modelValue", '')
}
</script>

<style lang="scss" scoped>
.edge {
  width: 100%;
  position: relative;
  .clear {
    position: absolute;
    right: 10px;
    top: 8px;
    cursor: pointer;
  }
}
.tfr-input {
  ::v-deep(.el-input__wrapper) {
    height: 50px;
    line-height: 50px;
    padding: 15px;
    box-shadow: none;
    border-radius: initial;
    border-bottom: 1px black solid;
  }
  ::v-deep(.el-input__inner) {
    color: rgb(27, 43, 39);
    font-size: 14px;
    &::placeholder {
      color: #aaa;
    }
  }
}
</style>