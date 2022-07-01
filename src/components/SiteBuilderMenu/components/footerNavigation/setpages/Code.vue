<template>
  <div class="form_container">
    <div class="formcontant tfr-form">
      <el-form
        ref="ruleFormNode"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
        label-position="top"
        class="tfr-form-required"
      >
        <el-form-item label="Link Title" prop="linkTitle">
          <tfr-input v-model="ruleForm.linkTitle" width="100%" />
        </el-form-item>
        <el-form-item label="Code" prop="code">
          <tfr-input v-model="ruleForm.code" width="100%" />
        </el-form-item>
        <div class="navrid">
          <span>Open In New Window</span>
          <div class="dtt" />
          <div class="bg-switch">
            <el-switch
              v-model="ruleForm.isNewWindow"
              active-color="#1B2B27"
              inactive-color="#F8F8F8"
              @change="switchChange"
            />
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const ruleForm = reactive({
  linkTitle: '',
  code: '',
  isNewWindow: false
})
const rules = {
  linkTitle: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  code: {
    required: true,
    message: ' ',
    trigger: 'blur'
  }
}
const switchChange = (e: boolean) => {
  // ruleForm.hide = e
}
</script>

<style lang="scss" scoped>
.form_container {
  padding: 60px 10px 0;
  .headerbox {
    display: flex;
    justify-content: space-between;
    .carf {
      height: 50px;
      padding: 0 20px;
      line-height: 50px;
      background-color: $theme;
      color: #ffffff;
      text-align: center;
    }
    .copypage {
      display: flex;
      align-items: center;
      .content_copy {
        font-size: 20px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
  .formcontant {
    .mkdu {
      font-family: 'Brown Light', serif;
      font-weight: 300;
      margin-bottom: 24px;
    }
    .navrid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      margin-top: 45px;
      color: black;
      .dtt {
        height: 1px;
        border-bottom: 1px #c7caca solid;
        margin: 0 30px;
        flex: 1;
      }
    }
  }
}
</style>
