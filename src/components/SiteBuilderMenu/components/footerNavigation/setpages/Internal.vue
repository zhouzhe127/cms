<template>
  <div class="form_container">
    <div class="formcontant tfr-form">
      <el-form ref="ruleFormNode" :model="ruleForm" :rules="rules" label-width="80px" label-position="top" class="tfr-form-required">
        <el-form-item label="Link Title" prop="linkTitle">
          <tfr-input v-model="ruleForm.linkTitle" width="100%" />
        </el-form-item>
        <el-form-item label="Page" prop="page">
          <Search />
        </el-form-item>
        <RowSetItem title="Open In New Window">
          <el-switch v-model="ruleForm.isNewWindow" active-color="#1B2B27" inactive-color="#F8F8F8" @change="switchChange" />
        </RowSetItem>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/InternalSerch.vue'
import { reactive } from 'vue'
import RowSetItem from '@/components/RowSetItem/index.vue';
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
  },
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