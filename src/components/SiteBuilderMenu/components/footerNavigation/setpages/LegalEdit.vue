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
            v-model="ruleForm.region_code"
            :has-border="false"
            width="100%"
          >
            <el-option
              v-for="zone in countryList"
              :key="zone.region_code"
              :value="zone.region_code"
              :label="zone.region_name"
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
          <tfr-input
            v-model="ruleForm.title"
            placeholder="NEW POLICY"
            width="100%"
          />
        </el-form-item>
        <el-form-item label="Slug" prop="slug">
          <tfr-input
            v-model="ruleForm.slug"
            placeholder="/new-poilcy"
            width="100%"
          />
          <span class="tips"> The unique location slug for this page. </span>
        </el-form-item>
        <el-form-item label="Policy Body" prop="body">
          <tfr-editor v-model="ruleForm.body" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRaw } from 'vue'
import TfrEditor from '@/components/TfrEditor/index.vue'
import { getRegionList, pageContentUpdate } from '@/api/siteBuilder/footer'
import { RegionItem } from '@/api/marketing.type'
import { useRoute } from 'vue-router'
import { PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'

const route = useRoute()

interface Props {
  close?: Function
}

const props = withDefaults(defineProps<Props>(), {
  close: () => {}
})

const ruleForm = ref({
  region_code: '',
  region_name: '',
  slug: '',
  title: '',
  body: ''
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
  body: {
    required: true,
    message: ' ',
    trigger: 'blur'
  }
}

const countryList = ref<RegionItem[]>([])
onMounted(async () => {
  const list: any = await getRegionList({ keyword: '' })
  countryList.value = list
  if (!countryList.value) {
    countryList.value = [
      { region_code: 'all', region_name: 'All Region', checked: false },
      ...list
    ]
  }
  ruleForm.value.region_code = countryList.value[0].region_code
})

const ruleFormNode = ref()
const confirm = async () => {
  try {
    const allVaild = await ruleFormNode.value.validate()
    if (allVaild) {
      const regionItem = countryList.value.filter(
        (item: RegionItem) => item.region_code === ruleForm.value.region_code
      )
      ruleForm.value.region_name = regionItem[0]?.region_name || ''
      await pageContentUpdate({
        page_type: PAGE_SELECT.POLICY.toLocaleLowerCase(),
        id: <string>route.query.id,
        legal: toRaw(ruleForm.value)
      })
      if (props.close) props.close()
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
}
</style>
