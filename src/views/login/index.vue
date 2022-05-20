<template>
  <div class="login-page">
    <div class="logo">
      <TfrLogo />
    </div>
    <div class="content">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        :hide-required-asterisk="true"
      >
        <el-form-item label="TFR Email">
          <TfrInput
            v-model="name"
            placeholder="TFR Email"
            @input="input"
            width="335px"
          />
        </el-form-item>
        <el-form-item label="Password">
          <TfrInput
            :type="passwordType"
            v-model="password"
            placeholder="Password"
            @input="input"
            width="335px"
          />
          <svg-icon
            :icon-class="
              passwordType === 'password' ? 'visibility_off' : 'visibility'
            "
            @click="showPwd"
          />
        </el-form-item>
        <div>
          <TfrCheckbox v-model="signed" type="radio"
            >Keep me Signed in</TfrCheckbox
          >
        </div>
      </el-form>
      <TfrButton>SIGN IN</TfrButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import TfrInput from '@/components/TfrInput/index.vue'
import TfrLogo from '@/components/TfrLogo/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import TfrCheckbox from '@/components/TfrCheckbox/index.vue'
import { ref } from 'vue'
const name = ref('')
const password = ref('')
const passwordType = ref('password')
const signed = ref(false)
const loginForm = ref({})
const loginRules = ref({})
const showPwd = () => {
  if (passwordType.value === 'password') {
    passwordType.value = ''
  } else {
    passwordType.value = 'password'
  }
}
const input = () => {
  console.log('kk', name.value)
}
const signedChange = value => {
  console.log(value, '111')
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  display: flex;
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
  }
}
</style>
