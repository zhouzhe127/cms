<template>
  <div class="login-page">
    <div class="logo">
      <TfrLogo />
    </div>
    <div class="login-content">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
      >
        <el-form-item label="TFR Email" prop="username">
          <TfrInput v-model="loginForm.username" placeholder="TFR Email" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <TfrInput
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            @keyup.enter.prevent="submitLoginForm(loginFormRef)"
          />
          <svg-icon
            :icon-class="
              passwordType === 'password' ? 'visibility_off' : 'visibility'
            "
            @click="showPwd"
          />
        </el-form-item>
        <div class="spec-form-item">
          <TfrCheckbox v-model="signed" type="radio">
            Keep me Signed in
          </TfrCheckbox>
          <router-link to="/reset">Forgot my password</router-link>
        </div>
      </el-form>
      <TfrButton :loading="signInLoading" @click="submitLoginForm(loginFormRef)"
        >SIGN IN</TfrButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import TfrInput from '@/components/TfrInput/index.vue'
import TfrLogo from '@/components/TfrLogo/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import TfrCheckbox from '@/components/TfrCheckbox/index.vue'
import { ref, reactive } from 'vue'
import {
  useRouter,
  useRoute,
  LocationQuery,
  LocationQueryValue
} from 'vue-router'
import { userStore } from '@/store/modules/user'
import type { FormInstance, FormRules } from 'element-plus'
const router = useRouter()
const route = useRoute()
const useUserStore = userStore()
const loginFormRef = ref<FormInstance>()
const passwordType = ref('password')
const signed = ref(false)
const loginForm = reactive({
  username: '',
  password: ''
})
const loginRules = reactive<FormRules>({
  username: [
    // {
    //   type: 'email',
    //   required: true,
    //   message: 'Please input correct email address',
    //   trigger: ['blur', 'change']
    // }

    {
      required: true,
      message: 'TFR Email is required',
      trigger: ['blur', 'change']
    }
  ],
  password: [
    {
      required: true,
      message: 'Password is required',
      trigger: ['blur', 'change']
    }
  ]
})
const signInLoading = ref(false)
const showPwd = () => {
  if (passwordType.value === 'password') {
    passwordType.value = ''
  } else {
    passwordType.value = 'password'
  }
}
const submitLoginForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      try {
        signInLoading.value = true
        await useUserStore.loginHttp({
          username: loginForm.username,
          password: loginForm.password
        })
        signInLoading.value = false
        console.log(route.query.redirect, 're')
        const path: string | LocationQueryValue[] =
          route.query.redirect || '/home'
        router.push({ path: path as string })
      } catch (e) {
        signInLoading.value = false
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.login-page {
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
.login-content {
  width: 375px;
  padding: 20px;
  margin: auto;
}
.login-form {
  .el-form-item {
    display: block;
    margin-bottom: 20px;
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
  .spec-form-item {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    margin-bottom: 20px;
    a {
      font-size: 14px;
      color: $theme;
    }
  }
}
</style>
