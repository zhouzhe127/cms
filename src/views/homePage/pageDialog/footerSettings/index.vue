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
        <el-form
          label-width="80px"
          label-position="top"
          class="formbox"
        >
          <el-form-item label="Width">
            <WidthOption />
          </el-form-item>
          <el-form-item label="Coptyright" prop="pageTitle">
            <div class="optionbox">
              <tfr-input v-model="ruleForm.copyright" width="100%" />
            </div>
          </el-form-item>
          <el-form-item label="Company Name" prop="pageTitle">
            <div class="optionbox">
              <tfr-input v-model="ruleForm.name" width="100%" />
            </div>
          </el-form-item>
          <el-form-item label="Disclaimer" prop="pageTitle">
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
const { showWin, closeWin } = generalwin()
const ruleForm = reactive({
  pageTitle: '',
  seoDes: '',
  hide: false,
  disclaimer: 'All Right Reserved.',
  name: 'The Future Rocks Company Limited',
  copyright: 'Copyright © 2022.'
})
const rules = {
  pageTitle: {
    required: true,
    message: ' ',
    trigger: 'blur'
  }
}
const saveLoading = ref(false)
const switchChange = (e: boolean) => {
  // ruleForm.hide = e
}
const clickSaveBtn = () => {}
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
