<template>
  <div class="container">
    <div>
      <CmsEdit :options="['edit_cms', 'add_white']">
        <div class="shelve">
          <div class="imgbox"></div>
          <div class="footbox">
            <div class="barbox">
              <div class="baritem active" />
              <div class="baritem" />
              <div class="baritem" />
            </div>
            <div class="cl">Available in # colors</div>
            <div class="me">product name</div>
            <div class="cl">Brand Name</div>
            <div>Rsp 0000</div>
          </div>
        </div>
      </CmsEdit>
    </div>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import appStore from '@/store'
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
      componentName: SITE_MODULES.SHELVE,
      properties: [
        {
          componentName: SITE_MODULES.SHELVE
        }
      ]
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
  .shelve {
    width: 406px;
    border: 1px black dashed;
    .imgbox {
      height: 406px;
      background-color: #f8f8f8;
    }
    .footbox {
      padding: 8px;
      .barbox {
        display: flex;
        .baritem {
          height: 5px;
          background-color: #e2e3e3;
          flex: 1;
          margin-right: 5px;
          &:last-child {
            margin-right: initial;
          }
        }
      }
      .cl {
        font-size: 12px;
        font-family: 'Brown Light', serif;
        margin: 10px 0;
      }
    }
  }
}
</style>
