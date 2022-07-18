<template>
  <div class="announcement-page">
    <div v-if="target === 'add'" class="preview-here">
      <span>PREVIEW HERE</span>
    </div>
    <div v-else class="preview-here-edit">
      <div class="image">
        <img
          src="https://img-dev.tfrcdn.com/test/product/brand/1016/629dc7293d2b140008054f76/caeseed7l1hqd56qhlbg.jpeg"
          alt=""
        />
      </div>
      <div class="preview-here">
        <span>PREVIEW HERE</span>
      </div>
    </div>
    <el-form
      ref="announcementFormRef"
      class="announcement-form"
      :model="announcementForm"
      :rules="announcementRules"
    >
      <stick-flow title="ANNOUNCEMENT" :top="offsetTop">
        <template #right
          ><tfr-switch v-model="announcementForm.disabled"
        /></template>
      </stick-flow>
      <div class="tips">
        <svg-icon icon-class="warning" />
        Observe maximum with guidance. Do not extend message beyond dotted
        lines.
      </div>
      <el-form-item label="Name" prop="name">
        <tfr-input
          v-model="announcementForm.name"
          placeholder="NEW ANNOUNCEMENT"
        />
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <tfr-input
          v-model="announcementForm.description"
          placeholder="Enter description..."
        />
        <p class="subtitle">Description is for internal reference only.</p>
      </el-form-item>
      <stick-flow title="CONTENT" :top="offsetTop" />
      <el-form-item label="Message" prop="message">
        <tfr-input
          v-model="announcementForm.message"
          placeholder="Enter message..."
        />
        <p class="subtitle">Message shown on the banner.</p>
      </el-form-item>
      <el-form-item label="Banner image" class="image-area">
        <tfr-upload :picture-list="bannerPicture" :is-only-one="true" />
        <p class="subtitle">
          Optional banner image triggers on announcement hover.
        </p>
      </el-form-item>
      <el-form-item label="Mobile alternative" class="image-area mobile-image">
        <tfr-upload :picture-list="mobileBannerPicture" :is-only-one="true" />
        <p class="subtitle">Alternative mobile image triggers on press.</p>
      </el-form-item>
      <div class="form-item-inline">
        <el-form-item label="Promo code">
          <tfr-select v-model="promoCode" width="100%">
            <el-option
              v-for="promo in promoList"
              :key="promo.promotion_code_id"
              :label="promo.name"
              :value="promo.promotion_code_id"
            />
          </tfr-select>
        </el-form-item>
        <el-form-item label="Legal">
          <tfr-select v-model="legal" width="100%">
            <el-option
              v-for="legal in legalList"
              :key="legal.code"
              :label="legal.name"
              :value="legal.code"
            />
          </tfr-select>
        </el-form-item>
      </div>
      <stick-flow title="TERMS & CONDITIONS" :top="offsetTop" />
      <el-form-item label="Effective region">
        <div class="region-list">
          <tfr-tag
            v-for="(region, index) in effectiveRegionList"
            :key="region.region_code"
            @close="removeRegionHandle(index)"
            >{{ region.region_name }}</tfr-tag
          >
          <span class="pointer" @click="editRegionHandle">Edit</span>
        </div>
      </el-form-item>
      <el-form-item label="Link">
        <tfr-radio-group v-model="linkType">
          <el-radio label="none" @click.prevent="setLinkNoneHandle"
            >None</el-radio
          >
          <el-radio label="setLink" @click.prevent="setLinkHandle"
            >Set Link</el-radio
          >
        </tfr-radio-group>
      </el-form-item>
      <div v-if="linkType === 'setLink'" class="link-content">
        <div class="title">
          {{ link.external?.title }}
          <svg-icon icon-class="tablet" />
        </div>
        <div class="link">
          {{ link.external?.link }}
        </div>
      </div>
      <el-form-item label="Target" class="target-item">
        <tfr-radio-group v-model="targetType">
          <el-radio label="all" @click="setTargetAllHandle"
            >All Customers</el-radio
          >
          <el-radio label="setTarget" @click="setTargetHandle"
            >Set Target
            <tfr-tag
              v-if="targetType === 'setTarget' && targetObject.total"
              @close="removeCustomers"
              >{{ targetObject.total }} Customers
            </tfr-tag>
          </el-radio>
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
          ref="datePickerRangeRef"
          :start-date="startTime"
          :end-date="endTime"
          :zt="timeZone"
        />
      </el-form-item>
    </el-form>
    <div
      class="btn-group"
      :style="{ left: device === 'mobile' ? 0 : menuWidth }"
    >
      <template v-if="target === 'add'">
        <tfr-button type="gray">DELETE</tfr-button>
        <tfr-button type="primary" :loading="saveLoading" @click="saveHandle"
          >SAVE</tfr-button
        >
      </template>
    </div>
    <effective-region-dialog
      v-if="effectiveRegionDialog"
      :visible="effectiveRegionDialog"
      :width="dialogWidth"
      :region-list="effectiveRegionList"
      @update:visible="effectiveRegionDialog = $event"
      @cancelHandle="effectiveRegionDialogCancelHandle"
      @confirmHandle="effectiveRegionDialogConfirmHandle"
    />
    <HasSidebarWin
      v-model="linkVisibleDialog"
      title="Edit Link"
      :side-arr="sideArr"
    />
    <target-dialog
      v-if="targetVisible"
      :visible="targetVisible"
      type="announcement"
      :width="dialogWidth"
      :params="targetObject"
      @update:visible="targetVisible = $event"
      @cancelHandle="targetDialogCancelHandle"
      @confirmHandle="targetDialogConfirmHandle"
    />
  </div>
</template>

<script setup lang="ts">
import StickFlow from '@/components/StickyFlow/index.vue'
import TfrSwitch from '@/components/TfrSwitch/index.vue'
import TfrInput from '@/components/TfrInput/index.vue'
import TfrUpload from '@/components/TfrUpload/index.vue'
import TfrSelect from '@/components/TfrSelect/index.vue'
import TfrTag from '@/components/TfrTag/index.vue'
import TfrRadioGroup from '@/components/TfrRadioGroup/index.vue'
import HasSidebarWin from '@/components/TfrDialog/HasSidebarWin.vue'
import EffectiveRegionDialog from '@/views/marketing/components/EffectiveRegionDialog/index.vue'
import sideArr from '@/views/homePage/pageDialog/editLinkPage/setModules'
import TargetDialog from '@/views/marketing/components/TargetDialog/index.vue'
import DatePickerRange from '@/components/DatePickerRange/index.vue'
import { getPromotionList, saveAnnouncement } from '@/api/marketing'
import { reactive, ref, onMounted, getCurrentInstance } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { appStore } from '@/store/modules/app'
import { menuStore } from '@/store/modules/menu'
import type {
  TargetParams,
  PromotionItem,
  RegionItem,
  AnnouncementData
} from '../types'

// interface PromotionItem {
//   name: string
//   promo_code_id: number
//   [key: string]: any
// }
//
// interface RegionItem {
//   checked: boolean
//   currency_code?: string
//   flag?: string
//   phone_code?: string
//   region_code: string
//   region_name: string
// }

interface Link {
  type: string
  external?: {
    title: string
    link: string
    open_new: boolean
  }
  internal?: {
    title: string
    page: string
    open_new: boolean
  }
  code?: {
    title: string
    code: string
    open_new: string
  }
  email?: {
    send_to: string
    subject: string
    body: string
    cc: string
    bcc: string
  }
  download_media?: {
    type: string
    path: string
  }
}

const $tfrMessage: any =
  getCurrentInstance()?.appContext?.config?.globalProperties?.$tfrMessage
const announcementFormRef = ref<FormInstance>()
const datePickerRangeRef = ref()
const route = useRoute()
const { target } = route.params
const { device } = storeToRefs(appStore())
const offsetTop = ref(device.value === 'mobile' ? 140 : 60)
const dialogWidth = ref(device.value === 'mobile' ? '100%' : '728px')
const { menuWidth } = storeToRefs(menuStore())
const announcementForm = reactive({
  disabled: false,
  name: '',
  description: '',
  message: ''
})
const announcementRules = reactive<FormRules>({
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
  ],
  message: [
    {
      required: true,
      message: 'Message is required',
      trigger: 'blur'
    }
  ]
})
const bannerPicture = ref<any[]>([])
const mobileBannerPicture = ref<any[]>([])
let promoList = ref<PromotionItem[]>()
const promoCode = ref('')
const legalList = ref([
  {
    name: 'Privacy policy',
    code: '1'
  },
  {
    name: 'Terms & Conditions',
    code: '2'
  },
  {
    name: 'Return & Refund And Policy',
    code: '3'
  },
  {
    name: 'Cookie Policy',
    code: '4'
  }
])
const legal = ref('')
const effectiveRegionList = ref([
  { region_name: 'All Region', region_code: 'all', checked: true }
])
const effectiveRegionDialog = ref(false)
const linkType = ref('none')
const linkVisibleDialog = ref(false)
const targetVisible = ref(false)
const targetType = ref('all')
const targetObject = ref<TargetParams>({
  target_type: '',
  target_condition: {
    user_sources: [''],
    keyword: ''
  }
})
const expirationType = ref<string>('none')
const startTime = ref() //2022-06-08T14:21:35+08:00
const endTime = ref() //2022-06-18T14:21:35+08:00
const timeZone = ref() //America/Denver
const link = ref<Link>({
  type: '',
  external: {
    title: 'The Future Rocks',
    link: 'www.thefutureRocks.com/path',
    open_new: false
  }
})
const saveLoading = ref(false)

onMounted(async () => {
  const { list }: any = await getPromotionList()
  promoList.value = list
})

const removeRegionHandle = (index: number) => {
  effectiveRegionList.value.splice(index, 1)
  if (effectiveRegionList.value.length === 0) {
    effectiveRegionList.value.push({
      region_code: 'all',
      region_name: 'All Region',
      checked: true
    })
  }
}
const editRegionHandle = () => {
  effectiveRegionDialog.value = true
}
const effectiveRegionDialogCancelHandle = () => {
  effectiveRegionDialog.value = false
}
const effectiveRegionDialogConfirmHandle = (regionList: RegionItem[]) => {
  const regionChecked: RegionItem[] = regionList.filter(
    (item: RegionItem) => item.checked
  )
  effectiveRegionList.value = regionChecked
  effectiveRegionDialog.value = false
}

const setLinkNoneHandle = () => {
  linkType.value = 'none'
}

const setLinkHandle = () => {
  linkType.value = 'setLink'
  linkVisibleDialog.value = true
}

const setTargetAllHandle = () => {
  targetType.value = 'all'
}

const setTargetHandle = () => {
  targetType.value = 'setTarget'
  targetVisible.value = true
}

const targetDialogCancelHandle = () => {
  targetVisible.value = false
}

const targetDialogConfirmHandle = (backParams: TargetParams) => {
  targetVisible.value = false
  targetObject.value = backParams
}

const removeCustomers = () => {
  targetObject.value = {
    target_type: '',
    target_condition: {
      user_sources: [''],
      keyword: ''
    }
  }
}
const saveHandle = async () => {
  const valid = await announcementFormRef.value?.validate()
  if (valid) {
    const data: AnnouncementData = {
      name: announcementForm.name,
      description: announcementForm.description,
      message: announcementForm.message,
      promotion_code_id: promoCode.value,
      legal: legal.value,
      region_range: 'all',
      target_type: 'all',
      expire_type: 'none'
    }
    // banner
    if (bannerPicture.value.length > 0) {
      const media = {
        path: bannerPicture.value[0]?.link,
        media_type: bannerPicture.value[0]?.content_type
      }
      data.media = media
    }
    // mobile banner
    if (mobileBannerPicture.value.length > 0) {
      const media = {
        path: bannerPicture.value[0]?.link,
        media_type: bannerPicture.value[0]?.content_type
      }
      data.mobile_media = media
    }
    // region
    const firstRegionCode = effectiveRegionList.value[0].region_code
    if (firstRegionCode === 'all') {
      data.region_range = 'all'
    } else {
      data.region_range = 'multiple'
      data.regions = []
      effectiveRegionList.value.forEach(item => {
        data.regions?.push(item.region_code)
      })
    }
    // link
    if (linkType.value === 'setLink') {
      data.link = link.value
    }
    // target
    if (targetType.value === 'setTarget') {
      if (!targetObject.value.target_type) {
        $tfrMessage({
          type: 'error',
          message: 'Please select customer'
        })
        return
      }
      data.target_type = targetObject.value.target_type
      data.target_condition = targetObject.value.target_condition
      if (targetObject.value.target_type === 'customers') {
        data.target_customers = targetObject.value.target_customers
      }
    }
    // expiration
    if (expirationType.value === 'setExpiration') {
      try {
        const getDateParams: any =
          await datePickerRangeRef.value.commitDateParams()
        if (getDateParams) {
          data.expire_type = 'date'
          data.start_time = getDateParams.startTime
          data.end_time = getDateParams.endTime
          data.time_zone = getDateParams.timeZone
        }
      } catch (e) {
        console.log(e)
      }
    }
    //saveLoading.value = true
    await saveAnnouncement(data)
    console.log(data)
  }
  // announcementFormRef.value.validate(async (valid: boolean) => {
  //
  // })
}
</script>

<style lang="scss" scoped>
.announcement-page {
  .preview-here {
    height: 50px;
    background-color: $theme;
    display: flex;
    justify-content: center;
    span {
      height: 100%;
      line-height: 50px;
      text-align: center;
      padding: 0 128px;
      color: rgb(248, 248, 248);
      opacity: 0.5;
      border-right: 1px dashed rgb(248, 248, 248);
      border-left: 1px dashed rgb(248, 248, 248);
    }
  }
  .preview-here-edit {
    font-size: 0;
    &:hover {
      .image {
        padding-top: 40%;
      }
    }
    .image {
      width: 100%;
      height: 0;
      position: relative;
      transition: all 0.2s;
      img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .preview-here {
      z-index: 1;
    }
  }
  .announcement-form {
    padding: 20px;
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
      &.image-area {
        ::v-deep(.el-form-item__content) {
          line-height: unset;
        }
      }
      &.mobile-image {
        .upload-field {
          width: 375px;
        }
        ::v-deep(.el-form-item__content) {
          flex-direction: column;
          .subtitle {
            width: 100%;
          }
        }
      }
    }
    .form-item-inline {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }
  .tips {
    padding: 10px;
    background-color: $bg;
    display: flex;
    align-items: center;
    font-family: 'Brown Light', serif;
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }
  .region-list {
    display: flex;
    flex-wrap: wrap;
    .tfr-tag {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .target-item {
    ::v-deep(.tfr-tag) {
      margin-left: 10px;
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
    }
  }
  .link-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: $bg;
    margin-bottom: 20px;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      svg {
        font-size: 20px;
      }
    }
    .link {
      font-family: 'Brown Light', serif;
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
