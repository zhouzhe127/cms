<template>
  <div class="form_container">
    <div class="headerbox">
      <div class="carf">THIS IS THE HOMEPAGE</div>
      <div class="copypage">
        <svg-icon icon-class="content_copy" class="content_copy" />
        <span>Duplicate Page</span>
      </div>
    </div>
    <div class="formcontant tfr-form">
      <el-form
        ref="ruleFormNode"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
        label-position="top"
        class="tfr-form-required"
      >
        <el-form-item label="Page Title" prop="pageTitle">
          <tfr-input v-model="ruleForm.pageTitle" width="100%" />
        </el-form-item>
        <p class="mkdu">
          The page title appears in the top of the browser window.
        </p>
        <el-form-item label="Navigation Title" prop="navTitle">
          <tfr-input v-model="ruleForm.navTitle" width="100%" />
        </el-form-item>
        <p class="mkdu">
          The navigation title is the page’s name in the navigation menu.
        </p>
        <RowSetItem title="Hide From Navigation">
          <el-switch
            v-model="ruleForm.hide"
            active-color="#1B2B27"
            inactive-color="#F8F8F8"
            @change="switchChange"
          />
        </RowSetItem>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import RowSetItem from '@/components/RowSetItem/index.vue';
const ruleForm = reactive({
  pageTitle: '',
  navTitle: '',
  hide: true
})
const rules = {
  pageTitle: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  navTitle: {
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
  .formcontant {
    margin-top: 40px;
    .mkdu {
      font-family: 'Brown Light', serif;
      font-weight: 300;
      margin-bottom: 24px;
    }
  }
}
</style>
