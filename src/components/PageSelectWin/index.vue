<template>
  <div>
    <TfrDialog v-bind="$attrs" width="336px" append-to-body class="page-add-dialog" :is-close="false">
      <div class="type-list">
        <ul>
          <li v-for="(item, index) in listArr" :key="index" @click="addpage(item)">
            <svg-icon :icon-class="item.icon"/>
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import store from '@/store'
import { PAGE_ICONS, PAGE_SELECT } from './index.type';
import { SideItem } from '@/components/SiteBuilderMenu/type/index'
const addSidebar = store.setBuilder.sideState.addSidebar
const listArr = [
  {
    title: PAGE_SELECT.PAGE,
    icon: PAGE_ICONS[PAGE_SELECT.PAGE]
  },
  {
    title: PAGE_SELECT.ARTICLE,
    icon: PAGE_ICONS[PAGE_SELECT.ARTICLE]
  },
  {
    title: PAGE_SELECT.PLP,
    icon: PAGE_ICONS[PAGE_SELECT.PLP]
  },
  {
    title: PAGE_SELECT.LINK,
    icon: PAGE_ICONS[PAGE_SELECT.LINK]
  },
  {
    title: PAGE_SELECT.CLIP,
    icon: PAGE_ICONS[PAGE_SELECT.CLIP]
  },
  {
    title: PAGE_SELECT.FOLDER,
    icon: PAGE_ICONS[PAGE_SELECT.FOLDER]
  },
  {
    title: PAGE_SELECT.SMART,
    icon: PAGE_ICONS[PAGE_SELECT.SMART]
  }
]
const emit = defineEmits(['update:modelValue'])
const addpage = (item: SideItem) => {
  addSidebar({
    title: 'New Custom',
    icon: item.icon
  })
  emit('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
.page-add-dialog{
  .type-list{
    ul{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      li{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding:10px;
        font-size:12px;
        cursor: pointer;
        opacity: 0.5;
        .svg-icon{
          font-size:30px;
          margin-bottom: 10px;
        }
        &:hover{
          opacity: 1;
        }
      }
    }

  }
}
</style>
