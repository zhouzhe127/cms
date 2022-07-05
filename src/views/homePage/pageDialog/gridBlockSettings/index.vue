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
              <WidthOption />
            </el-form-item>
            <el-form-item label="Aspect Ratio">
              <AspectRatio />
            </el-form-item>
            <el-form-item label="Title" prop="pageTitle">
              <div class="optionbox">
                <tfr-input v-model="ruleForm.pageTitle" width="100%" />
              </div>
            </el-form-item>
            <el-form-item label="Action" prop="pageTitle">
              <tfr-input v-model="ruleForm.pageTitle" width="100%" />
            </el-form-item>
            <div class="choosepage">
              <div class="choosetop">
                <span>Page</span>
                <span>CHOOSE</span>
              </div>
              <EdgeInput :has-clear="false" placeholder="Enter URL..." />
              <div class="swbox">
                <RowSetItem :has-padding="false" margin="0" title="Open in new window">
                  <el-switch
                    v-model="ruleForm.hide"
                    active-color="#1B2B27"
                    inactive-color="#F8F8F8"
                    @change="switchChange"
                  />
                </RowSetItem>
              </div>
            </div>
            <el-form-item label="Feature" prop="pageTitle">
              <div>
                <SkuInput />
                <SkuInput />
                <SkuInput />
              </div>
            </el-form-item>
            <el-form-item label="Background" prop="pageTitle">
              <TfrUpload />
            </el-form-item>
            <el-form-item label="Mobile Alternative" prop="pageTitle">
              <div class="mbupload">
                <TfrUpload />
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
              >SAVE</tfr-button
            >
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
const ruleForm = reactive({
  pageTitle: '',
  seoDes: '',
  hide: false
})
const rules = {
  pageTitle: {
    required: true,
    message: ' ',
    trigger: 'blur'
  }
}
const { showWin, closeWin } = generalwin()
const rightBtnLoading = ref(false)
const clickRightBtn = () => {}
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
