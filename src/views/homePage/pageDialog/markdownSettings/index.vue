<template>
  <div>
    <TfrDialog v-model="showWin" width="730px" class="folder" @before-close="closeWin">
      <div class="container">
        <div class="title">MARKDOWN SETTINGS</div>
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
              <WidthOption ref="widthOption" />
            </el-form-item>
            <el-form-item label="Body" prop="body">
              <TfrEditor
                v-model="ruleForm.body"
                :placeholder="defaultDoc"
                height="140px"
                width="100%"
              />
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
import TfrEditor from '@/components/TfrEditor/index.vue'
import WidthOption from '@/views/homePage/components/RadioInput/WidthOption.vue'
import store from '@/store'
import { ARTICLE_REGULAR } from '../../type'
import { useRoute } from 'vue-router'
const { showWin, closeWin } = generalwin()
const defaultDoc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const ruleForm = reactive({
  body: '',
})
const rules = {
  body: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
}
const route = useRoute()
const { site, childSite } = route.query
const widthOption = ref<any>(null)
const rightBtnLoading = ref(false)
const clickRightBtn = () => {
  const model = {
    componentName: 'markdown',
    style: {}
  }
  const widthValue = widthOption.value.form
  const full_width = widthOption.value.type
  const obj = {
    body: ruleForm.body,
    full_width
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
  closeWin()
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
