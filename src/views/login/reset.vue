<template>
  <div class="reset-page">
    <div class="logo">
      <TfrLogo />
    </div>
    <div class="content">
      <el-form
        v-if="step === '1'"
        ref="sendFormRef"
        class="send-form"
        :model="sendForm"
        :rules="sendFormRules"
        :hide-required-asterisk="true"
      >
        <el-form-item label="FORGOT YOUR PASSWORD?" prop="email">
          <TfrInput
            v-model="sendForm.email"
            @keyup.enter.prevent="submitSendForm(sendFormRef)"
          />
        </el-form-item>
        <p class="tips">
          Please confirm your email and we'll send a reset link to your inbox.
        </p>
        <div class="btn-group">
          <TfrButton
            type="gray"
            style="width: 162.5px"
            @click="backToLoginHandle"
            >CANCEL</TfrButton
          >
          <TfrButton
            :loading="sendEmailLoading"
            style="width: 162.5px"
            @click="submitSendForm(sendFormRef)"
            >CONFIRM</TfrButton
          >
        </div>
      </el-form>
      <div v-if="step === '2'" class="send-finish-box">
        <p class="title">CHECK YOUR INBOX</p>
        <svg-icon icon-class="sending" />
        <p class="tips">Reset link is send to your inbox.</p>
        <TfrButton type="gray" @click="backToLoginHandle"
          >RETURN TO SIGN IN</TfrButton
        >
      </div>
      <el-form
        v-if="step === '3'"
        ref="resetFormRef"
        class="reset-form"
        :model="resetForm"
        :rules="resetFormRules"
      >
        <el-form-item label="Create New Password" prop="password">
          <TfrInput
            v-model="resetForm.password"
            :type="passwordType"
            placeholder=""
          />
          <svg-icon
            :icon-class="
              passwordType === 'password' ? 'visibility_off' : 'visibility'
            "
            @click="showPwd('password')"
          />
        </el-form-item>
        <el-form-item label="Confirm Password" prop="confirmPassword">
          <TfrInput
            v-model="resetForm.confirmPassword"
            :type="confirmPasswordType"
            placeholder=""
            @keyup.enter.prevent="resetConfirm(resetFormRef)"
          />
          <svg-icon
            :icon-class="
              confirmPasswordType === 'password'
                ? 'visibility_off'
                : 'visibility'
            "
            @click="showPwd('confirm')"
          />
        </el-form-item>
        <div class="btn-group">
          <TfrButton type="gray" @click="backToLoginHandle">CANCEL</TfrButton>
          <TfrButton :loading="resetLoading" @click="resetConfirm(resetFormRef)"
            >RESET</TfrButton
          >
        </div>
      </el-form>
      <div v-if="step === '4'" class="has-reset">
        YOUR PASSWORD HAS BEEN RESET
        <TfrButton style="margin-top: 160px" @click="backToLoginHandle"
          >SIGN IN</TfrButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TfrLogo from '@/components/TfrLogo/index.vue'
import TfrInput from '@/components/TfrInput/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import { reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { FormInstance, FormRules } from 'element-plus'
import { sendEmail, resetPassword } from '@/api/user'
const route = useRoute()
const router = useRouter()
const step: any = ref(route.query.step || '1')
const passwordType = ref('password')
const confirmPasswordType = ref('password')
const sendFormRef = ref<FormInstance>()
const sendEmailLoading = ref(false)
const resetFormRef = ref<FormInstance>()
const resetLoading = ref(false)
interface Query {
  step?: string
  token?: string
  official_id?: string
}
watch(
  () => route.query,
  (query: Query) => {
    console.log(typeof query.official_id)
    step.value = query.step ? query.step : '1'
    router.push({ query: { ...query } })
  }
)
const sendForm = reactive({
  email: ''
})
const resetForm = reactive({
  password: '',
  confirmPassword: ''
})
const sendFormRules = reactive<FormRules>({
  email: [
    {
      type: 'email',
      required: true,
      message: 'Please input correct email address',
      trigger: ['blur', 'change']
    }
  ]
})
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (resetForm.confirmPassword !== '') {
      if (!resetFormRef.value) return
      resetFormRef.value.validateField('confirmPassword', () => null)
    }
    callback()
  }
}
const validateConfirmPassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== resetForm.password) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}
const resetFormRules = reactive<FormRules>({
  password: [{ required: true, validator: validatePass, trigger: 'blur' }],
  confirmPassword: [
    { required: true, validator: validateConfirmPassword, trigger: 'blur' }
  ]
})
const backToLoginHandle = () => {
  router.push({ path: '/login' })
}
const submitSendForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        console.log('submit!')
        sendEmailLoading.value = true
        await sendEmail(sendForm)
        sendEmailLoading.value = false
        router.push({ query: { step: '2' } })
        step.value = '2'
      } catch (e) {
        sendEmailLoading.value = false
        console.log(e)
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
const showPwd = (type: string) => {
  if (type === 'password') {
    passwordType.value = passwordType.value === 'password' ? '' : 'password'
  } else {
    confirmPasswordType.value =
      confirmPasswordType.value === 'password' ? '' : 'password'
  }
}

const resetConfirm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      resetLoading.value = true
      const query: Query = route.query
      await resetPassword({
        official_id: query.official_id,
        token: query.token,
        password: resetForm.password
      })
      resetLoading.value = false
      step.value = '4'
      router.push({ query: { step: '4' } })
    } else {
      console.log('error submit!', fields)
      resetLoading.value = false
    }
  })
}
</script>

<style lang="scss" scoped>
.reset-page {
  height: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.logo {
  position: fixed;
  top: 30px;
  left: 30px;
}
.content {
  width: 375px;
  padding: 20px;
  margin: auto;
}
.el-form-item {
  display: block;
  margin-bottom: 30px;
  ::v-deep(.el-form-item__label) {
    color: $theme;
    font-weight: 400;
    font-size: 14px;
  }
  .svg-icon {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
    user-select: none;
    font-size: 20px;
  }
  ::v-deep(.el-form-item__label) {
    position: relative;
  }
  &.is-required:not(.is-no-asterisk) > ::v-deep(.el-form-item__label:before) {
    position: absolute;
    right: 0;
    color: $theme;
  }
}
.send-form {
  .tips {
    margin-top: -10px;
    font-family: 'Brown Light', serif;
  }
  .btn-group {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
}
.send-finish-box {
  text-align: center;
  .title {
    margin-bottom: 30px;
  }
  svg {
    font-size: 100px;
  }
  .tips {
    font-family: 'Brown Light', serif;
    margin: 30px 0;
  }
}
.reset-form {
  .btn-group {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
}
.has-reset {
  text-align: center;
}
</style>
