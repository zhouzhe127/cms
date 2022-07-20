<template>
  <div class="shelvebox">
    <CmsEdit :options="['edit_cms', 'add_white']" @optionClick="edit">
      <div>
        <div class="bar">
          <span class="text">LATEST</span>
          <span>SEE ALL</span>
        </div>
        <div class="gridbox">
          <div
            v-for="(item, index) in basic.properties"
            :key="index"
            class="citem"
          >
            <ShelveUI :site="site" :child-site="index" />
          </div>
        </div>
      </div>
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import { ComponentsSchema } from '@/views/homePage/type/index'
import CmsEdit from '@/components/CmsEdit/index.vue'
import appStore from '@/store'
import ShelveUI from './ShelveUI.vue'
interface Props {
  site?: number
  basic?: ComponentsSchema
}
const props = withDefaults(defineProps<Props>(), {
  site: 0,
  basic: () => ({
    componentName: '',
    properties: []
  })
})
const edit = (index: number): void => {
  if (index === 1) {
    openedit()
  }
}
const openedit = () => {
  const l = props.basic.properties?.length || 0
  appStore.setBuilder.pageState.addChildModle(
    {
      componentName: 'shelf'
    },
    props.site,
    l - 1
  )
}
</script>

<style lang="scss" scoped>
.shelvebox {
  padding: 12px 68px;
  .bar {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      font-size: 18px;
    }
  }
  .gridbox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>
<style lang="scss">
.mobile_platform {
  .shelvebox {
    padding: 12px 10px;
    .gridbox {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
.tablet_platform {
  .shelvebox {
    padding: 12px 10px;
    .gridbox {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
