<template>
  <div class="container">
    <div>
      <CmsEdit :options="['edit_cms', 'add_white']">
        <div class="markdown">
          <div class="title">LOREM IPSUM</div>
          <div class="doc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </CmsEdit>
    </div>
  </div>
</template>

<script setup lang="ts">
import appStore from '@/store'
import { useRoute } from 'vue-router'
import { SITE_MODULES } from '@/views/homePage/config/pageComponents'
import CmsEdit from '@/components/CmsEdit/index.vue'

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
      componentName: SITE_MODULES.MARKDOWN,
      properties: [
        {
          componentName: SITE_MODULES.MARKDOWN
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
  .markdown {
    width: 406px;
    border: 1px black dashed;
    padding: 20px 16px;
    .title {
      font-size: 28px;
      font-family: 'Brown Bold Italic', serif;
    }
    .doc {
      margin-top: 30px;
      line-height: 18px;
      font-family: 'Brown Light Italic', serif;
    }
  }
}
</style>
