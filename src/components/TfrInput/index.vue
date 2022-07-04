<template>
  <el-input
    class="tfr-input"
    :style="{ width: inputProps.width }"
    v-bind="$attrs"
    @input="input"
    @keyup.enter.prevent="keyupEnterPrevent"
  />
</template>

<script setup lang="ts">
interface PropsType {
  width?: string
}
// eslint-disable-next-line no-undef
const inputProps = withDefaults(defineProps<PropsType>(), {
  width: '100%' // 默认值
})
// eslint-disable-next-line no-undef
const inputEmits = defineEmits(['input', 'change', 'keyup.enter.prevent'])
const input = () => {
  inputEmits('input')
}
const keyupEnterPrevent = () => {
  inputEmits('keyup.enter.prevent')
}
</script>

<style lang="scss" scoped>
.tfr-input {
  ::v-deep(.el-input__wrapper) {
    height: 50px;
    line-height: 50px;
    padding: 15px;
    box-shadow: rgb(27 43 39 / 25%) 0 0 0 1px inset;
    border-radius: 8px;
  }
  ::v-deep(.el-textarea__inner) {
    padding: 15px;
    box-shadow: rgb(27 43 39 / 25%) 0 0 0 1px inset;
    border-radius: 8px;
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
