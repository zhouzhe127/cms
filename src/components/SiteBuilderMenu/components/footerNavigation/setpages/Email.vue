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
        <el-form-item label="Send To" prop="sendto">
          <tfr-input v-model="ruleForm.sendto" width="100%" />
        </el-form-item>
        <el-form-item label="Subject" prop="subject">
          <tfr-input v-model="ruleForm.subject" width="100%" />
        </el-form-item>
        <el-form-item label="Body" prop="body">
          <tfr-input v-model="ruleForm.body" width="100%" />
        </el-form-item>
        <el-form-item label="CC" prop="cc">
          <tfr-input v-model="ruleForm.cc" width="100%" />
        </el-form-item>
        <el-form-item label="BCC" prop="bcc">
          <tfr-input v-model="ruleForm.bcc" width="100%" />
        </el-form-item>
      </el-form>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const ruleForm = reactive({
  sendto: '',
  subject: '',
  body: '',
  cc: '',
  bcc: ''
})
const rules = {
  sendto: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  subject: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  body: {
    message: ' ',
    trigger: 'blur'
  },
  cc: {
    message: ' ',
    trigger: 'blur'
  },
  bcc: {
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
}
</style>
