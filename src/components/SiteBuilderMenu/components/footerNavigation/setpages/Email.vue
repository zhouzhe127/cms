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
        <el-form-item label="Send To" prop="send_to">
          <tfr-input v-model="ruleForm.send_to" width="100%" />
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
import { onMounted, ref, toRaw } from 'vue'
import { EditLinkData, SETPAGETYPE } from '../type'
interface Props {
  value?: EditLinkData
}
const props = withDefaults(defineProps<Props>(), {})
const type = SETPAGETYPE.EMAIL
const ruleForm = ref({
  send_to: '',
  subject: '',
  body: '',
  cc: '',
  bcc: ''
})
const rules = {
  send_to: {
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
    required: false,
    message: ' ',
    trigger: 'blur'
  },
  cc: {
    required: false,
    message: ' ',
    trigger: 'blur'
  },
  bcc: {
    required: false,
    message: ' ',
    trigger: 'blur'
  }
}
onMounted(() => {
  if (props?.value) {
    ruleForm.value = { ...ruleForm.value, ...props?.value[type] }
  }
})
const ruleFormNode = ref()
const confirm = async () => {
  try {
    const allVaild = await ruleFormNode.value.validate()
    if (allVaild) {
      return Promise.resolve({
        [type]: toRaw(ruleForm)
      })
    }
  } catch (e) {
    console.log(e)
  }
}
defineExpose({
  confirm
})
</script>

<style lang="scss" scoped>
.form_container {
  padding: 0px 10px 0;
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
