<template>
  <div>
    <TfrDialog v-model="showWin" width="730px" class="folder" @close="closeWin">
      <div class="container">
        <div class="title">FOLDER SETTINGS</div>
        <div class="formbox tfr-form">
          <el-form
            ref="ruleFormNode"
            :model="ruleForm"
            :rules="rules"
            label-width="80px"
            label-position="top"
            class="tfr-form-required"
          >
            <el-form-item label="Navigation Title" prop="pageTitle">
              <tfr-input v-model="ruleForm.pageTitle" width="100%" />
            </el-form-item>
            <p class="mkdu">
              The navigation title is the page’s name in the navigation menu.
            </p>
            <el-form-item label="Default (optional)" prop="codeText">
              <EdgeInput v-model="search" placeholder="SEARCH" width="100%" />
            </el-form-item>
          </el-form>
          <el-scrollbar ref="scrollRoot" style="padding: 20px">
            <div class="pagelist">
              <div class="itemlist">
                <svg-icon icon-class="scratchable" class="sicon" />
                <div class="doc">
                  <div class="snd">Necklaces</div>
                  <div class="mkdu">/kjjdjs/njnjcd</div>
                </div>
                <TfrCheckbox type="lagre" />
              </div>
              <div class="itemlist">
                <svg-icon icon-class="scratchable" class="sicon" />
                <div class="doc">
                  <div class="snd">Necklaces</div>
                  <div class="mkdu">/kjjdjs/njnjcd</div>
                </div>
                <TfrCheckbox type="lagre" />
              </div>
              <div class="itemlist">
                <svg-icon icon-class="scratchable" class="sicon" />
                <div class="doc">
                  <div class="snd">Necklaces</div>
                  <div class="mkdu">/kjjdjs/njnjcd</div>
                </div>
                <TfrCheckbox type="lagre" />
              </div>
              <div class="itemlist">
                <svg-icon icon-class="scratchable" class="sicon" />
                <div class="doc">
                  <div class="snd">Necklaces</div>
                  <div class="mkdu">/kjjdjs/njnjcd</div>
                </div>
                <TfrCheckbox type="lagre" />
              </div>
              <div class="itemlist">
                <svg-icon icon-class="scratchable" class="sicon" />
                <div class="doc">
                  <div class="snd">Necklaces</div>
                  <div class="mkdu">/kjjdjs/njnjcd</div>
                </div>
                <TfrCheckbox type="lagre" />
              </div>
              <div class="itemlist">
                <svg-icon icon-class="scratchable" class="sicon" />
                <div class="doc">
                  <div class="snd">Necklaces</div>
                  <div class="mkdu">/kjjdjs/njnjcd</div>
                </div>
                <TfrCheckbox type="lagre" />
              </div>
            </div>
          </el-scrollbar>
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
import EdgeInput from '@/components/TfrInput/EdgeInput.vue'
import generalwin from '@/views/homePage/generalwin'
const ruleForm = reactive({
  pageTitle: ''
})
const rules = {
  pageTitle: {
    required: true,
    message: ' ',
    trigger: 'blur'
  }
}
const search = ref('')
const { showWin, closeWin } = generalwin()
const rightBtnLoading = ref(false)
const clickRightBtn = () => {}
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
    }
    .mkdu {
      font-family: 'Brown Light', serif;
      font-weight: 300;
      margin-bottom: 24px;
    }
    .pagelist {
      max-height: 340px;
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
