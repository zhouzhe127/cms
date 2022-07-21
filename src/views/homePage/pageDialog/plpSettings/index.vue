<template>
  <div>
    <TfrDialog
      v-model="plpVisible"
      :close-on-click-modal="false"
      :is-no-padding="true"
      :header-less="true"
      width="730px"
      class="plp-model"
      append-to-body
      @before-close="closeWin"
    >
      <div class="body tfr-form">
        <header>
          <span> PLP SETTINGS </span>
        </header>
        <el-scrollbar ref="scrollRoot" style="padding: 20px">
          <el-form
            :model="ruleForm"
            :rules="rules"
            label-width="80px"
            label-position="top"
            class="tfr-form-required"
          >
            <RowSetItem title="HIDE PLP" :has-padding="false">
              <TfrSwitch v-model="hide" />
            </RowSetItem>
            <div class="tips-row">
              Toggle to disable PLP from public domain.
            </div>

            <el-form-item class="type">
              <header>TYPE</header>
              <div class="type-con">
                <TfrRadioGroup v-model="typeCheck">
                  <el-radio :label="PLPTYPE.PREANNOUNCEMENT">
                    Preannouncement
                  </el-radio>
                  <el-radio :label="PLPTYPE.FILTER">Filter</el-radio>
                  <el-radio :label="PLPTYPE.CUSTOM">Custom</el-radio>
                </TfrRadioGroup>
              </div>
              <div class="show-type-con">
                <div v-if="typeCheck === PLPTYPE.PREANNOUNCEMENT">
                  <div style="width: 335px; margin: 0 auto">
                    <Preannouncement :info="ruleForm" />
                  </div>
                </div>
                <div v-show="typeCheck === PLPTYPE.FILTER"><Filter ref="filter" /></div>
                <div v-show="typeCheck === PLPTYPE.CUSTOM">
                  <SkuInput :has-add="true" @add-click="addSku" />
                </div>
              </div>
            </el-form-item>

            <div class="titleblock">
              <RowSetItem v-show="typeCheck !== PLPTYPE.PREANNOUNCEMENT" title="Title Block" :has-padding="false">
                <TfrSwitch v-model="titleBlock" />
              </RowSetItem>
            </div>

            <el-form-item label="Title" prop="title">
              <tfr-input v-model="ruleForm.title" placeholder="LOREM IPSUM" width="100%" />
            </el-form-item>

            <el-form-item label="Body" prop="body">
              <TfrEditor
                v-model="ruleForm.body"
                :placeholder="defaultDoc"
                height="140px"
                width="100%"
              />
            </el-form-item>

            <el-form-item label="Background">
              <tfr-upload :is-only-one="true" :picture-list="ruleForm.background" />
            </el-form-item>

            <el-form-item label="Mobile Alterntive">
              <div class="mobile-upload">
                <tfr-upload :is-only-one="true" :picture-list="ruleForm.mobileBackground" />
              </div>
            </el-form-item>

            <el-form-item label="Title" props="launch_title">
              <tfr-input
                placeholder="Launches"
                v-model="ruleForm.launch_title"
                width="100%"
              />
            </el-form-item>

            <el-form-item label="Button" props="lunch_button">
              <tfr-input
                placeholder="NOTIFY ME"
                v-model="ruleForm.lunch_button"
                width="100%"
              />
            </el-form-item>

            <el-form-item label="Submit To" prop="submit_to">
              <tfr-input
                placeholder="sales@thefuturerocks.com"
                v-model="ruleForm.submit_to"
                width="100%"
              />
            </el-form-item>

            <RowSetItem title="Launch Date" :has-padding="false">
              <TfrSwitch v-model="launch" />
            </RowSetItem>

            <div class="date">
              <DatePicker ref="pickerNode" width="100%" time-width="330px" @change="timeSelectChange" />
            </div>
          </el-form>
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
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import store from '@/store'
import TfrSwitch from '@/components/TfrSwitch/index.vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import RowSetItem from '@/components/RowSetItem/index.vue'
import TfrRadioGroup from '@/components/TfrRadioGroup/index.vue'
import TfrEditor from '@/components/TfrEditor/index.vue'
import TfrUpload from '@/components/TfrUpload/index.vue'
import DatePicker from '@/components/DatePicker/index.vue'
import generalwin from '../../generalwin'
import SkuInput from '@/views/homePage/components/FormCommon/SkuInput.vue'
import Preannouncement from './component/Preannouncement.vue'
import Filter from './component/Filter.vue'
const { showWin, closeWin } = generalwin()
const defaultDoc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
enum PLPTYPE {
  PREANNOUNCEMENT = 'Preannouncement',
  FILTER = 'Filter',
  CUSTOM = 'Custom'
}
const hide = ref(false)
const launch = ref(false)
const titleBlock = ref(false)
const filter = ref<any>(null)
const ruleForm = reactive({
  title: '',
  body: '',
  launch_title: '',
  lunch_button: '',
  submit_to: '',
  start_time: '',
  background: [] as any,
  mobileBackground: [] as any,
  productList: [] as any
})
const rules = {
  title: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  body: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  launch_title: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  lunch_button: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  submit_to: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
}
const pickerNode = ref<any>(null)
const plpVisible = ref<boolean>(true)
const typeCheck = ref<string>(PLPTYPE.PREANNOUNCEMENT)
const rightBtnLoading = ref(false)

const addSku = (e: string) => {
  ruleForm.productList.push(e)
}

const getPlpData = () => {
  const plpdata = store.setBuilder.pageState.basic.schema.plp
  if (plpdata) {
    ruleForm.title = plpdata.title
    ruleForm.lunch_button = plpdata.lunch_button
    ruleForm.launch_title = plpdata.launch_title
    ruleForm.body = plpdata.body
    ruleForm.submit_to = plpdata.submit_to
    ruleForm.start_time = plpdata.start_time
    if (plpdata.background) {
      ruleForm.background = [{
        link: plpdata.background.path,
        content_type: plpdata.background.media_type
      }]
    }
    if (plpdata.mobile_background) {
      ruleForm.mobileBackground = [{
        link: plpdata.mobile_background.path,
        content_type: plpdata.mobile_background.media_type
      }]
    }
  }
}

const timeSelectChange = (value: any) => {
  ruleForm.start_time = value.date
}

const clickRightBtn = () => {
  const background = ruleForm.background[0] || {}
  const mobileBackground = ruleForm.mobileBackground[0] || {}
  const launchDate = pickerNode.value.commitDateParams()
  console.log(filter.value.getSelected())
  if (!launchDate) {
    return false
  }
  const obj = {
    hide: hide.value,
    type: typeCheck.value,
    title: ruleForm.title,
    body: ruleForm.body,
    title_block: titleBlock,
    launch_title: ruleForm.launch_title,
    lunch_button: ruleForm.lunch_button,
    submit_to: ruleForm.submit_to,
    launch,
    start_time: launchDate.date,
    time_zone: launchDate.timeZone,
    background: {
      path: background.link,
      media_type: background.content_type
    },
    mobile_background: {
      path: mobileBackground.link,
      media_type: mobileBackground.content_type
    },
  }
  if (typeCheck.value === PLPTYPE.FILTER) {
    Object.assign(obj, {
      product_filters: filter.value.getSelected()
    })
  }

  if (typeCheck.value === PLPTYPE.CUSTOM) {
    Object.assign(obj, {
      custom_product_list: ruleForm.productList
    })
  }
  store.setBuilder.pageState.setPlpData(obj)
  console.log(pickerNode.value.commitDateParams())
  console.log(obj)
}
onMounted(() => {
  getPlpData()
})
</script>
<style lang="scss">
.tips-row {
  margin-top: 8px;
  font-size: 14px;
  color: $theme;
  --framer-font-family: 'Brown Bold', serif;
}
.plp-model {
  .body {
    padding: 30px;
    height: 728px;
    // overflow: auto;
  }
  .type {
    header {
      margin-top: 12px;
      margin-bottom: 6px;
      color: $theme;
    }
  }
  .type-con {
    display: block;
    width: 100%;
    background-color: $bg;
    padding: 20px;
    .el-radio {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .show-type-con {
    width: 100%;
    margin-top: 10px;
  }
  .mobile-upload {
    width: 252px;
    margin: 0 auto;
  }

  .el-form-item__label {
    color: $theme;
  }
  .titleblock {
    margin-bottom: 20px;
  }
  .date {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .footerbox {
    width: 100%;
    padding: 10px 20px;
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
