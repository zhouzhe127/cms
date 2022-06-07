<template>
  <el-dialog v-bind="$attrs" :custom-class="customClass" :show-close="false">
    <div v-if="dialogProps.isClose" class="close">
      <svg-icon icon-class="close" @click="closeHandle" />
    </div>
    <template #title>
      <slot name="header"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
    <slot></slot>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const customClass = ref('tfr-dialog')
interface PropsType {
  class?: string // 自定义类名
  headerLess?: boolean // 是否无头部
  isClose?: boolean // 是否显示关闭开关
}
const dialogProps = withDefaults(defineProps<PropsType>(), {
  class: '', // 默认值
  headerLess: true,
  isClose: true
})
customClass.value = `${customClass.value} ${dialogProps.class} ${
  dialogProps.headerLess ? 'dialog-header-less' : ''
}`
const dialogEmits = defineEmits(['beforeClose', 'update:modelValue'])
const closeHandle = () => {
  dialogEmits('beforeClose')
  dialogEmits('update:modelValue', false)

}
</script>

<style lang="scss">
.el-overlay {
  background-color: rgba(4, 4, 15, 0.4);
  .tfr-dialog {
    &.el-dialog {
      display: flex;
      flex-direction: column;
      margin: 0 !important;
      padding: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &.dialog-header-less {
      .el-dialog__header {
        display: none;
      }
    }
    .close {
      position: absolute;
      top: 30px;
      right: 30px;
      .svg-icon {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .el-dialog__body,
  .el-dialog__footer {
    padding: 0;
  }
}
</style>
