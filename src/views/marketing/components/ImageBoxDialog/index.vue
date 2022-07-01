<template>
  <tfr-dialog
    v-model="visibleDialog"
    :width="dialogProps.width"
    class="image-box-dialog"
    :append-to-body="true"
    :header-less="false"
    @beforeClose="cancelHandle"
  >
    <template #header>
      <div>VARIANT IMAGE</div>
    </template>
    <tfr-upload
      :picture-list="dialogProps.pictureList"
      :is-select="true"
      @updateSelectedIndexHandle="updateSelectedIndexHandle"
    />
    <template #footer>
      <tfr-button type="gray" @click="cancelHandle">CANCEL</tfr-button>
      <tfr-button type="primary" @click="confirmHandle">APPLY</tfr-button>
    </template>
  </tfr-dialog>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import TfrUpload from '@/components/TfrUpload/index.vue'
import { ref, computed } from 'vue'

interface PropsType {
  visible: boolean
  width?: string
  pictureList: Array<any>
}

const dialogProps = withDefaults(defineProps<PropsType>(), {
  visible: false, // 默认值
  pictureList: () => []
})

const dialogEmits = defineEmits([
  'update:visible',
  'cancelHandle',
  'confirmHandle'
])

const selectedIndex = ref<number | boolean>(false)

const visibleDialog = computed({
  get: () => dialogProps.visible,
  set: (newVisible: boolean) => {
    dialogEmits('update:visible', newVisible)
  }
})

const cancelHandle = (): void => {
  dialogEmits('cancelHandle')
}

const confirmHandle = (): void => {
  console.log(selectedIndex)
  if (selectedIndex.value === false) {
    /**
     * message 告知未选择图片
     */
    return
  }
  dialogEmits('confirmHandle', selectedIndex.value)
}

const updateSelectedIndexHandle = (index: number) => {
  console.log(index, 'index')
  selectedIndex.value = index
}
</script>

<style lang="scss">
.image-box-dialog {
  height: 100%;
  .el-dialog__header {
    padding: 0;
    margin-top: 20px;
    margin-right: 0;
    //border-bottom: 1px solid $theme;
  }
  .el-dialog__body {
    padding-top: 20px;
    margin-bottom: 91px;
    overflow: auto;
  }
  .el-dialog__footer {
    padding: 20px 0;
    margin: 0 20px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid rgba(27, 43, 39, 0.1);
    display: flex;
    justify-content: space-between;
    .el-button {
      width: 339px;
      & + .el-button {
        margin-left: 10px;
      }
    }
  }
}
</style>
