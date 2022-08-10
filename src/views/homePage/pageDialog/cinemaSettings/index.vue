<template>
  <div class="cinema">
    <SettingDialog title="CINEMA SETTINGS" @confirm="confirm">
      <div class="formbox tfr-form">
        <div v-for="(item, index) in itemArr" :key="index">
          <el-form
            :ref="ruleFormNode"
            label-width="80px"
            label-position="top"
            :model="item"
            class="tfr-form-required"
          >
            <el-form-item label="Title" prop="title" :rules="[{ required: true, message: ' ', trigger: 'blur'}]">
              <div class="optionbox">
                <tfr-input v-model="item.title" width="100%" />
              </div>
            </el-form-item>
            <el-form-item label="Content" prop="content"  :rules="[{ required: true, message: ' ', trigger: 'blur'}]">
              <div class="optionbox">
                <tfr-input v-model="item.content" width="100%" />
              </div>
            </el-form-item>
            <el-form-item label="medias">
              <TfrUpload :is-only-one="true" :picture-list="item.medias" />
            </el-form-item>
          </el-form>
        </div>
        <el-button @click="addForm">add</el-button>
      </div>
    </SettingDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import SettingDialog from '@/views/homePage/components/SettingDialog.vue'
import TfrUpload from '@/components/TfrUpload/index.vue'
import { getSite } from '@/utils/siteBuilder'
import { cloneDeep } from "lodash"
import store from '@/store'

let nodeArr = [] as any
const mateValue = {
  title: '',
  content: '',
  medias: [] as any
}
const itemArr = ref([
  { ...cloneDeep(mateValue) }
])
const ruleFormNode = (el: any) => {
  nodeArr.push(el)
}
const addForm= () => {
  nodeArr = []
  itemArr.value.push({ ...cloneDeep(mateValue) })
}
const { site, childSite } = getSite()
const confirm = () => {
  const model = {
    componentName: 'cinema',
    cinema_items: [] as any
  }
  let canSend = true
  nodeArr.forEach(async (el: any, index: number) => {
    const valid = await el.validate()
    if (!valid) canSend = false
    const medias = {
      path: itemArr.value[index].medias[0].link,
      content_type: itemArr.value[index].medias[0].content_type,
    }
    itemArr.value[index].medias = medias
  })
  if (!canSend) {
    return
  }
  model.cinema_items = itemArr
  store.setBuilder.pageState.setChildModle(model, Number(site), Number(childSite))
}
// const ruleForm = reactive({
//   title: ''
// })
// const rules = {
//   title: {
//     required: true,
//     message: ' ',
//     trigger: 'blur'
//   },
// }
</script>

<style lang="scss" scoped>
.cinema {
  .formbox {
    padding: 30px 20px;
    height: 580px;
    overflow: auto;
    .optionbox {
      width: 100%;
    }
  }
}
</style>