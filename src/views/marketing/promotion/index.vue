<template>
  <div class="promotion-page">
    <el-form
      ref="promoFormRef"
      class="promo-form"
      :model="promoForm"
      :rules="promoRules"
    >
      <stick-flow
        :title="type === 'promo' ? 'PROMO CODE' : 'AUTOMATIC DISCOUNT'"
        :top="offsetTop"
      >
        <template #right><tfr-switch v-model="promoForm.disabled" /></template>
      </stick-flow>
      <div v-if="target === 'view'" class="tips">
        <svg-icon icon-class="lock" />
        <p class="text">
          <strong>Editing a promo code: </strong>A promo code is locked down at
          the commencement of its effective period. Once locked down, you will
          not be able to make any changes until it expires.
        </p>
      </div>
      <el-form-item label="Name" prop="name">
        <TfrInput
          v-model="promoForm.name"
          :placeholder="type === 'promo' ? 'NEW PROMO CODE' : 'NEW DISCOUNT'"
        />
        <p class="subtitle">Name is shown to customer.</p>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <TfrInput
          v-model="promoForm.description"
          placeholder="Enter description..."
        />
        <p class="subtitle">Description is for internal reference only.</p>
      </el-form-item>
      <stick-flow title="TERMS&CONDITIONS" :top="offsetTop" />
      <el-form-item label="Effective region">
        <div class="region-list">
          <tfr-tag
            v-for="region in effectiveRegionList"
            :key="region.code"
            @close="removeRegionHandle(region)"
            >{{ region.name }}</tfr-tag
          >
          <span class="pointer" @click="editRegionHandle">Edit</span>
        </div>
      </el-form-item>
      <el-form-item label="Promotion">
        <tfr-radio-group v-model="promotion" class="promotion-radio-group">
          <el-radio label="free shipping">Free Shipping</el-radio>
          <el-radio label="Percent off"
            ><span class="text">Percent Off</span>
            <tfr-input placeholder="10" width="80px" />%</el-radio
          >
          <el-radio label="amount off"
            ><span class="text">Amount Off</span>
            <div class="off-list">
              <div><tfr-input placeholder="100" width="80px" />USD $</div>
              <div><tfr-input placeholder="100" width="80px" />EUR €</div>
              <div><tfr-input placeholder="1200" width="80px" />JPY ¥</div>
              <div><tfr-input placeholder="1200" width="80px" />KRW ₩</div>
            </div>
          </el-radio>
        </tfr-radio-group>
      </el-form-item>
      <template v-if="type === 'promo'">
        <el-form-item label="Usage limit">
          <tfr-radio-group v-model="usageLimit">
            <el-radio label="none">None</el-radio>
            <el-radio label="set limit to"
              ><span class="text">Set Limit To</span>
              <tfr-input placeholder="10" width="80px" />uses</el-radio
            >
          </tfr-radio-group>
        </el-form-item>
        <el-form-item label="Customer limit">
          <TfrRadioGroup v-model="customerLimit">
            <el-radio label="none">None</el-radio>
            <el-radio label="set limit to"
              ><span class="text">Set limit to</span>
              <TfrInput placeholder="10" width="80px" />pre customer</el-radio
            >
          </TfrRadioGroup>
        </el-form-item>
      </template>
      <el-form-item label="Minimum requirement">
        <tfr-radio-group v-model="minimumRequirement">
          <el-radio label="none">None</el-radio>
          <el-radio label="spend"
            ><span class="text">Spend</span>
            <div class="off-list">
              <div><tfr-input placeholder="100" width="80px" />USD $</div>
              <div><tfr-input placeholder="100" width="80px" />EUR €</div>
              <div><tfr-input placeholder="1200" width="80px" />JPY ¥</div>
              <div><tfr-input placeholder="1200" width="80px" />KRW ₩</div>
            </div>
          </el-radio>
          <el-radio label="purchase">
            <span class="text">Purchase</span>
            <tfr-input placeholder="10" width="80px" />items
          </el-radio>
        </tfr-radio-group>
      </el-form-item>
      <el-form-item label="Target">
        <tfr-radio-group v-model="targetCustomer" @change="targetChange">
          <el-radio label="all">All Customers</el-radio>
          <el-radio label="setTarget">Set Target</el-radio>
        </tfr-radio-group>
      </el-form-item>
      <el-form-item label="Applies to">
        <tfr-radio-group v-model="applyToRadio" @change="applyToChange">
          <el-radio label="all">Entire Order</el-radio>
          <el-radio label="setLimit">Set Limit</el-radio>
          <el-radio label="tfrId"
            >TFR ID
            <div v-if="applyToRadio === 'tfrId'" class="tfr-id-list">
              <el-input placeholder="Enter TFRID...">
                <template #suffix> ADD </template>
              </el-input>
            </div></el-radio
          >
        </tfr-radio-group>
      </el-form-item>
      <el-form-item label="Expiration">
        <tfr-radio-group v-model="expirationRadio">
          <el-radio label="none">None</el-radio>
          <el-radio label="setExpiration">Set Expiration</el-radio>
        </tfr-radio-group>
      </el-form-item>
      <el-form-item
        v-if="expirationRadio === 'setExpiration'"
        class="date-picker-item"
      >
        <date-picker-range
          ref="datePickerRangeRef"
          start-date="2022-06-08T14:21:35+08:00"
          end-date="2022-06-18T14:21:35+08:00"
          zt="America/Denver"
        />
      </el-form-item>
    </el-form>
    <div
      class="btn-group"
      :style="{ left: device === 'mobile' ? 0 : menuWidth }"
    >
      <template v-if="target === 'add'">
        <tfr-button type="gray">DELETE</tfr-button>
        <tfr-button type="primary" @click="saveHandle">SAVE</tfr-button>
      </template>
    </div>
  </div>
  <effective-region-dialog
    :visible="effectiveRegionDialog"
    :width="dialogWidth"
    :region-list="[]"
    @update:visible="effectiveRegionDialog = $event"
    @cancelHandle="effectiveRegionDialogCancelHandle"
    @confirmHandle="effectiveRegionDialogConfirmHandle"
  />
  <target-dialog
    :visible="targetVisible"
    :width="dialogWidth"
    @update:visible="targetVisible = $event"
    @cancelHandle="targetDialogCancelHandle"
    @confirmHandle="targetDialogConfirmHandle"
  />
  <applies-limit-dialog
    :visible="applyLimitVisible"
    :width="dialogWidth"
    @update:visible="applyLimitVisible = $event"
    @cancelHandle="appliesLimitDialogCancelHandle"
    @confirmHandle="appliesLimitDialogConfirmHandle"
  />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive, ref, watch, inject } from 'vue'
import StickFlow from '@/components/StickyFlow/index.vue'
import TfrSwitch from '@/components/TfrSwitch/index.vue'
import TfrInput from '@/components/TfrInput/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import TfrTag from '@/components/TfrTag/index.vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import TfrCheckbox from '@/components/TfrCheckbox/index.vue'
import TfrRadioGroup from '@/components/TfrRadioGroup/index.vue'
import TfrSelect from '@/components/TfrSelect/index.vue'
import DatePickerRange from '@/components/DatePickerRange/index.vue'
import EffectiveRegionDialog from '@/views/marketing/components/EffectiveRegionDialog/index.vue'
import AppliesLimitDialog from '@/views/marketing/components/AppliesLimitDialog/index.vue'
import TargetDialog from '@/views/marketing/components/TargetDialog/index.vue'
import moment from 'moment'
import { storeToRefs } from 'pinia'
import { menuStore } from '@/store/modules/menu'
import { appStore } from '@/store/modules/app'
import type { FormInstance, FormRules } from 'element-plus'
const promoFormRef = ref<FormInstance>()
const datePickerRangeRef = ref()
const route = useRoute()
const { type, target } = route.params
console.log('route', type, target)
const { menuWidth } = storeToRefs(menuStore())
const reload: any = inject('reload')
const { device } = storeToRefs(appStore())
const offsetTop = ref(device.value === 'mobile' ? 140 : 60)
const dialogWidth = ref(device.value === 'mobile' ? '100%' : '728px')

watch(
  () => route.params,
  params => {
    console.log(params, type)
    reload()
  }
)

const promoForm = reactive({
  disabled: false,
  name: '',
  description: ''
})
const promoRules = reactive<FormRules>({
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
const effectiveRegionList = ref([{ name: 'All Region', code: 'all' }])
const effectiveRegionDialog = ref(<boolean>false)
const targetVisible = ref(<boolean>false)
const applyLimitVisible = ref(<boolean>false)
const regionData = ref([
  { name: 'All Region', code: 'all', checked: false },
  { name: 'Australia', code: 'as', checked: false }
])
const promotion = ref('free shipping')
const usageLimit = ref('none')
const customerLimit = ref('none')
const minimumRequirement = ref('none')
const targetCustomer = ref('all')

const applyToRadio = ref('all')

const expirationRadio = ref('none')

const removeRegionHandle = (tag: any) => {
  console.log(tag)
}
const editRegionHandle = (): void => {
  effectiveRegionDialog.value = true
}

const effectiveRegionDialogCancelHandle = (): void => {
  effectiveRegionDialog.value = false
}

const effectiveRegionDialogConfirmHandle = (regionData: any) => {
  const regionChecked = regionData.value.filter((item: any) => item.checked)
  effectiveRegionList.value = [...effectiveRegionList.value, ...regionChecked]
  effectiveRegionDialog.value = false
}
const targetChange = (label: string) => {
  console.log(label)
  if (label === 'setTarget') {
    targetVisible.value = true
  }
}
const targetDialogCancelHandle = (): void => {
  targetVisible.value = false
}

const targetDialogConfirmHandle = (): void => {
  /**
   * 关闭按钮前的一些处理逻辑
   */
  targetVisible.value = false
}

const applyToChange = (label: string) => {
  if (label === 'setLimit') {
    applyLimitVisible.value = true
  }
}
const closeTargetDialogHandle = () => {
  targetVisible.value = false
}
const appliesLimitDialogCancelHandle = (): void => {
  applyLimitVisible.value = false
}

const appliesLimitDialogConfirmHandle = (): void => {
  /**
   * 关闭前的一些处理逻辑
   */
  applyLimitVisible.value = false
}
const saveHandle = async () => {
  console.log(datePickerRangeRef.value.timeRef, 'kkkk')
  datePickerRangeRef.value.timeRef.validate((valid: boolean) => {
    console.log(valid)
  })
  const dateFormat = moment('2022-07-02').format('YYYY-MM-DD')
  console.log(datePickerRangeRef.value.startDate, dateFormat)
}
</script>

<style lang="scss" scoped>
.promotion-page {
  padding: 20px;
  .promo-form {
    padding-bottom: 90px;
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
  .tips {
    padding: 10px;
    background-color: $bg;
    display: flex;
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
    p {
      margin: 0;
      font-family: 'Brown Light', serif;
      line-height: 18.2px;
      strong {
        font-family: 'Brown Regular';
        font-weight: 400;
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
  .btn-group {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 20px;
    display: flex;
    z-index: 1000;
    background-color: #fff;
    .el-button {
      width: 50%;
    }
    .el-button + .el-button {
      margin-left: 10px;
    }
  }
}
</style>
