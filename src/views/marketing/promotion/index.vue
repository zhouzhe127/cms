<template>
  <div class="promotion-page">
    <el-form
      ref="promoFormRef"
      class="promo-form"
      :model="promoForm"
      :rules="promoRules"
      auto-complete="on"
    >
      <StickFlow title="PROMO CODE">
        <template #right><TfrSwitch v-model="promoForm.disabled" /></template>
      </StickFlow>
      <div v-if="target === 'add'" class="tips">
        <svg-icon icon-class="lock" />
        <p class="text">
          <strong>Editing a promo code: </strong>A promo code is locked down at
          the commencement of its effective period. Once locked down, you will
          not be able to make any changes until it expires.
        </p>
      </div>
      <el-form-item label="Name" prop="name">
        <TfrInput v-model="promoForm.name" placeholder="NEW PROMO CODE" />
        <p class="subtitle">Name is shown to customer.</p>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <TfrInput
          v-model="promoForm.description"
          placeholder="Enter description..."
        />
        <p class="subtitle">Description is for internal reference only.</p>
      </el-form-item>
      <StickFlow title="TERMS&CONDITIONS" />
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
          <el-radio label="Percent off" type="radio">Percent Off</el-radio>
        </TfrRadioGroup>
      </el-form-item>
      <StickFlow title="PROMO CODE3" />
    </el-form>
    <div class="btn-group" :style="{ left: menuWidth + 'px' }">
      <template v-if="target === 'add'">
        <TfrButton type="gray">DELETE</TfrButton>
        <TfrButton type="primary">SAVE</TfrButton>
      </template>
    </div>
  </div>
  <TfrDialog
    v-model="regionVisible"
    width="728px"
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
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive, ref } from 'vue'
import StickFlow from '@/components/StickyFlow/index.vue'
import TfrSwitch from '@/components/TfrSwitch/index.vue'
import TfrInput from '@/components/TfrInput/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import TfrTag from '@/components/TfrTag/index.vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import TfrCheckbox from '@/components/TfrCheckbox/index.vue'
import TfrRadioGroup from '@/components/TfrRadioGroup/index.vue'
import { storeToRefs } from 'pinia'
import { menuStore } from '@/store/modules/menu'
import type { FormInstance, FormRules } from 'element-plus'
const promoFormRef = ref<FormInstance>()
const route = useRoute()
const { type, target } = route.params
console.log('route', type, target)
const { menuWidth } = storeToRefs(menuStore())
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
console.log(promoForm)
</script>

<style lang="scss" scoped>
.promotion-page {
  padding: 20px;
  .promo-form {
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
  .promotion-radio-group {
    display: flex;
    flex-direction: column;
    text-align: left;
    .el-radio {
      margin-right: 0;
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
    .el-button {
      width: 339px;
      & + .el-button {
        margin-left: 10px;
      }
    }
  }
}
</style>
