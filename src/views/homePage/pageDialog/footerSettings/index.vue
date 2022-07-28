<template>
  <TfrDialog
    v-model="showWin"
    width="730px"
    class="footer-setting"
    @before-close="closeWin"
  >
    <div class="container">
      <div class="title">FOOTER SETTINGS</div>
      <RowSetItem :has-padding="false" margin="0" title="Hide block">
        <el-switch
          v-model="ruleForm.hide"
          active-color="#1B2B27"
          inactive-color="#F8F8F8"
          @change="switchChange"
        />
      </RowSetItem>
      <p class="tips">Toogle to disable footer on this page</p>
      <el-alert type="info" :closable="false">
        <div class="alert-con">
          <SvgIcon icon-class="refersh" class="refersh" />
          This policy is applied to all regions unless an override is specified.
        </div>
      </el-alert>
      <el-scrollbar>
        <el-form label-width="80px" label-position="top" class="formbox">
          <el-form-item label="Width">
            <WidthOption :value="widthOptionVal" ref="widthOption" />
          </el-form-item>
          <el-form-item label="Coptyright" prop="copyright">
            <div class="optionbox">
              <tfr-input v-model="ruleForm.copyright" width="100%" />
            </div>
          </el-form-item>
          <el-form-item label="Company Name" prop="company_name">
            <div class="optionbox">
              <tfr-input v-model="ruleForm.company_name" width="100%" />
            </div>
          </el-form-item>
          <el-form-item label="Disclaimer" prop="disclaimer">
            <div class="optionbox">
              <tfr-input v-model="ruleForm.disclaimer" width="100%" />
            </div>
          </el-form-item>
        </el-form>
      </el-scrollbar>
    </div>
    <div slot="footer">
      <div class="footerbox">
        <div>
          <tfr-button
            class="btn black"
            :loading="saveLoading"
            @click="clickSaveBtn"
            >SAVE</tfr-button
          >
        </div>
      </div>
    </div>
  </TfrDialog>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
import generalwin from '@/views/homePage/generalwin'
import WidthOption from '@/views/homePage/components/RadioInput/WidthOption.vue'
import { reactive, ref } from 'vue'
import { updateFooterSetting } from '@/api/siteBuilder/footer'
import { SITE_MENUS } from '@/components/SiteBuilderMenu/type'
import { ARTICLE_REGULAR } from '../../type'
const { showWin, closeWin } = generalwin()
const ruleForm = reactive({
  hide: false,
  disclaimer: 'All Right Reserved.',
  company_name: 'The Future Rocks Company Limited',
  copyright: 'Copyright © 2022.'
})
const rules = {
  pageTitle: {
    required: true,
    message: ' ',
    trigger: 'blur'
  }
}
const settingStr = localStorage.getItem('settingModelInsert')
const settingData: any = settingStr && JSON.parse(settingStr)
const widthOptionVal = ref()
if (settingData) {
  widthOptionVal.value = {
    pcWidth: settingData.padding_desktop_px,
    pcMax: settingData.padding_desktop_px,
    mbWidth: settingData.padding_desktop_px,
    mbMax: settingData.padding_desktop_px,
    full_width: settingData.full_width
      ? ARTICLE_REGULAR.FULL_WIDTH
      : ARTICLE_REGULAR.PADDING
  }
}
const widthOption = ref<any>(null)
const saveLoading = ref(false)
const switchChange = (e: boolean) => {
  // ruleForm.hide = e
}
const clickSaveBtn = async () => {
  const widthValue = widthOption.value.form
  const full_width = widthOption.value.type
  const obj = {
    full_width: full_width === ARTICLE_REGULAR.FULL_WIDTH
  }
  if (full_width === ARTICLE_REGULAR.PADDING) {
    Object.assign(obj, {
      padding_desktop_px: widthValue.pcWidth,
      padding_desktop_max: widthValue.pcMax,
      padding_mobile_px: widthValue.mbWidth,
      padding_mobile_max: widthValue.mbMax
    })
  }
  await updateFooterSetting({
    location: SITE_MENUS.FOOTER.toLocaleLowerCase(),
    footer: obj
  })
  localStorage.removeItem('settingModelInsert')
  closeWin()
}
</script>
<style lang="scss" scoped>
.footer-setting {
  .container {
    color: $theme;
    .title {
      padding: 20px 0;
    }
    .tips {
      font-size: 12px;
    }

    .formbox {
      padding: 30px 0 40px;
      height: 280px;
    }
    .optionbox {
      width: 100%;
    }

    .alert-con {
      display: flex;
      align-items: center;
      color: $theme;
      .refersh {
        font-size: 14px;
        margin-right: 5px;
      }
    }
  }

  .footerbox {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    line-height: 50px;
    margin-top: 10px;
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
