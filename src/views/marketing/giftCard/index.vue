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
      <sticky-flow title="IMAGES" />
      <div class="image-area">
        <tfr-upload :pictureList="picture" />
      </div>
      <sticky-flow title="GIFT CARD">
        <template #right>
          <svg-icon icon-class="add_black" @click="addGiftCardHandle" />
        </template>
      </sticky-flow>
      <ul class="gift-card-list">
        <li class="header">
          <span class="image">IMAGE</span><span class="tfr-id">TFRID</span
          ><span class="value">VALUE</span>
          <span class="del"></span>
        </li>
        <li v-for="(gift, index) in giftCardList" :key="'giftCard' + index">
          <span class="image">
            <img v-if="gift.link" :src="gift.link" />
            <svg-icon
              v-else
              icon-class="image"
              @click="openImageBoxHandle(index)"
            />
          </span>
          <span class="tfr-id"
            ><tfr-input v-model="gift.tfrId"></tfr-input
          ></span>
          <span class="value"
            ><tfr-input v-model="gift.value"></tfr-input
          ></span>
          <span class="del"
            ><svg-icon
              icon-class="delete_red"
              @click="delGiftCardHandle(index)"
            ></svg-icon
          ></span>
        </li>
      </ul>
      <sticky-flow title="SE0 PREVIEW" />
      <div class="seo-box">
        <div class="seo-preview">
          <h3>{{ giftCardForm.name }}<svg-icon icon-class="dollar" /></h3>
          <div class="title">{{ seoTitle }}</div>
          <div v-if="seoDescription" class="des" v-html="seoDescription"></div>
        </div>
        <el-form-item label="SEO Title">
          <tfr-input
            v-model="seoTitle"
            placeholder="SEO Title"
            maxlength="60"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="SEO Description">
          <editor
            :editorValue="seoDescription"
            @update:editorValue="seoDescription = $event"
          />
        </el-form-item>
      </div>
      <div class="hide-research-result">
        <div class="header-title">
          <h3>Hide Research Result</h3>
          <span class="line"></span>
          <tfr-switch v-model="hideResearchResult" />
        </div>
        <div class="tips">
          Disabled pages can't be accessed by site visitor...
        </div>
      </div>
      <stick-flow title="SOCIAL IMAGE" />
      <div class="social-image-title-link">
        <div class="image">
          <img :src="socialImage" />
        </div>
        <div class="title">
          {{ giftCardForm.name }}-The Future Rocks
          <svg-icon icon-class="dollar" />
        </div>
        <div class="link">
          https://thefuturerocks.com/{{ giftCardToSeparator }}
        </div>
      </div>
      <el-form-item label="Alternate Image" class="alternate-image">
        <tfr-upload :pictureList="alternateImage" />
      </el-form-item>
      <el-form-item label="Alt Text" class="alternate-text">
        <tfr-input
          type="textarea"
          maxlength="100"
          v-model="alternateText"
          resize="none"
          show-word-limit
          placeholder="Lorem ipsum dolor site amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
      </el-form-item>
    </el-form>
    <div
      class="btn-group"
      :style="{ left: device === 'mobile' ? 0 : menuWidth }"
    >
      <template v-if="target === 'add'">
        <tfr-button type="gray">DELETE</tfr-button>
        <tfr-button type="primary" @click="saveHandle">SAVE </tfr-button>
      </template>
    </div>
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
    <image-box-dialog
      :visible="imageBoxDialog"
      @update:visible="imageBoxDialog = $event"
      :width="dialogWidth"
      :pictureList="picture"
      :headerLess="false"
      @cancelHandle="imageBoxDialogCancelHandle"
      @confirmHandle="imageBoxDialogConfirmHandle"
    />
  </div>
</template>

<script setup lang="ts">
import StickFlow from '@/components/StickyFlow/index.vue'
import TfrSwitch from '@/components/TfrSwitch/index.vue'
import TfrInput from '@/components/TfrInput/index.vue'
import TfrTag from '@/components/TfrTag/index.vue'
import TfrRadioGroup from '@/components/TfrRadioGroup/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import EffectiveRegionDialog from '@/views/marketing/components/EffectiveRegionDialog/index.vue'
import AppliesLimitDialog from '@/views/marketing/components/AppliesLimitDialog/index.vue'
import ImageBoxDialog from '@/views/marketing/components/ImageBoxDialog/index.vue'
import DatePickerRange from '@/components/DatePickerRange/index.vue'
import TfrUpload from '@/components/TfrUpload/index.vue'
import Editor from '@/components/TfrEditor/index.vue'
import { reactive, ref, nextTick, computed, watch, inject } from 'vue'
import { useRoute } from 'vue-router'
import { FormInstance, FormRules } from 'element-plus'
import { storeToRefs } from 'pinia'
import { appStore } from '@/store/modules/app'
import { menuStore } from '@/store/modules/menu'
const { menuWidth } = storeToRefs(menuStore())
const datePickerRangeRef = ref()
const route = useRoute()
const reload: any = inject('reload')
const { target } = route.params

watch(
  () => route.params,
  params => {
    console.log(params)
    reload()
  }
)

interface TagItem {
  name: string
}

interface Picture {
  [propName: string]: any
}

interface GiftCardItem {
  link: string
  tfrId: string
  value: string
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
const imageBoxDialog = ref(<boolean>false)
const creatNewTag = ref(<string>'')
const tagList = reactive([{ name: 'Tag' }])
const applyType = ref('all')
const expirationType = ref('none')
const picture = reactive([])
const giftCardList: Array<GiftCardItem> = reactive([])
const giftCardIndex = ref<number>(0)
const seoTitle = ref<string>('')
const seoDescription = ref<string>(
  '<p><strong>dddk kskdlskdsldksldkkdls jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdkskdksdkkdslkd</strong>l</p><p>kdkkdkdk</p><p>kdklsdlsdklsdkl</p><p>1.css选择器有哪些，和权重级别，es6常用到的，flex居中怎么实现</p><p>2.冒泡机制，冒泡和捕获的区别</p><p>3.静态资源性能优化可以做哪些存储（不是数据存储，是静态资源存储，比如说JS，css第一次加载缓存资源，提高性能）</p><p>4.后台接口json数据层级多数据量大的时候前端是怎么获取的，有没有提高性能缩小代码量的方法</p><p>5.数据获取性能优化方面能做哪些优化，webpack打包流程&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; webpack优化</p><p>6自己项目可以突出自己优势的点和技术，项目中遇到最难解决的是什么，解决方式是什么</p>'
)
const socialImage = ref<string>(
  'https://img-dev.tfrcdn.com/test/product/brand/1016/629dc7293d2b140008054f76/caeseed7l1hqd56qhlbg.jpeg'
)
const hideResearchResult = ref<boolean>(false)

const alternateImage = reactive([])
const alternateText = ref<string>('')

const giftCardToSeparator = computed(() => {
  const tempArray: Array<string> = giftCardForm.name.toLowerCase().split(' ')
  return tempArray.join('-')
})

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

const addGiftCardHandle = () => {
  const item: GiftCardItem = {
    link: '',
    tfrId: '',
    value: ''
  }
  giftCardList.push(item)
}

const openImageBoxHandle = (index: number) => {
  imageBoxDialog.value = true
  giftCardIndex.value = index
}

const delGiftCardHandle = (index: number) => {
  giftCardList.splice(index, 1)
}

const imageBoxDialogCancelHandle = () => {
  imageBoxDialog.value = false
  cancelPictureSelectedHandle()
}
const imageBoxDialogConfirmHandle = (index: number) => {
  /**
   * 关闭弹窗前的一些逻辑
   */
  imageBoxDialog.value = false
  cancelPictureSelectedHandle()
  const pictureItem: any = picture[index]
  console.log(index, pictureItem, giftCardIndex.value)
  giftCardList[giftCardIndex.value].link = pictureItem.link
}
// 取消图片弹窗中选中的属性
const cancelPictureSelectedHandle = () => {
  picture.forEach((item: any) => {
    item.isSelect = false
  })
}
// 底部保存
const saveHandle = () => {}
</script>

<style lang="scss" scoped>
.gift-card-page {
  padding: 20px;
  padding-bottom: 90px;
  .gift-card-form {
    .sticky-section {
      margin-bottom: 20px;
      .svg-icon {
        font-size: 20px;
        cursor: pointer;
      }
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
      &.alternate-image {
        ::v-deep(.el-form-item__content) {
          line-height: unset;
        }
      }
      .el-textarea,
      .el-input {
        ::v-deep(.el-input__count) {
          position: absolute;
          height: auto;
          top: -25px;
          bottom: auto;
          right: 0;
        }
      }
    }
    .alternate-text {
      ::v-deep(.el-textarea__inner) {
        height: 100px;
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
  .image-area {
    margin-bottom: 18px;
  }
  .gift-card-list {
    margin-bottom: 18px;
    li {
      display: flex;
      align-items: center;
      .image {
        width: 70px;
        text-align: center;
      }
      .tfr-id {
        flex: 1;
      }
      .value {
        width: 90px;
      }
      .del {
        width: 40px;
      }
      &.header {
        padding: 10px;
        span {
          color: $themeHalf;
          & + span {
            margin-left: 20px;
          }
        }
        .del {
          margin-left: 0;
        }
      }
    }
    & li:not(:first-child) {
      height: 61px;
      padding: 10px;
      span + span {
        margin-left: 10px;
      }
      &:hover {
        background-color: $bg;
        border-radius: 8px;
        .del {
          .svg-icon {
            display: inline-block;
            cursor: pointer;
          }
        }
      }
      .tfr-input {
        ::v-deep(.el-input__wrapper) {
          height: 41px;
          line-height: 41px;
          box-shadow: unset;
          background-color: transparent;
          &.is-focus {
            box-shadow: $theme 0 0 0 1px inset;
          }
        }
      }
      .image {
        text-align: center;
        .svg-icon {
          font-size: 20px;
          cursor: pointer;
        }
        img {
          width: 100%;
          height: 41px;
          object-fit: cover;
        }
      }
      .del {
        padding: 0 10px;
        .svg-icon {
          font-size: 20px;
          display: none;
        }
      }
    }
  }
  .seo-box {
    .seo-preview {
      background-color: $bg;
      padding: 20px;
      margin-bottom: 20px;
      h3 {
        font-size: 14px;
        font-weight: normal;
        display: flex;
        justify-content: space-between;
        .svg-icon {
          font-size: 20px;
        }
      }
      .title {
        font-family: 'Brown Light', serif;
        padding-bottom: 10px;
      }
      .des {
        //padding-top: 10px;
        border-top: 1px solid rgba(27, 43, 39, 0.1);
        font-family: 'Brown Light', serif;
      }
    }
  }
  .hide-research-result {
    margin-bottom: 20px;
    .header-title {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        text-align: left;
        color: rgb(27, 43, 39);
        font-weight: 400;
        font-size: 14px;
      }
      .line {
        flex: 1;
        margin: 0 30px;
        height: 1px;
        background-color: $themeQuarter;
      }
    }
    .tips {
      font-family: 'Brown Light', serif;
    }
  }
  .social-image-title-link {
    padding: 20px;
    background-color: $bg;
    margin-bottom: 20px;
    .image {
      width: 100%;
      height: 0;
      padding-top: 100%;
      position: relative;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    }
    .title {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .svg-icon {
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
