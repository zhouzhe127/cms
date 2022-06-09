<template>
  <div class="form_container">
    <div class="headerbox">
      INJECT CODE
    </div>
    <div class="smue">Inject custom code or scripts to enhance the page. Below codes will be injected under the &lt;head&gt; tag.</div>
    <div class="formcontant tfr-form">
      <el-form ref="ruleFormNode" :model="ruleForm" label-width="80px" label-position="top" class="tfr-form-required">
        <el-form-item label="Code" prop="codeText">
          <tfr-input v-model="ruleForm.codeText" width="100%" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const ruleForm = reactive({
  codeText: '',
})
</script>

<style lang="scss" scoped>
.form_container {
  padding: 70px 10px 0;
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
  .smue {
    font-family: "Brown Light", serif;
    font-weight: 300;
    padding: 20px 0;
  }
}
</style>