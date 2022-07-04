<template>
  <tfr-dialog
    v-model="visibleDialog"
    :width="dialogProps.width"
    class="apply-limit-dialog"
    :append-to-body="true"
    :header-less="true"
    @beforeClose="closeHandle"
  >
    <div>
      <tfr-select
        v-model="selectedAccountsOrigin"
        width="100%"
        :has-border="false"
      >
        <el-option value="all" label="All ACCOUNTS" />
      </tfr-select>
      <tfr-select v-model="selectedRegion" width="100%" :has-border="false">
        <el-option
          v-for="region in regionList"
          :key="region.code"
          :value="region.code"
          :label="region.name"
        />
      </tfr-select>
    </div>
    <template #footer>
      <tfr-button type="gray" @click="cancelHandle">CANCEL</tfr-button>
      <tfr-button type="primary" @click="confirmHandle">CONFIRM</tfr-button>
    </template>
  </tfr-dialog>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
import TfrSelect from '@/components/TfrSelect/index.vue'
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
const selectedRegion = ref()
const selectedAccountsOrigin = ref()

const visibleDialog = computed({
  get: () => dialogProps.visible,
  set: (newVisible: boolean) => {
    dialogEmits('update:visible', newVisible)
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
.apply-limit-dialog {
  height: 100%;
  .el-dialog__body {
    padding-top: 60px;
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
