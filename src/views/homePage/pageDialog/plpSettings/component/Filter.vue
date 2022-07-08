<template>
  <div class="filter">
    <TfrSelect
      style="width: 100%"
      v-for="item in AllSelect"
      :key="item.placeholder"
      :placeholder="item.placeholder"
      :has-border="false"
    >
      <el-option v-for="option in item.selectList">{{ option }}</el-option>
    </TfrSelect>
    <div class="clear">CLEAR ALL</div>
  </div>
</template>

<script lang="ts" setup>
import TfrSelect from '@/components/TfrSelect/index.vue'
const AllSelect = [
  {
    placeholder: 'ALL categories',
    selectList: ['1111']
  },
  {
    placeholder: 'ALL designers',
    selectList: ['1111']
  },
  {
    placeholder: 'ALL materials',
    selectList: ['1111']
  },
  {
    placeholder: 'ALL colors',
    selectList: ['1111']
  },
  {
    placeholder: 'ALL cuts',
    selectList: ['1111']
  },
  {
    placeholder: 'ALL clarity',
    selectList: ['1111']
  },
  {
    placeholder: 'ALL carats',
    selectList: ['1111']
  },
  {
    placeholder: 'ALL prices',
    selectList: ['1111']
  }
]
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
