<template>
  <div>
    <TfrDialog v-model="showWin" width="730px" class="folder" @close="closeWin">
      <div class="container">
        <div class="title">SMART SETTINGS</div>
        <div class="formbox tfr-form">
          <div class="sbanner">
            <div class="top">
              <span>Discover</span>
              <svg-icon icon-class="folder_line" class="svgicon" />
            </div>
            <div class="muend">
              The page title appears in the top of the browser window.
            </div>
            <div class="muend topbord">
              The page title appears in the top of the browser window.
            </div>
          </div>
          <el-form
            ref="ruleFormNode"
            :model="ruleForm"
            :rules="rules"
            label-width="80px"
            label-position="top"
            class="tfr-form-required"
          >
            <el-form-item label="SEO Title" prop="pageTitle">
              <div class="optionbox">
                <tfr-input v-model="ruleForm.pageTitle" width="100%" />
                <div class="ptbox">
                  <span>{{ ruleForm.pageTitle.length }}</span>
                  <span>/</span>
                  <span>60</span>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="Slug" prop="pageTitle">
              <tfr-input v-model="ruleForm.pageTitle" width="100%" />
            </el-form-item>
            <p class="mkdu">The unique location slug for this page.</p>
            <el-form-item label="SEO Description" prop="codeText">
              <TfrEditor
                v-model="ruleForm.seoDes"
                placeholder="SEARCH"
                height="140px"
                width="100%"
              />
            </el-form-item>
            <RowSetItem title="Hide From Search Results">
              <el-switch
                v-model="ruleForm.hide"
                active-color="#1B2B27"
                inactive-color="#F8F8F8"
                @change="switchChange"
              />
            </RowSetItem>
            <p class="mkdu">
              Disabled pages can’t be accessed by site visitors.
            </p>
            <el-form-item label="Cover" prop="pageTitle">
              <EdgeInput placeholder="SEARCH" width="100%" />
            </el-form-item>
          </el-form>
          <div class="pagelist">
            <div class="itemlist">
              <svg-icon icon-class="folder" class="sicon" />
              <div class="doc">
                <div class="snd">Necklaces</div>
                <div class="mkdu">/kjjdjs/njnjcd</div>
              </div>
              <TfrCheckbox type="lagre" />
            </div>
          </div>
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
import TfrEditor from '@/components/TfrEditor/index.vue'
import generalwin from '@/views/homePage/generalwin'
import EdgeInput from '@/components/TfrInput/EdgeInput.vue'
import RowSetItem from '@/components/RowSetItem/index.vue'

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
      padding: 30px 10px;
      height: 580px;
      overflow: auto;
    }
    .mkdu {
      font-family: 'Brown Light', serif;
      font-weight: 300;
      margin-bottom: 24px;
    }
    .sbanner {
      padding: 20px;
      margin-bottom: 20px;
      background-color: #f8f8f8;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .svgicon {
          font-size: 20px;
        }
      }
      .muend {
        font-family: 'Brown Light', serif;
        font-weight: 300;
        padding: 10px 0;
      }
      .topbord {
        border-top: 1px #c7caca solid;
      }
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
    .pagelist {
      max-height: 340px;
      overflow-y: auto;
      padding: 0 20px;
      .itemlist {
        display: flex;
        justify-content: space-between;
        align-items: top;
        margin-bottom: 20px;
        .doc {
          flex: 1;
          margin-left: 10px;
          .snd {
            margin-bottom: 5px;
          }
        }
        .sicon {
          font-size: 22px;
        }
      }
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
