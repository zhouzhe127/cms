<template>
  <div class="container">
    <div>
      <CmsEdit :options="['edit_cms', 'add_white']">
        <div class="campaign">
          <div class="imgoption">Image Option</div>
          <div class="textmain">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="lorembtn">LOREM IPSUM</div>
        </div>
      </CmsEdit>
    </div>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import appStore from '@/store'
import { defineExpose } from 'vue'
import { useRoute } from 'vue-router'
import { SITE_MODULES } from '@/views/homePage/config/pageComponents'

interface Props {
  close?: Function
}
const props = withDefaults(defineProps<Props>(), {
  close: () => {}
})
const route = useRoute()
const site = route.query.site
const confirm = () => {
  appStore.setBuilder.pageState.addPageModle(
    {
      componentName: SITE_MODULES.CAMPAIGN,
      properties: [{
        componentName: SITE_MODULES.CAMPAIGN,
      }]
    },
    Number(site)
  )
  if (props.close) props.close()
}
defineExpose({
  confirm
})
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .campaign {
    width: 406px;
    height: 360px;
    border: 1px black dashed;
    background-color: #f8f8f8;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 28px;
    .imgoption {
      width: 100%;
      margin-top: 60px;
      border: 1px black dashed;
      padding: 20px 0;
      color: rgb(27, 43, 39, 0.5);
      border-radius: 8px;
    }
    .textmain {
      width: 316px;
      line-height: 18px;
      margin: 30px 0;
    }
    .lorembtn {
      padding: 17px 20px;
      border: 1px black solid;
      border-radius: 8px;
    }
  }
}
</style>
