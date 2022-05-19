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
      </el-form>
      <TfrButton>SIGN IN</TfrButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import TfrInput from '@/components/TfrInput/index.vue'
import TfrLogo from '@/components/TfrLogo/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import { ref } from 'vue'
const name = ref('')
const loginForm = ref({})
const loginRules = ref({})
const input = () => {
  console.log('kk', name.value)
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
  }
}
</style>
