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
              <WidthOption />
            </el-form-item>
            <InfoBlockItem />
            <el-form-item label="Icon" prop="pageTitle">
              <TfrUpload />
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
              <TfrEditor />
            </el-form-item>
            <el-form-item label="Action" prop="pageAction">
              <div class="optionbox">
                <tfr-input
                  placeholder="LOREM IPSUM"
                  v-model="ruleForm.pageTitle"
                  width="100%"
                />
              </div>
            </el-form-item>
            <div class="choosepage">
              <div class="choosetop">
                <span>Page</span>
                <span>CHOOSE</span>
              </div>
              <EdgeInput :has-clear="false" placeholder="Enter URL..." />
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
import { ref, reactive } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import WidthOption from '@/views/homePage/components/RadioInput/WidthOption.vue'
import InfoBlockItem from '@/views/homePage/components/InfoBlock/InfoBlockItem.vue'
import generalwin from '../../generalwin'
import TfrUpload from '@/components/TfrUpload/index.vue'
import TfrEditor from '@/components/TfrEditor/index.vue'
const { showWin, closeWin } = generalwin()
const ruleForm = reactive({
  pageTitle: '',
  seoDes: '',
  hide: false,
  caption: '',
  pageAction: ''
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
  pageAction: {
    require: true,
    message: ' ',
    trigger: 'blur'
  }
}
const rightBtnLoading = ref(false)
const clickRightBtn = () => {}
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
