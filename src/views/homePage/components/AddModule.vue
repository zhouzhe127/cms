<template>
  <div class="addmain">
    <CmsEdit :options="['add_white']" @optionClick="addModule">
      <div class="contenttext">
        <span>Add content module</span>
      </div>
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import appStore from '@/store'
import { useRouter } from 'vue-router'
const properties = appStore.setBuilder.pageState.basic.schema.properties || []
interface Props {
  site?: number,
  pageLength?: number,
}
const props = withDefaults(defineProps<Props>(), {
  site: 0,
  pageLength: 0,
})
const router = useRouter()
const addModule = () => {
  router.push({
    path: '/siteBuilder/editModules',
    query: { site: props.pageLength }
  })
}
</script>

<style lang="scss" scoped>
.addmain {
  padding: 27px 34px;
  .contenttext {
    width: 100%;
    height: 78px;
    border: 1px black dashed;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: rgba(27, 43, 39, 0.25);
      font-size: 14px;
      font-family: 'Brown Regular', serif;
    }
  }
}
</style>
