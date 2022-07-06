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
      <el-input
        v-model="keyword"
        placeholder="SEARCH"
        @keyup.enter="getRegionHandle"
      >
        <template #suffix>
          <span @click="clearHandle">CLEAR</span>
        </template>
      </el-input>
    </template>
    <div
      v-for="region in regionList"
      :key="region.region_code"
      class="region-item"
    >
      <tfr-checkbox
        v-model="region.checked"
        type="checkbox"
        @change="regionChange(region)"
        >{{ region.region_name.toUpperCase() }}</tfr-checkbox
      >
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
import { ref, computed, onMounted, getCurrentInstance } from 'vue'
import { getRegionAll } from '@/api/marketing'

interface RegionItem {
  checked: boolean
  currency_code?: string
  flag?: string
  phone_code?: string
  region_code: string
  region_name: string
}

interface PropsType {
  visible: boolean
  width?: string
  regionList: RegionItem[]
}

const $tfrMessage: any =
  getCurrentInstance()?.appContext?.config?.globalProperties?.$tfrMessage

const dialogProps = withDefaults(defineProps<PropsType>(), {
  visible: false // 默认值
})

const dialogEmits = defineEmits([
  'update:visible',
  'cancelHandle',
  'confirmHandle'
])

let regionList = ref<RegionItem[]>()
const keyword = ref<string>('')

const visibleDialog = computed({
  get: () => dialogProps.visible,
  set: newValue => {
    dialogEmits('update:visible', newValue)
  }
})

onMounted(async () => {
  const list: any = await getRegionAll()
  regionList.value = [
    { region_code: 'all', region_name: 'All Region', checked: false },
    ...list
  ]
  const length = dialogProps.regionList.length
  if (length > 0) {
    const firstRegionCode = dialogProps.regionList[0].region_code
    if (firstRegionCode === 'all') {
      regionList.value.forEach(item => {
        item.checked = true
      })
    }
  }
})

const closeHandle = () => {
  visibleDialog.value = false
}

const cancelHandle = () => {
  dialogEmits('cancelHandle')
}

const confirmHandle = () => {
  const checkedItem: RegionItem | undefined = regionList.value?.find(
    (item: RegionItem) => item.checked
  )
  if (!checkedItem) {
    $tfrMessage({
      type: 'error',
      message: 'Select region, please!'
    })
    return
  }
  dialogEmits('confirmHandle', regionList.value)
}

const regionChange = (region: RegionItem) => {
  if (region.region_code === 'all') {
    regionList.value!.forEach(item => {
      item.checked = region.checked
    })
  }
}

const getRegionHandle = async () => {
  const list: any = await getRegionAll({ keyword: keyword.value })
  regionList.value = list
  if (!keyword.value) {
    regionList.value = [
      { region_code: 'all', region_name: 'All Region', checked: false },
      ...list
    ]
  }
}

const clearHandle = () => {
  if (keyword.value) {
    keyword.value = ''
    getRegionHandle()
  }
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
          cursor: pointer;
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
    width: auto;
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
