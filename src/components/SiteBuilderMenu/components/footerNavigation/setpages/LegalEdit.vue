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
        <el-form-item prop="linkTitle">
          <tfr-select
            :hasBorder="false"
            v-model="ruleForm.country"
            width="100%"
          >
            <el-option
              v-for="zone in countryList"
              :key="zone.value"
              :value="zone.value"
              :label="zone.label"
            />
          </tfr-select>
        </el-form-item>
        <el-alert type="info" :closable="false">
          <div class="alert-con">
            <SvgIcon icon-class="warning" class="warning" />
            This policy is applied to all regions unless an override is
            specified.
          </div>
        </el-alert>
        <el-form-item></el-form-item>
        <el-form-item label="Policy Title" prop="title">
          <tfr-input placeholder="NEW POLICY" v-model="ruleForm.title" width="100%" />
        </el-form-item>
        <el-form-item label="Slug" prop="slug">
          <tfr-input placeholder="/new-poilcy" v-model="ruleForm.slug" width="100%" />
          <span class="tips">
            The unique location slug for this page.
          </span>
        </el-form-item>
        <el-form-item label="Policy Body" prop="areaText">
          <tfr-editor v-model="ruleForm.areaText" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import TfrEditor from '@/components/TfrEditor/index.vue'
const ruleForm = reactive({
  country: '',
  slug: '',
  title: '',
  areaText: false
})
const rules = {
  title: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  slug: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  areaText: {
    required: true,
    message: ' ',
    trigger: 'blur'
  }
}

const countryList = [
  {
    value: 'Au',
    label: 'Region: Australia'
  },
  {
    value: 'EN',
    label: 'Region: English'
  },
  {
    value: 'ZH',
    label: 'Region: China'
  }
]
const switchChange = (e: boolean) => {
  // ruleForm.hide = e
}
</script>

<style lang="scss" scoped>
.form_container {
  padding: 60px 10px 0;
  ::v-deep(.el-select) {
    border-bottom: 1px solid $theme;
  }

  .alert-con {
    display: flex;
    align-items: center;
    color: $theme;
    .warning {
      font-size: 14px;
      margin-right: 5px;
    }
  }

  .tips {
    margin-top: 8px;
    font-size: 12px;
  }

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
    .navrid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      margin-top: 45px;
      color: black;
      .dtt {
        height: 1px;
        border-bottom: 1px #c7caca solid;
        margin: 0 30px;
        flex: 1;
      }
    }
  }
}
</style>
