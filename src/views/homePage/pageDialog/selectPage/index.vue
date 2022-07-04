<template>
  <div>
    <TfrDialog
      v-model="showWin"
      width="336px"
      append-to-body
      class="page-add-dialog"
      :is-close="false"
      @close="onClose"
    >
      <div class="type-list">
        <ul>
          <li
            v-for="(item, index) in listArr"
            :key="index"
            @click="addpage(item)"
          >
            <svg-icon :icon-class="item.icon" />
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
import store from '@/store'
import { navigationCreate } from '@/api/siteBuilder/navigation'
import { PAGE_ICONS, PAGE_SELECT } from './index.type'
import { SideItem } from '@/components/SiteBuilderMenu/type/index'
import generalwin from '@/views/homePage/generalwin'
import { useRoute } from 'vue-router'
import { emitSideEvent } from '@/components/SiteBuilderMenu/utils/regesterEvent'
const route = useRoute()
const origin = route.query.origin as string
const sideEmit = emitSideEvent(origin)
// import { addFunc as addNavigateFun } from '@/store/setBuilder/sidebar';
// import { addFunc as addFooterFun } from '@/store/setBuilder/footerNavigation';
const { showWin, closeWin } = generalwin()
// const callback = store.setBuilder.basic.selectPageCallback
// const setBuilder = store.setBuilder
const listArr = [
  {
    title: PAGE_SELECT.PAGE,
    type: PAGE_SELECT.PAGE,
    icon: PAGE_ICONS[PAGE_SELECT.PAGE]
  },
  {
    title: PAGE_SELECT.ARTICLE,
    type: PAGE_SELECT.ARTICLE,
    icon: PAGE_ICONS[PAGE_SELECT.ARTICLE]
  },
  {
    title: PAGE_SELECT.PLP,
    type: PAGE_SELECT.PLP,
    icon: PAGE_ICONS[PAGE_SELECT.PLP]
  },
  {
    title: PAGE_SELECT.LINK,
    type: PAGE_SELECT.LINK,
    icon: PAGE_ICONS[PAGE_SELECT.LINK]
  },
  {
    title: PAGE_SELECT.CLIP,
    type: PAGE_SELECT.CLIP,
    icon: PAGE_ICONS[PAGE_SELECT.CLIP]
  },
  {
    title: PAGE_SELECT.FOLDER,
    type: PAGE_SELECT.FOLDER,
    icon: PAGE_ICONS[PAGE_SELECT.FOLDER]
  },
  {
    title: PAGE_SELECT.SMART,
    type: PAGE_SELECT.SMART,
    icon: PAGE_ICONS[PAGE_SELECT.SMART]
  }
]
const onClose = () => {
  closeWin()
}
const addpage = async (item: SideItem) => {
  await navigationCreate({
    location: origin,
    content_type: item.title,
  })
  if (sideEmit) sideEmit(origin, { ...item, ...route.query })
  showWin.value = false
}
</script>

<style lang="scss" scoped>
.page-add-dialog {
  .type-list {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        font-size: 12px;
        cursor: pointer;
        opacity: 0.5;
        .svg-icon {
          font-size: 30px;
          margin-bottom: 10px;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
