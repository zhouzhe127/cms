<template>
  <TfrDialog v-model="showWin" width="730px" class="info-floder">
    <div class="container">
      <div class="title">INFO BLOCK SETTINGS</div>
      <el-scrollbar>
        <div class="formbox tfr-form">
          <el-form
            ref="ruleFormNode"
            :model="ruleForm"
            :rules="rules"
            label-width="80px"
            label-position="top"
            class="tfr-form-required"
          >
            <el-form-item label="Width">
              <WidthOption ref="widthOption" :value="widthOptionVal" />
            </el-form-item>
            <InfoBlockItem
              :title="ruleForm.pageTitle"
              :description="ruleForm.caption"
              :action="ruleForm.action"
              :icon="ruleForm.icon[0] && ruleForm.icon[0].link"
            />
            <el-form-item label="Icon" prop="icon">
              <TfrUpload :is-only-one="true" :picture-list="ruleForm.icon" />
            </el-form-item>
            <el-form-item label="Title" prop="pageTitle">
              <div class="optionbox">
                <tfr-input
                  placeholder="LOREM IPSUM"
                  v-model="ruleForm.pageTitle"
                  width="100%"
                />
              </div>
            </el-form-item>
            <el-form-item label="Caption" prop="caption">
              <TfrEditor v-model="ruleForm.caption" />
            </el-form-item>
            <el-form-item label="Action" prop="action">
              <div class="optionbox">
                <tfr-input
                  placeholder="LOREM IPSUM"
                  v-model="ruleForm.action"
                  width="100%"
                />
              </div>
            </el-form-item>
            <div class="choosepage">
              <div class="choosetop">
                <span>Page</span>
                <span>CHOOSE</span>
              </div>
              <EdgeInput v-model="ruleForm.page_url" :has-clear="false" placeholder="Enter URL..." />
              <div class="swbox">
                <RowSetItem
                  :has-padding="false"
                  margin="0"
                  title="Open in new window"
                >
                  <el-switch
                    v-model="ruleForm.hide"
                    active-color="#1B2B27"
                    inactive-color="#F8F8F8"
                    @change="switchChange"
                  />
                </RowSetItem>
              </div>
            </div>
          </el-form>
        </div>
      </el-scrollbar>
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
            >SAVE</tfr-button
          >
        </div>
      </div>
    </div>
  </TfrDialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import WidthOption from '@/views/homePage/components/RadioInput/WidthOption.vue'
import InfoBlockItem from '@/views/homePage/components/InfoBlock/InfoBlockItem.vue'
import generalwin from '../../generalwin'
import TfrUpload from '@/components/TfrUpload/index.vue'
import TfrEditor from '@/components/TfrEditor/index.vue'
import { FormInstance, FormRules } from 'element-plus'
import { ARTICLE_REGULAR } from '../../type'
import { useRoute } from 'vue-router'
import store from '@/store'
const { showWin, closeWin } = generalwin()
const ruleForm = reactive({
  pageTitle: '',
  seoDes: '',
  hide: false,
  caption: '',
  pageAction: '',
  action: '',
  page_url: '',
  full_width: '',
  icon: [] as any
})
const rules = {
  pageTitle: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  caption: {
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
const rightBtnLoading = ref(false)
const widthOption = ref<any>(null)
const ruleFormNode = ref<FormInstance>()
const route = useRoute()
const { site, childSite } = route.query
const clickRightBtn = async () => {
  const valid = await ruleFormNode.value?.validate()
  if (valid) {
    const model = {
      componentName: 'media',
      style: {},
      info: {}
    }
    const icon = ruleForm.icon[0] || {}
    const widthValue = widthOption.value.form
    const full_width = widthOption.value.type
    const obj = {
      title: ruleForm.pageTitle,
      action: ruleForm.action,
      caption: ruleForm.caption,
      page_url: ruleForm.page_url,
      icon: {
        path: icon.link,
        media_type: icon.content_type
      },
    }
    if (full_width === ARTICLE_REGULAR.PADDING) {
      Object.assign(model, {
        style: {
          padding_desktop_px: widthValue.pcWidth,
          padding_desktop_max: widthValue.pcMax,
          padding_mobile_px: widthValue.mbWidth,
          padding_mobile_max: widthValue.mbMax
        }
      })
    }
    model.info = obj
    store.setBuilder.pageState.setChildModle(model, Number(site), Number(childSite))
    closeWin()
  }
}
const widthOptionVal = ref()
const getInfoData = () => {
  const properties = store.setBuilder.pageState.basic.schema.properties || []
  const list = properties[Number(site) || 0] || {}
  const childList = list.properties || []
  const info:any =  childList[Number(childSite) || 0] || {}
  if (info) {
    const data = info.info || {}
    ruleForm.pageTitle = data.pageTitle
    ruleForm.hide = data.hide
    ruleForm.caption = data.caption
    ruleForm.action = data.action
    ruleForm.page_url = data.page_url
    ruleForm.full_width = data.full_width
    if (info.style) {
      widthOptionVal.value = {
        pcWidth: info.style.padding_desktop_px,
        pcMax: info.style.padding_desktop_max,
        mbWidth: info.style.padding_mobile_px,
        mbMax: info.style.padding_mobile_max,
        full_width: info.style.full_width
          ? ARTICLE_REGULAR.FULL_WIDTH
          : ARTICLE_REGULAR.PADDING
      }
    }
    if (data.icon) {
      ruleForm.icon = [{
        link: data.icon.path,
        content_type: data.icon.media_type
      }]
    }
  }
}
onMounted(() => {
  getInfoData()
})
const switchChange = (e: boolean) => {
  // ruleForm.hide = e
}
</script>
<style lang="scss" scoped>
.info-floder {
  .container {
    color: $theme;
    height: 580px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px;
    .title {
      padding: 20px 0px 50px;
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
      width: 100%;
      margin: 0 auto;
      .choosetop {
        display: flex;
        justify-content: space-between;
        padding: 16px 0;
      }
      .swbox {
        margin-top: 20px;
        margin-bottom: 40px;
      }
    }
  }

  .footerbox {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    line-height: 50px;
    background-color: #fff;
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
