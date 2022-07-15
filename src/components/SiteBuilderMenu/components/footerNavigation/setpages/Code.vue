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
        <el-form-item label="Link Title" prop="title">
          <tfr-input v-model="ruleForm.title" width="100%" />
        </el-form-item>
        <el-form-item label="Code" prop="code">
          <tfr-input v-model="ruleForm.code" width="100%" />
        </el-form-item>
        <RowSetItem title="Open In New Window">
          <el-switch
            v-model="ruleForm.open_new"
            active-color="#1B2B27"
            inactive-color="#F8F8F8"
          />
        </RowSetItem>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue'
import RowSetItem from '@/components/RowSetItem/index.vue'
import { SETPAGETYPE } from '../utils'
interface Props {
  value?: any
}
const props = withDefaults(defineProps<Props>(), {})
const type = SETPAGETYPE.CODE
const ruleForm = ref({
  title: '',
  code: '',
  open_new: false
})
const rules = {
  title: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  code: {
    required: true,
    message: ' ',
    trigger: 'blur'
  }
}
if (props?.value) {
  ruleForm.value = { ...ruleForm.value, ...props?.value[type] }
}
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
  .formcontant {
    .mkdu {
      font-family: 'Brown Light', serif;
      font-weight: 300;
      margin-bottom: 24px;
    }
  }
}
</style>
