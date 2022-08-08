<template>
  <div>
    <TfrDialog v-model="showWin" width="730px" class="folder" @before-close="closeWin">
      <div class="container">
        <div class="title">MEDIA SETTINGS</div>
        <div class="formbox tfr-form">
          <el-form
            ref="ruleFormNode"
            :model="ruleForm"
            :rules="rules"
            label-width="80px"
            label-position="top"
            class="tfr-form-required"
          >
            <!-- <RowSetItem :has-padding="false" margin="0" title="Hide block">
              <el-switch
                v-model="ruleForm.hide"
                active-color="#1B2B27"
                inactive-color="#F8F8F8"
                @change="switchChange"
              />
            </RowSetItem>
            <p class="mkdu">
              Toggle to disable block on this page.
            </p> -->
            <el-form-item label="Width">
              <WidthOption ref="widthOption" :value="widthOptionVal" />
            </el-form-item>
            <el-form-item label="Background">
              <TfrUpload :is-only-one="true" :picture-list="ruleForm.background" />
            </el-form-item>
            <el-form-item label="Product Link" prop="link">
              <EdgeInput v-model="ruleForm.link" :other-btn="true" :has-clear="false" placeholder="Enter TFRID..." />
            </el-form-item>
            <!-- <el-form-item label="Aspect Ratio">
              <AspectRatio ref="aspectRatio" />
            </el-form-item> -->
            <el-form-item label="Photo Credit" prop="credit">
              <div class="optionbox">
                <tfr-input v-model="ruleForm.credit" placeholder="LOREM IPSUM" width="100%" />
              </div>
            </el-form-item>
            <div class="rowsetitem">
              <RowSetItem :has-padding="false" margin="0" title="Caption">
                <el-switch
                  v-model="ruleForm.caption"
                  active-color="#1B2B27"
                  inactive-color="#F8F8F8"
                />
              </RowSetItem>
            </div>
            <el-form-item label="Title" prop="title">
              <div class="optionbox">
                <tfr-input v-model="ruleForm.title" width="100%" />
              </div>
            </el-form-item>
            <el-form-item label="Body" prop="body">
              <TfrEditor
                v-model="ruleForm.body"
                :placeholder="defaultDoc"
                height="140px"
                width="100%"
              />
            </el-form-item>
            <el-form-item label="Action" prop="action">
              <tfr-input v-model="ruleForm.action" width="100%" />
            </el-form-item>
            <el-form-item label="Page" prop="page_url">
              <div class="pageaction">
                <div class="btn">CHOOSE</div>
                <EdgeInput v-model="ruleForm.page_url" :has-clear="false" placeholder="Enter URL..." />
              </div>
            </el-form-item>
            <RowSetItem :has-padding="false" margin="0" title="Open in new window">
              <el-switch
                v-model="ruleForm.hide"
                active-color="#1B2B27"
                inactive-color="#F8F8F8"
              />
            </RowSetItem>
            <!-- <el-form-item label="Mobile Alternative" prop="pageTitle">
              <div class="mbupload">
                <TfrUpload :is-only-one="true" :picture-list="ruleForm.mobileBackground" />
              </div>
            </el-form-item> -->
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
import { ref, reactive, onMounted } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import generalwin from '@/views/homePage/generalwin'
import RowSetItem from '@/components/RowSetItem/index.vue'
import WidthOption from '@/views/homePage/components/RadioInput/WidthOption.vue'
// import AspectRatio from '@/views/homePage/components/RadioInput/AspectRatio.vue'
import EdgeInput from '@/components/TfrInput/EdgeInput.vue'
import TfrEditor from '@/components/TfrEditor/index.vue'
import TfrUpload from '@/components/TfrUpload/index.vue'
import store from '@/store'
import { ARTICLE_REGULAR } from '../../type'
import { useRoute } from 'vue-router'

const { showWin, closeWin } = generalwin()
const defaultDoc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const ruleForm = reactive({
  title: '',
  body: '',
  action: '',
  link: '',
  credit: '',
  page_url: '',
  full_width: '',
  caption: false,
  hide: false,
  background: [] as any,
})
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
  body: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  page_url: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
}
const route = useRoute()
const { site, childSite } = route.query
const widthOption = ref<any>(null)
// const aspectRatio = ref<any>(null)
const rightBtnLoading = ref(false)
const clickRightBtn = () => {
  const background = ruleForm.background[0] || {}
  const model = {
    componentName: 'media',
    style: {}
  }
  const widthValue = widthOption.value.form
  const full_width = widthOption.value.type
  const obj = {
    hide: ruleForm.hide,
    caption: ruleForm.caption,
    title: ruleForm.title,
    action: ruleForm.action,
    link: ruleForm.link,
    credit: ruleForm.credit,
    page_url: ruleForm.page_url,
    full_width,
    background: {
      path: background.link,
      media_type: background.content_type
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
  store.setBuilder.pageState.setChildModle(model, Number(site), Number(childSite))
  console.log(obj)
  // closeWin()
}
const widthOptionVal = ref()
const getInfoData = () => {
  const properties = store.setBuilder.pageState.basic.schema.properties || []
  const list = properties[Number(site) || 0] || {}
  const childList = list.properties || []
  const info:any =  childList[Number(childSite) || 0] || {}
  if (info) {
    ruleForm.title = info.title
    ruleForm.hide = info.hide
    ruleForm.caption = info.caption
    ruleForm.action = info.action
    ruleForm.link = info.link
    ruleForm.credit = info.credit
    ruleForm.page_url = info.page_url
    ruleForm.full_width = info.full_width
    widthOptionVal.value = {
      pcWidth: info.padding_desktop_px,
      pcMax: info.padding_desktop_max,
      mbWidth: info.padding_mobile_px,
      mbMax: info.padding_mobile_max,
      full_width: info.full_width
        ? ARTICLE_REGULAR.FULL_WIDTH
        : ARTICLE_REGULAR.PADDING
    }
  }
  if (info.background) {
    ruleForm.background = [{
      link: info.background.path,
      content_type: info.background.media_type
    }]
  }
}
onMounted(() => {
  getInfoData()
})
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
  .rowsetitem {
    margin: 20px 0;
  }
  .pageaction {
    position: relative;
    width: 100%;
    .btn {
      position: absolute;
      top: -33px;
      right: 0;
      cursor: pointer;
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
