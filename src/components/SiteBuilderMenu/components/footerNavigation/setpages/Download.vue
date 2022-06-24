<template>
  <div class="down-container">
    <tfr-upload :pictureList="downList" />
  </div>
</template>

<script setup lang="ts">
import TfrUpload from '@/components/TfrUpload/index.vue'
import { ref } from 'vue'

const downList = ref<any[]>([])
</script>

<style lang="scss">
// 调整上传组件的样式
$classlist: 
    '.down-container' 
    '.down-container .upload-field' 
    '.down-container .upload-box' 
    '.down-container .upload-box>div' 
    '.down-container .el-upload-list' 
    '.down-container .upload-box .el-upload';
  
@each $classKey in $classlist {
  #{$classKey}{
    width: 100%;
    height: 100%;
  }
}
</style>
