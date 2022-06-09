<template>
  <div class="promotion-page" :key="componentKey">
    <el-form
      ref="promoFormRef"
      class="promo-form"
      :model="promoForm"
      :rules="promoRules"
      auto-complete="on"
    >
      <StickFlow
        :title="type === 'promo' ? 'PROMO CODE' : 'AUTOMATIC DISCOUNT'"
        :top="offsetTop"
      >
        <template #right><TfrSwitch v-model="promoForm.disabled" /></template>
      </StickFlow>
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
      <StickFlow title="TERMS&CONDITIONS" :top="offsetTop" />
      <el-form-item label="Effective region">
        <div class="region-list">
          <TfrTag
            v-for="region in regions"
            :key="region.code"
            @close="removeRegionHandle(region)"
            >{{ region.name }}</TfrTag
          >
          <span class="pointer" @click="editRegionHandle">Edit</span>
        </div>
      </el-form-item>
      <el-form-item label="Promotion">
        <TfrRadioGroup v-model="promotion" class="promotion-radio-group">
          <el-radio label="free shipping">Free Shipping</el-radio>
          <el-radio label="Percent off"
            ><span class="text">Percent Off</span>
            <TfrInput placeholder="10" width="80px" />%</el-radio
          >
          <el-radio label="amount off"
            ><span class="text">Amount Off</span>
            <div class="off-list">
              <div><TfrInput placeholder="100" width="80px" />USD $</div>
              <div><TfrInput placeholder="100" width="80px" />EUR €</div>
              <div><TfrInput placeholder="1200" width="80px" />JPY ¥</div>
              <div><TfrInput placeholder="1200" width="80px" />KRW ₩</div>
            </div>
          </el-radio>
        </TfrRadioGroup>
      </el-form-item>
      <template v-if="type === 'promo'">
        <el-form-item label="Usage limit">
          <TfrRadioGroup v-model="usageLimit">
            <el-radio label="none">None</el-radio>
            <el-radio label="set limit to"
              ><span class="text">Set Limit To</span>
              <TfrInput placeholder="10" width="80px" />uses</el-radio
            >
          </TfrRadioGroup>
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
        <TfrRadioGroup v-model="minimumRequirement">
          <el-radio label="none">None</el-radio>
          <el-radio label="spend"
            ><span class="text">Spend</span>
            <div class="off-list">
              <div><TfrInput placeholder="100" width="80px" />USD $</div>
              <div><TfrInput placeholder="100" width="80px" />EUR €</div>
              <div><TfrInput placeholder="1200" width="80px" />JPY ¥</div>
              <div><TfrInput placeholder="1200" width="80px" />KRW ₩</div>
            </div>
          </el-radio>
          <el-radio label="purchase">
            <span class="text">Purchase</span>
            <TfrInput placeholder="10" width="80px" />items
          </el-radio>
        </TfrRadioGroup>
      </el-form-item>
      <el-form-item label="Target">
        <TfrRadioGroup v-model="targetCustomer" @change="targetChange">
          <el-radio label="all">All Customers</el-radio>
          <el-radio label="setTarget">Set Target</el-radio>
        </TfrRadioGroup>
      </el-form-item>
      <el-form-item label="Applies to">
        <TfrRadioGroup v-model="applyToRadio" @change="applyToChange">
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
        </TfrRadioGroup>
      </el-form-item>
      <el-form-item label="Expiration">
        <TfrRadioGroup v-model="expirationRadio">
          <el-radio label="none">None</el-radio>
          <el-radio label="setExpiration">Set Expiration</el-radio>
        </TfrRadioGroup>
      </el-form-item>
      <el-form-item
        v-if="expirationRadio === 'setExpiration'"
        class="date-picker-item"
      >
        <DatePickerRange
          startDate="2022-06-08T14:21:35+08:00"
          endDate="2022-06-18T14:21:35+08:00"
          zt="America/Denver"
          ref="datePickerRangeRef"
        />
      </el-form-item>
    </el-form>
    <div class="btn-group" :style="{ left: menuWidth + 'px' }">
      <template v-if="target === 'add'">
        <TfrButton type="gray">DELETE</TfrButton>
        <TfrButton type="primary" @click="saveHandle">SAVE</TfrButton>
      </template>
    </div>
  </div>
  <TfrDialog
    v-model="regionVisible"
    :width="dialogWidth"
    class="region-dialog"
    :append-to-body="true"
    :headerLess="false"
    @beforeClose="closeRegionDialogHandle"
  >
    <template #header>
      <el-input placeholder="SEARCH">
        <template #suffix> CLEAR </template>
      </el-input>
    </template>
    <div v-for="region in regionData" :key="region.code" class="region-item">
      <TfrCheckbox v-model="region.checked" type="checkbox">{{
        region.name
      }}</TfrCheckbox>
    </div>
    <template #footer>
      <TfrButton type="gray" @click="closeRegionDialogHandle">CANCEL</TfrButton>
      <TfrButton type="primary" @click="confirmRegionHandle">CONFIRM</TfrButton>
    </template>
  </TfrDialog>
  <TfrDialog
    v-model="targetVisible"
    :width="dialogWidth"
    class="target-dialog"
    :append-to-body="true"
    :headerLess="false"
    @beforeClose="closeTargetDialogHandle"
  >
    <template #header>
      <el-input placeholder="SEARCH">
        <template #suffix> CLEAR </template>
      </el-input>
    </template>
    <div class="select-inline">
      <TfrSelect v-model="accountsOrigin" width="339px">
        <el-option value="all" label="All ACCOUNTS" />
      </TfrSelect>
      <TfrSelect v-model="targetRegion" width="339px">
        <el-option
          v-for="region in regionData"
          :value="region.code"
          :label="region.name"
          :key="region.code"
        />
      </TfrSelect>
    </div>
    <div class="target-list">
      <div class="region-item">
        <TfrCheckbox v-model="targetAllChecked" type="checkbox">
          SELECT ALL
        </TfrCheckbox>
      </div>
      <div v-for="region in regionData" :key="region.code" class="region-item">
        <TfrCheckbox v-model="region.checked" type="checkbox">{{
          region.name
        }}</TfrCheckbox>
        <span>Google</span>
      </div>
    </div>

    <template #footer>
      <TfrButton type="gray" @click="closeRegionDialogHandle">CANCEL</TfrButton>
      <TfrButton type="primary" @click="confirmRegionHandle">CONFIRM</TfrButton>
    </template>
  </TfrDialog>
  <TfrDialog
    v-model="applyLimitVisible"
    :width="dialogWidth"
    class="apply-limit-dialog"
    :append-to-body="true"
    :headerLess="true"
    @beforeClose="closeApplyLimitDialogHandle"
  >
    <div>
      <TfrSelect v-model="accountsOrigin" width="100%" :hasBorder="false">
        <el-option value="all" label="All ACCOUNTS" />
      </TfrSelect>
      <TfrSelect v-model="targetRegion" width="100%" :hasBorder="false">
        <el-option
          v-for="region in regionData"
          :value="region.code"
          :label="region.name"
          :key="region.code"
        />
      </TfrSelect>
    </div>
    <template #footer>
      <TfrButton type="gray" @click="closeRegionDialogHandle">CANCEL</TfrButton>
      <TfrButton type="primary" @click="confirmRegionHandle">CONFIRM</TfrButton>
    </template>
  </TfrDialog>
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
const componentKey = ref(1)
const reload = inject('reload')
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
const regions = ref([
  { name: 'All Region', code: 'all' }
  // { name: 'All Region', code: 'all' },
  // { name: 'All Region', code: 'all' },
  // { name: 'All Region', code: 'all' },
  // { name: 'All Region', code: 'all' },
  // { name: 'All Region', code: 'all' },
  // { name: 'All Region', code: 'all' }
])
const regionVisible = ref(false)
const regionData = ref([
  { name: 'All Region', code: 'all', checked: false },
  { name: 'Australia', code: 'as', checked: false }
])
const promotion = ref('free shipping')
const usageLimit = ref('none')
const customerLimit = ref('none')
const minimumRequirement = ref('none')
const targetCustomer = ref('all')
const targetVisible = ref(false)
const accountsOrigin = ref('all')
const targetRegion = ref('all')
const targetAllChecked = ref(false)
const applyToRadio = ref('all')
const applyLimitVisible = ref(false)
const expirationRadio = ref('none')

const removeRegionHandle = (tag: any) => {
  console.log(tag)
}
const editRegionHandle = () => {
  regionVisible.value = true
}
const closeRegionDialogHandle = () => {
  regionVisible.value = false
}
const confirmRegionHandle = () => {
  const regionChecked = regionData.value.filter(item => item.checked)
  regions.value = [...regions.value, ...regionChecked]
  regionVisible.value = false
}
const targetChange = (label: string) => {
  console.log(label)
  if (label === 'setTarget') {
    targetVisible.value = true
  }
}
const applyToChange = (label: string) => {
  if (label === 'setLimit') {
    applyLimitVisible.value = true
  }
}
const closeTargetDialogHandle = () => {
  targetVisible.value = false
}
const closeApplyLimitDialogHandle = () => {
  applyLimitVisible.value = false
}
const saveHandle = async () => {
  console.log(datePickerRangeRef.value.timeRef, 'kkkk')
  datePickerRangeRef.value.timeRef.validate((valid, fields) => {
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
.target-dialog {
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
    .select-inline {
      display: flex;
      justify-content: space-between;
      .el-select + .el-select {
        margin-left: 10px;
      }
    }
    .target-list {
      padding-top: 20px;
    }
    .region-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      padding: 10px;
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
