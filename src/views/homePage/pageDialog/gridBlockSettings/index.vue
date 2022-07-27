<template>
  <div>
    <TfrDialog v-model="showWin" width="730px" class="folder" @before-close="closeWin">
      <div class="container">
        <div class="title">GRID BLOCK SETTINGS</div>
        <div class="formbox tfr-form">
          <el-form
            ref="ruleFormNode"
            :model="ruleForm"
            :rules="rules"
            label-width="80px"
            label-position="top"
            class="tfr-form-required"
          >
            <RowSetItem :has-padding="false" margin="0" title="Hide block">
              <el-switch
                v-model="ruleForm.hide"
                active-color="#1B2B27"
                inactive-color="#F8F8F8"
                @change="switchChange"
              />
            </RowSetItem>
            <p class="mkdu">
              Toggle to disable block on this page.
            </p>
            <el-form-item label="Width">
              <WidthOption ref="widthOption" />
            </el-form-item>
            <el-form-item label="Aspect Ratio">
              <AspectRatio ref="aspectRatio" />
            </el-form-item>
            <el-form-item label="Title" prop="title">
              <div class="optionbox">
                <tfr-input v-model="ruleForm.title" width="100%" />
              </div>
            </el-form-item>
            <el-form-item label="Action" prop="action">
              <tfr-input v-model="ruleForm.action" width="100%" />
            </el-form-item>
            <div class="choosepage">
              <div class="choosetop">
                <span>Page</span>
                <span>CHOOSE</span>
              </div>
              <EdgeInput v-model="ruleForm.url_title" :has-clear="false" placeholder="Enter URL..." />
              <div class="swbox">
                <RowSetItem :has-padding="false" margin="0" title="Open in new window">
                  <el-switch
                    v-model="ruleForm.open"
                    active-color="#1B2B27"
                    inactive-color="#F8F8F8"
                    @change="switchChange"
                  />
                </RowSetItem>
              </div>
            </div>
            <el-form-item label="Feature" prop="pageTitle">
              <div>
                <SkuInput v-for="(item, index) in skuArr" :key="index" v-model="item.code" />
              </div>
            </el-form-item>
            <el-form-item label="Background" prop="pageTitle">
              <TfrUpload :is-only-one="true" :picture-list="ruleForm.background" />
            </el-form-item>
            <el-form-item label="Mobile Alternative" prop="pageTitle">
              <div class="mbupload">
                <TfrUpload :is-only-one="true" :picture-list="ruleForm.mobileBackground" />
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div slot="footer">
        <div class="footerbox">
          <div>
            <tfr-button class="btn" @click="closeWin">CANCEL</tfr-button>
          </div>
          <div>
            <tfr-button
              class="btn black"
              :loading="rightBtnLoading"
              @click="clickRightBtn"
              >SAVE</tfr-button>
          </div>
        </div>
      </div>
    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import generalwin from '@/views/homePage/generalwin'
import RowSetItem from '@/components/RowSetItem/index.vue'
import WidthOption from '@/views/homePage/components/RadioInput/WidthOption.vue'
import AspectRatio from '@/views/homePage/components/RadioInput/AspectRatio.vue'
import EdgeInput from '@/components/TfrInput/EdgeInput.vue'
import SkuInput from '@/views/homePage/components/FormCommon/SkuInput.vue'
import TfrUpload from '@/components/TfrUpload/index.vue'
import store from '@/store'
import { ARTICLE_REGULAR } from '../../type'
const { showWin, closeWin } = generalwin()

const ruleForm = reactive({
  title: '',
  action: '',
  url_title: '',
  seoDes: '',
  hide: false,
  open: false,
  background: [] as any,
  mobileBackground: [] as any,
})
const skuArr = reactive([
  {
    code: ''
  }, {
    code: ''
  }, {
    code: ''
  }
])
const rules = {
  title: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  action: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
}
const widthOption = ref<any>(null)
const aspectRatio = ref<any>(null)
const rightBtnLoading = ref(false)
const clickRightBtn = () => {
  const background = ruleForm.background[0] || {}
  const mobileBackground = ruleForm.mobileBackground[0] || {}
  const model = {
    componentName: 'brand',
    style: {}
  }
  const widthValue = widthOption.value.form
  const full_width = widthOption.value.type
  const product_ids = skuArr.map(v => (v.code)).filter(v => v)
  const obj = {
    hide: ruleForm.hide,
    title: ruleForm.title,
    url_title: ruleForm.url_title,
    open: ruleForm.open,
    action: ruleForm.action,
    product_ids,
    full_width,
    background: {
      path: background.link,
      media_type: background.content_type
    },
    mobile_background: {
      path: mobileBackground.link,
      media_type: mobileBackground.content_type
    },
  }
  if (full_width === ARTICLE_REGULAR.PADDING) {
    Object.assign(obj, {
      padding_desktop_px: widthValue.pcWidth,
      padding_desktop_max: widthValue.pcMax,
      padding_mobile_px: widthValue.mbWidth,
      padding_mobile_max: widthValue.mbMax
    })
  }
  model.style = obj
  store.setBuilder.pageState.setChildModle(model, 0, 0)
}
const switchChange = (e: boolean) => {
  // ruleForm.hide = e
}
</script>

<style lang="scss" scoped>
.folder {
  .container {
    color: black;
    .title {
      padding: 20px 0;
    }
    .formbox {
      padding: 30px 20px;
      height: 580px;
      overflow: auto;
    }
    .mkdu {
      font-family: 'Brown Light', serif;
      font-weight: 300;
      margin-bottom: 24px;
    }
    .optionbox {
      position: relative;
      width: 100%;
      .ptbox {
        position: absolute;
        right: 0;
        top: -34px;
        color: #c7caca;
      }
    }
    .choosepage {
      width: 340px;
      margin: 0 auto;
      .choosetop {
        display: flex;
        justify-content: space-between;
        padding: 16px 0;
      }
      .swbox {
        margin-top: 20px;
      }
    }
    .mbupload {
      width: 249px;
      margin: auto;
    }
  }
  .footerbox {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    line-height: 50px;
    .btn {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: #f8f8f8;
      color: black;
      cursor: pointer;
    }
    .black {
      background-color: $theme;
      color: #ffffff;
    }
  }
}
</style>
