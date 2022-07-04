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
      <div class="body">
        <header>
          <span> PLP SETTINGS </span>
        </header>
        <el-scrollbar ref="scrollRoot" style="padding: 20px">
          <el-form :rules="rules" label-position="top">
            <RowSetItem title="HIDE PLP" :has-padding="false">
              <TfrSwitch />
            </RowSetItem>
            <div class="tips-row">
              Toggle to disable PLP from public domain.
            </div>

            <el-form-item class="type">
              <header>TYPE</header>
              <div class="type-con">
                <TfrRadioGroup v-model="typeCheck">
                  <el-radio :label="PLPTYPE.PREANNOUNCEMENT"
                    >Preannouncement</el-radio
                  >
                  <el-radio :label="PLPTYPE.FILTER">Filter</el-radio>
                  <el-radio :label="PLPTYPE.CUSTOM">Custom</el-radio>
                </TfrRadioGroup>
              </div>
              <div class="show-type-con">
                <div v-if="typeCheck === PLPTYPE.PREANNOUNCEMENT">
                  Preannouncement
                </div>
                <div v-if="typeCheck === PLPTYPE.FILTER">Filter</div>
                <div v-if="typeCheck === PLPTYPE.CUSTOM">Custom</div>
              </div>
            </el-form-item>
            <RowSetItem title="Title Block" :has-padding="false">
              <TfrSwitch />
            </RowSetItem>

            <el-form-item label="Title" props="title">
              <tfr-input v-model="ruleForm.title" width="100%" />
            </el-form-item>

            <el-form-item label="Body" props="body">
              <TfrEditor />
            </el-form-item>

            <el-form-item label="Background" props="background">
              <tfr-upload :picture-list="ruleForm.background" />
            </el-form-item>

            <el-form-item label="Mobile Alterntive" props="background">
              <div class="mobile-upload">
                <tfr-upload :picture-list="ruleForm.background" />
              </div>
            </el-form-item>

            <el-form-item label="Title" props="title">
              <tfr-input
                placeholder="Launches"
                v-model="ruleForm.title"
                width="100%"
              />
            </el-form-item>

            <el-form-item label="Button" props="title">
              <tfr-input
                placeholder="NOTIFY ME"
                v-model="ruleForm.title"
                width="100%"
              />
            </el-form-item>

            <el-form-item label="Submit To" props="title">
              <tfr-input
                placeholder="sales@thefuturerocks.com"
                v-model="ruleForm.title"
                width="100%"
              />
            </el-form-item>

            <RowSetItem title="Launch Date" :has-padding="false">
              <TfrSwitch />
            </RowSetItem>

            <div class="date">
              <DatePicker width="100%" time-width="330px"></DatePicker>
            </div>
          </el-form>
        </el-scrollbar>
      </div>
    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import TfrSwitch from '@/components/TfrSwitch/index.vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import RowSetItem from '@/components/RowSetItem/index.vue'
import TfrRadioGroup from '@/components/TfrRadioGroup/index.vue'
import TfrEditor from '@/components/TfrEditor/index.vue'
import TfrUpload from '@/components/TfrUpload/index.vue'
import DatePicker from '@/components/DatePicker/index.vue'
import generalwin from '../../generalwin'
const { showWin, closeWin } = generalwin()

enum PLPTYPE {
  PREANNOUNCEMENT = 'Preannouncement',
  FILTER = 'Filter',
  CUSTOM = 'Custom'
}

const ruleForm = reactive({
  title: '',
  background: [] as any
})
const rules = {}

const plpVisible = ref<boolean>(true)
const typeCheck = ref<string>(PLPTYPE.PREANNOUNCEMENT)
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
  .mobile-upload {
    width: 252px;
    margin: 0 auto;
  }

  .el-form-item__label {
    color: $theme;
  }

  .date {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
