<template>
  <div class="gift-card-page">
    <el-form
      ref="giftCardFormRef"
      class="gift-card-form"
      :model="giftCardForm"
      :rules="giftCardRules"
    >
      <stick-flow title="GIFT CARD" :top="offsetTop">
        <template #right
          ><tfr-switch v-model="giftCardForm.disabled"
        /></template>
      </stick-flow>
      <el-form-item label="Name" prop="name">
        <tfr-input v-model="giftCardForm.name" placeholder="NEW GIFT CARD" />
        <p class="subtitle">Name is shown to customer.</p>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <tfr-input
          v-model="giftCardForm.description"
          placeholder="Enter description..."
        />
        <p class="subtitle">Description is for internal reference only.</p>
      </el-form-item>
      <stick-flow title="TERMS&CONDITIONS" :top="offsetTop" />
      <el-form-item label="Effective region">
        <div class="region-list">
          <tfr-tag
            v-for="(region, index) in effectiveRegionList"
            :key="region.code"
            @close="removeRegionHandle(index)"
            >{{ region.name }}</tfr-tag
          >
          <span class="pointer" @click="editRegionHandle">Edit</span>
        </div>
      </el-form-item>
      <el-form-item label="Tag">
        <div class="create-tag">
          <el-input v-model="creatNewTag" placeholder="Create new tag...">
            <template #suffix>
              <span @click="addTagHandle">ADD</span>
            </template>
          </el-input>
          <div class="tag-list">
            <tfr-tag
              v-for="(tag, index) in tagList"
              :key="'tag' + index"
              @close="delTagHandle(index)"
              >{{ tag.name }}</tfr-tag
            >
          </div>
        </div>
      </el-form-item>
      <el-form-item label="Applies to">
        <tfr-radio-group v-model="applyType" @change="applyTypeChange">
          <el-radio label="all">Entire Order</el-radio>
          <el-radio label="setLimit">Set Limit</el-radio>
          <el-radio label="tfrId"
            >TFR ID
            <div v-if="applyType === 'tfrId'" class="tfr-id-list">
              <el-input placeholder="Enter TFRID..." @paste="pasteTfrIdsHandle">
                <template #suffix> ADD </template>
              </el-input>
            </div></el-radio
          >
        </tfr-radio-group>
      </el-form-item>
      <el-form-item label="Expiration">
        <tfr-radio-group v-model="expirationType">
          <el-radio label="none">None</el-radio>
          <el-radio label="setExpiration">Set Expiration</el-radio>
        </tfr-radio-group>
      </el-form-item>
      <el-form-item
        v-if="expirationType === 'setExpiration'"
        class="date-picker-item"
      >
        <date-picker-range
          startDate="2022-06-08T14:21:35+08:00"
          endDate="2022-06-18T14:21:35+08:00"
          zt="America/Denver"
          ref="datePickerRangeRef"
        />
      </el-form-item>
      <sticky-flow title="IMAGE" />
      <div class="image-area">
        <upload :pictureList="picture" />
      </div>
    </el-form>
    <effective-region-dialog
      :visible="effectiveRegionDialog"
      @update:visible="effectiveRegionDialog = $event"
      :width="dialogWidth"
      @cancelHandle="effectiveRegionDialogCancelHandle"
      @confirmHandle="effectiveRegionDialogConfirmHandle"
    />
    <applies-limit-dialog
      :visible="appliesLimitDialog"
      @update:visible="appliesLimitDialog = $event"
      :width="dialogWidth"
      @cancelHandle="appliesLimitDialogCancelHandle"
      @confirmHandle="appliesLimitDialogConfirmHandle"
    />
  </div>
</template>

<script setup lang="ts">
import StickFlow from '@/components/StickyFlow/index.vue'
import TfrSwitch from '@/components/TfrSwitch/index.vue'
import TfrInput from '@/components/TfrInput/index.vue'
import TfrTag from '@/components/TfrTag/index.vue'
import TfrRadioGroup from '@/components/TfrRadioGroup/index.vue'
import EffectiveRegionDialog from '../components/EffectiveRegionDialog/index.vue'
import AppliesLimitDialog from '../components/AppliesLimitDialog/index.vue'
import DatePickerRange from '@/components/DatePickerRange/index.vue'
import Upload from '@/components/Upload/index.vue'
import { reactive, ref, nextTick } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { storeToRefs } from 'pinia'
import { appStore } from '@/store/modules/app'
const datePickerRangeRef = ref()

interface TagItem {
  name: string
}

interface Picture {
  [key: string]: any
}

const { device } = storeToRefs(appStore())

const giftCardFormRef = ref<FormInstance>()
const offsetTop = ref(device.value === 'mobile' ? 140 : 60)

const giftCardForm = reactive({
  disabled: false,
  name: '',
  description: ''
})

const giftCardRules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: 'Name is required',
      trigger: 'blur'
    }
  ],
  description: [
    {
      required: true,
      message: 'Description is required',
      trigger: 'blur'
    }
  ]
})
const effectiveRegionList = reactive([{ name: 'All Region', code: 'all' }])
const dialogWidth = ref(device.value === 'mobile' ? '100%' : '728px')
const effectiveRegionDialog = ref(<boolean>false)
const appliesLimitDialog = ref(<boolean>false)
const creatNewTag = ref(<string>'')
const tagList = reactive([{ name: 'Tag' }])
const applyType = ref('all')
const expirationType = ref('none')
const picture = reactive([])

const removeRegionHandle = (index: number) => {
  console.log(effectiveRegionList)
  effectiveRegionList.splice(index, 1)
}

const editRegionHandle = () => {
  effectiveRegionDialog.value = true
}

const effectiveRegionDialogCancelHandle = () => {
  effectiveRegionDialog.value = false
}
const effectiveRegionDialogConfirmHandle = () => {
  console.log(111111111111)
}

const addTagHandle = () => {
  const creatNewTagValue = creatNewTag.value
  if (creatNewTagValue) {
    const listItem: TagItem | undefined = tagList.find(
      item => item.name === creatNewTagValue
    )
    if (listItem) return
    const temp = { name: creatNewTagValue }
    tagList.push(temp)
    nextTick(() => {
      creatNewTag.value = ''
    })
  }
}
const delTagHandle = (index: number) => {
  tagList.splice(index, 1)
}

const applyTypeChange = (label: string) => {
  if (label === 'setLimit') {
    appliesLimitDialog.value = true
  }
}

const appliesLimitDialogCancelHandle = () => {
  appliesLimitDialog.value = false
}

const appliesLimitDialogConfirmHandle = () => {
  /**
   * 关闭弹窗前的一些逻辑
   */
  appliesLimitDialog.value = false
}

const pasteTfrIdsHandle = (e: MouseEvent) => {
  navigator.clipboard.readText().then(clipText => {
    console.log(clipText)
  })
}
</script>

<style lang="scss" scoped>
.gift-card-page {
  padding: 20px;
  .gift-card-form {
    .sticky-section {
      margin-bottom: 20px;
    }
    .el-form-item {
      display: block;
      ::v-deep(.el-form-item__label) {
        text-align: left;
        color: $theme;
        font-weight: 400;
        font-size: 14px;
      }
      ::v-deep(.el-form-item__label) {
        position: relative;
      }
      &.is-required:not(.is-no-asterisk)
        > ::v-deep(.el-form-item__label:before) {
        position: absolute;
        right: -5px;
        color: $theme;
      }
      ::v-deep(.el-form-item__content) {
        line-height: 40px;
      }
      .subtitle {
        font-family: 'Brown Light', serif;
        margin: 10px 0 0;
        line-height: 1;
      }
      &.date-picker-item {
        ::v-deep(.el-form-item__content) {
          justify-content: center;
        }
      }
    }
  }
  .region-list {
    display: flex;
    .tfr-tag {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .create-tag {
    .el-input {
      width: 315px;
      ::v-deep(.el-input__wrapper) {
        padding: 0;
        box-shadow: none;
        .el-input__inner {
          height: 50px;
          padding: 10px;
          border: none;
          text-align: left;
          border-bottom: 1px solid $theme;
          //opacity: 0.5;
        }
        .el-input__suffix {
          height: 50px;
          cursor: pointer;
        }
        .el-input__suffix-inner {
          font-size: 12px;
          color: $theme;
          border-bottom: 1px solid $theme;
          padding: 10px;
          height: 50px;
          //opacity: 0.5;
        }
      }
    }
    .tag-list {
      display: flex;
      margin-top: 20px;
      .tfr-tag {
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
  }
  .tfr-radio-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .el-radio {
      height: auto;
      padding: 0 10px;
      margin-right: 0;
      align-items: unset;
      & + .el-radio {
        margin-top: 10px;
      }
      ::v-deep(.el-radio__input) {
        height: 40px;
        display: inline-flex;
        align-items: center;
      }
      .text {
        display: inline-block;
        width: 100px;
      }
      .tfr-input {
        margin-right: 10px;
      }
      ::v-deep(.el-input__wrapper) {
        box-shadow: rgba(27, 42, 39, 0.5) inset 0 0 0 1px;
        height: 40px;
        line-height: 40px;
        border-radius: 0;
        .el-input__inner {
          text-align: center;
        }
      }
      ::v-deep(.el-radio__label) {
        display: flex;
      }
      .off-list {
        display: flex;
        flex-direction: column;
        & > div + div {
          margin-top: 10px;
        }
      }
    }
  }
  .tfr-id-list {
    margin-left: 10px;
    .el-input {
      ::v-deep(.el-input__wrapper) {
        padding: 0;
        box-shadow: none;
        .el-input__inner {
          height: 50px;
          padding: 10px;
          border: none;
          text-align: left;
          border-bottom: 1px solid $theme;
          opacity: 0.5;
        }
        .el-input__suffix {
          height: 50px;
        }
        .el-input__suffix-inner {
          font-size: 12px;
          color: $theme;
          border-bottom: 1px solid $theme;
          padding: 10px;
          height: 50px;
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
