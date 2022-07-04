<template>
  <tfr-dialog
    v-model="visibleDialog"
    :width="dialogProps.width"
    class="region-dialog"
    :append-to-body="true"
    :header-less="false"
    @beforeClose="closeHandle"
  >
    <template #header>
      <el-input placeholder="SEARCH">
        <template #suffix> CLEAR </template>
      </el-input>
    </template>
    <div v-for="region in regionList" :key="region.code" class="region-item">
      <tfr-checkbox v-model="region.checked" type="checkbox">{{
        region.name
      }}</tfr-checkbox>
    </div>
    <template #footer>
      <tfr-button type="gray" @click="cancelHandle">CANCEL</tfr-button>
      <tfr-button type="primary" @click="confirmHandle">CONFIRM</tfr-button>
    </template>
  </tfr-dialog>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
import TfrCheckbox from '@/components/TfrCheckbox/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import { ref, computed } from 'vue'

interface PropsType {
  visible: boolean
  width?: string
}

const dialogProps = withDefaults(defineProps<PropsType>(), {
  visible: false // 默认值
})

const dialogEmits = defineEmits([
  'update:visible',
  'cancelHandle',
  'confirmHandle'
])

const regionList = ref([
  { name: 'All Region', code: 'all', checked: false },
  { name: 'Australia', code: 'as', checked: false }
])

const visibleDialog = computed({
  get: () => dialogProps.visible,
  set: newValue => {
    dialogEmits('update:visible', newValue)
  }
})

const closeHandle = () => {
  visibleDialog.value = false
}

const cancelHandle = () => {
  dialogEmits('cancelHandle')
}

const confirmHandle = () => {
  dialogEmits('confirmHandle', regionList)
}
</script>

<style lang="scss">
.region-dialog {
  height: 100%;
  .el-dialog__header {
    padding: 0;
    margin-top: 60px;
    margin-right: 0;
    border-bottom: 1px solid $theme;
    .el-input {
      .el-input__wrapper {
        padding: 0;
        box-shadow: none;
        .el-input__inner {
          height: 50px;
          padding: 10px;
          border: none;
        }
        .el-input__suffix-inner {
          font-size: 12px;
          color: $theme;
        }
      }
    }
  }
  .el-dialog__body {
    padding-top: 20px;
    margin-bottom: 91px;
    overflow: auto;
    .region-item {
      padding: 10px;
      height: 60px;
    }
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
