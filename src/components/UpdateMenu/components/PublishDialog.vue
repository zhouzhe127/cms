<template>
  <TfrDialog
    v-model="visible"
    width="750px"
    class="publish-dialog"
    :is-close="false"
    :header-less="false"
    :append-to-body="true"
    :is-no-padding="true"
  >
    <template #header> PUBLISH </template>
    <div class="header-icon">
      <div class="animate-svg">
        缺个对勾SVG
      </div>
      <hr />
    </div>
    <div class="item-con">
      <div class="item" v-for="item in [1,2,3,4,5]">
        <div class="tag">RC</div>
       <PageListItem :no-icon="true"></PageListItem> 
      </div>
    </div>
    <template #footer>
      <TfrButton type="normal" :board="false" @click="emits('check')">CHECK LIVE SITE</TfrButton>
      <TfrButton type="primary" @click="emits('down')"> DONE </TfrButton>
    </template>
  </TfrDialog>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
import PageListItem from '@/components/PageListItem/index.vue'

interface IProps {
  visible: boolean
}

withDefaults(defineProps<IProps>(), {
  visible: true
})

const emits = defineEmits(['check', 'down'])
</script>
<style lang="scss">
  .item-con {
    padding: 20px
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tag {
    border-radius: 50%;
    background-color: #fff;
    padding: 10px;
    display: inline-block;
    flex-shrink: 0;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
    margin-left: 5px;
  }
</style>

<style lang="scss">
.publish-dialog {
  background-color: $bg;
  .el-dialog__header {
    text-align: center;
    padding-top: 15px;
    padding-bottom: 30px;
  }
  .header-icon {
    width: 100%;
    padding: 0 20px;
    hr {
      background-color: #efefef;
      height: 1px;
      margin-top: 30px;
    }
  }
  .animate-svg {
    width: 100px;
    height: 100px;
    background-color: #f8f8f8;
    margin: 0 auto;
  }
  .text-tip {
    font-family: 'Brown Light', serif;
    font-size: 14px;
    text-align: center;
    margin: 30px 0px;
  }

  .el-dialog__footer {
    background-color: #fff;
    padding: 15px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
