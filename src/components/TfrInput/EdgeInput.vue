<template>
  <div class="edge">
    <el-input
      class="tfr-input"
      :style="{ width: inputProps.width }"
      v-bind="$attrs"
      @input="input"
    />
    <span v-if="hasClear" class="clear" @click="clearClick">CLEAR</span>
    <span v-if="otherBtn" class="clear" @click="btnClick">{{ inputProps.btnText }}</span>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  width?: string,
  hasClear?: boolean,
  otherBtn?: boolean,
  btnText?: string
}
// eslint-disable-next-line no-undef
const inputProps = withDefaults(defineProps<PropsType>(), {
  width: '100%', // 默认值
  hasClear: true,
  otherBtn: false,
  btnText: 'ADD'
})
// eslint-disable-next-line no-undef
const inputEmits = defineEmits([
  'input',
  'change',
  'update:modelValue',
  'clear',
  'textClick'
])
const input = (e: any) => {
  inputEmits('update:modelValue', e)
  inputEmits('input', e)
}
const clearClick = () => {
  inputEmits('update:modelValue', '')
  inputEmits('clear')
}
const btnClick = () => {
  inputEmits('textClick')
}
</script>

<style lang="scss" scoped>
.edge {
  width: 100%;
  position: relative;
  .clear {
    position: absolute;
    right: 10px;
    top: 15px;
    line-height: initial;
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
    background-color: initial;
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
