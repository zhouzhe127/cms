<template>
  <div class="down-container">
    <tfr-upload :picture-list="downList" />
  </div>
</template>

<script setup lang="ts">
import TfrUpload from '@/components/TfrUpload/index.vue'
import { ref, toRaw } from 'vue'
import { SETPAGETYPE } from '../utils'
interface Props {
  value?: any
}
const ruleForm = ref(null)
const props = withDefaults(defineProps<Props>(), {})
const type = SETPAGETYPE.DOWNLOAD_MEDIA
if (props?.value) {
  ruleForm.value = props?.value[type] || {}
}
const downList = ref<any[]>([])
const confirm = () => {
  return Promise.resolve({
    [type]: toRaw({})
  })
}
defineExpose({
  confirm
})
</script>

<style lang="scss">
// 调整上传组件的样式
$classlist: '.down-container' '.down-container .upload-field'
  '.down-container .upload-box' '.down-container .upload-box>div'
  '.down-container .el-upload-list' '.down-container .upload-box .el-upload';

@each $classKey in $classlist {
  #{$classKey} {
    width: 100%;
    height: 100%;
  }
}
</style>
