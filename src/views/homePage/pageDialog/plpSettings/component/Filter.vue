<template>
  <div v-loading="loading" class="filter">
    <TfrSelect
      v-for="item in state.seq"
      :key="item.key"
      v-model="item.selected"
      style="width: 100%"
      :placeholder="item.option_prefix"
      :has-border="false"
      @change="condSelect(item)"
    >
      <el-option
        v-for="option in state.cond[item.key]"
        :label="option.label"
        :value="option.key"
      />
    </TfrSelect>
    <div class="clear">CLEAR ALL</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import TfrSelect from '@/components/TfrSelect/index.vue'
import { productCondition } from '@/api/siteBuilder/page'
interface SEQFACE {
  key: string
  name: string
  option_prefix: string
}
const loading = ref(false)
const state = reactive<any>({
  seq: [],
  cond: {}
})
const getCondition = async () => {
  loading.value = true
  const data: any = await productCondition()
  data.seq.forEach((v: any) => {
    const c = data.cond
    if (c[v.key] && Array.isArray(c[v.key])) {
      c[v.key].forEach((s: any) => {
        s.label = `${v.option_prefix}: ${s.key}`
      })
      c[v.key].unshift({
        key: 'All',
        label: `All ${v.key}`
      })
    }
  })
  state.cond = data.cond
  state.seq = data.seq
  loading.value = false
}

const condSelect = (item: any) => {
  console.log('item: ', item)
}
const getSelected = () => {
  const sd = state.seq
  const obj = {} as any
  sd.forEach((v: any) => {
    if (v.selected) obj[v.key] = [v.selected]
  })
  return obj
}
onMounted(() => {
  getCondition()
})
defineExpose({
  getSelected
})
</script>

<style lang="scss" scoped>
::v-deep(.el-input__wrapper .el-input__inner::placeholder) {
  color: $theme;
}
.clear {
  font-size: 14px;
  color: #dfe1e1;
  margin-left: 20px;
}
</style>
