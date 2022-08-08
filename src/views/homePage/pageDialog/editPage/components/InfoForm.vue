<template>
  <div class="form_container">
    <div class="headerbox">
      <div class="carf" :class="{active: ruleForm.is_home_page}" @click="() => (ruleForm.is_home_page = !ruleForm.is_home_page)">THIS IS THE HOMEPAGE</div>
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
import { watchEffect, defineExpose, reactive, ref } from 'vue'
import RowSetItem from '@/components/RowSetItem/index.vue'
import { FormInstance } from 'element-plus'
import { setNavigationUpdate } from '@/views/homePage/pageDialog/editPage/setPage'
interface Props {
  value?: any
}
const props = withDefaults(defineProps<Props>(), {
  value: {}
})
const ruleForm = reactive({
  pageTitle: '',
  navTitle: '',
  hide: false,
  is_home_page: false,
})
watchEffect(() => {
  const value = props.value
  ruleForm.pageTitle = value.page_title
  ruleForm.navTitle = value.name
  ruleForm.hide = value.search_disabled === true
  ruleForm.is_home_page = value.is_home_page === true
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
const ruleFormNode = ref<FormInstance>()

const confirm = async () => {
  const valid = await ruleFormNode.value?.validate()
  if (!valid) return
  const send = {
    page_title: ruleForm.pageTitle,
    name: ruleForm.navTitle,
    search_disabled: ruleForm.hide,
    is_home_page: ruleForm.is_home_page,
  }
  await setNavigationUpdate(send)
}
const switchChange = (e: boolean) => {
  // ruleForm.hide = e
}
defineExpose({
  confirm
})
</script>

<style lang="scss" scoped>
.form_container {
  padding: 0 10px 0;
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
      opacity: .3;
      cursor: pointer;
    }
    .active {
      opacity: 1;
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
