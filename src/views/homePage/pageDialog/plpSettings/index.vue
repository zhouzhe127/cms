<template>
  <div>
    <TfrDialog
      v-model="plpVisible"
      width="730px"
      :header-less="false"
      :is-no-padding="true"
      class="plp-model"
    >
      <template #header> PLP SETTINGS </template>
      <div class="con">
        <el-form>
          <RowSetItem title="HIDE PLP" :has-padding="false">
            <TfrSwitch />
          </RowSetItem>
          <div class="tips-row">Toggle to disable PLP from public domain.</div>

          <el-form-item class="type">
            <header>TYPE</header>
            <div class="type-con">
               <TfrRadioGroup v-model="typeCheck">
                  <el-radio label="Preannouncement">Preannouncement</el-radio>
                  <el-radio label="Filter">Filter</el-radio>
                  <el-radio label="Custom">Custom</el-radio>
                </TfrRadioGroup>
            </div>
            <div class="show-type-con">
              <div v-if="typeCheck === 'Preannouncement'">Preannouncement</div>
              <div v-if="typeCheck === 'Filter'">Filter</div>
              <div v-if="typeCheck === 'Custom'">Custom</div>
            </div>
          </el-form-item>
          <RowSetItem title="Title Block" :has-padding="false">
            <TfrSwitch />
          </RowSetItem>

          
        </el-form>
      </div>

    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TfrSwitch from '@/components/TfrSwitch/index.vue'
import RowSetItem from '@/components/RowSetItem/index.vue'
import TfrRadioGroup from '@/components/TfrRadioGroup/index.vue';

const plpVisible = ref<boolean>(true)
const typeCheck = ref<string>('Preannouncement')
</script>
<style lang="scss">
.tips-row {
  margin-top: 8px;
  font-size: 14px;
  color: $theme;
  --framer-font-family: 'Brown Bold', serif;
}
.plp-model {
  .con {
    padding: 30px
  }
  .type {
    header {
      margin-top: 12px;
      margin-bottom: 6px;
      color: $theme;
    }
  }
  .type-con {
    display: block;
    width: 100%;
    background-color: $bg;
    padding: 20px;
    .el-radio {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
