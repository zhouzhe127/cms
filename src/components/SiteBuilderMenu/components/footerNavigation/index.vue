<template>
  <div>
    <SideMenu title="FOOTER" @add-click="addPage">
      <draggable
        v-model="sidearr"
        v-bind="dragOptions"
        :component-data="{
          tag: 'div',
          name: 'flip-list',
          type: 'transition',
          sideState: SITE_MENUS.FOOTER
        }"
        draggable=".drag-item"
        group="side"
        item-key="title"
        @start="isDragging = true"
        @end="onEndCallback"
      >
        <template #item="{ element, index }">
          <MenuItem
            :class="{ 'drag-item': element.navigation.content_type !== PAGE_SELECT.LEGAL }"
            :title="element.navigation.name"
            :has-child="element.navigation.hasChild"
            :key="index"
            :is-empty="element.sub_navigation && element.sub_navigation.length <= 0"
            :center-icon="isLegal(element.navigation) ? PAGE_ICONS[PAGE_SELECT.LEGAL] : element.navigation.icon"
            :active="element.navigation.isActive"
            :has-left-icon="!isLegal(element.navigation)"
            :has-right-icon="!isLegal(element.navigation)"
            @left-click="() => deleteItem(element.navigation)"
            @right-click="() => chickEditWin(element.navigation)"
            @add="() => onAdd(element.navigation)"
          >
            <nested-draggable
              :draglist="element.sub_navigation"
              :parentId="element.navigation.id"
              :reset="dragSetSide"
              @right-click="(item) => chickEditWin(item, element.navigation.id)"
              @left-click="(item) => deleteItem(item, element.navigation.id)"
            ></nested-draggable>
            <DeleteDialog :visible="false" />
          </MenuItem>
        </template>
      </draggable>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import {
  emitSideEvent,
  onSideEvent
} from '@/components/SiteBuilderMenu/utils/regesterEvent'
import { computed, ref } from 'vue'
import draggable from 'vuedraggable'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import { EVENT_KEY, SideItem, SITE_MENUS } from '../../type'
import {
  addChildFunc,
  addFunc,
  deleteFunc
} from '@/store/setBuilder/footerNavigation'
import DeleteDialog from './DeleteDialog.vue'
import { toSeletPage, toEditionModel } from '../../utils/router'
import store from '@/store'
import { showDeleteModel } from '../../utils/deleteUtils'
import { isLegal } from './utils'
import {
  PAGE_ICONS,
  PAGE_SELECT
} from '@/views/homePage/pageDialog/selectPage/index.type'
import NestedDraggable from '../NestedDraggable.vue'
import { navigationCreate } from '@/api/siteBuilder/navigation'

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost'
  }
})
const isDragging = ref(false)
const setBuilder = store.setBuilder
onSideEvent(SITE_MENUS.FOOTER, (e: string, item: any) => {
  switch (item.title) {
    case PAGE_SELECT.PAGE:
      setBuilder.pageState.addNewPage(item)
      break
    case PAGE_SELECT.PLP:
      setBuilder.pageState.addNewPlp()
      break
    case PAGE_SELECT.ARTICLE:
      setBuilder.pageState.addNewArticle()
      break
    case PAGE_SELECT.HOME:
    case PAGE_SELECT.CLIP:
      setBuilder.pageState.addHomePage()
      break
  }
  // if (item.parentId) {
  //   setBuilder.sideState[addChildFunc](decodeURIComponent(item.parentId))(item)
  //   return
  // }
  // setBuilder.sideState[addFunc](item)
})
onSideEvent(EVENT_KEY.DRAG, (e: string, item: any) => {
  if (item.newModule === SITE_MENUS.FOOTER)
    setBuilder.sideState[addFunc](item.item, item.newIndex)
})
const onEndCallback = (evt: any) => {
  isDragging.value = false
  const item = {
    ...sidearr.value[evt.oldIndex]
  }
  setBuilder.sideState[deleteFunc](item)
  const dragEmit = emitSideEvent(EVENT_KEY.DRAG)
  if (dragEmit)
    dragEmit(EVENT_KEY.DRAG, {
      item,
      newIndex: evt.newIndex,
      oldModule: SITE_MENUS.FOOTER,
      newModule: evt.to.getAttribute('sideState')
    })
}
const sidearr = computed({
  get() {
    return store.setBuilder.sideState[SITE_MENUS.FOOTER].sidebarArr
  },
  set(value: any) {
    dragSetSide(value)
  }
})
const dragSetSide = (value: any, parentId?: string) => {
  if (parentId) {
    sidearr.value.forEach((v: any) => {
      if (v.navigation.id === parentId) {
        v.sub_navigation = value
      }
    })
  } else {
    setBuilder.sideState[addFunc](value)
  }
}
const addPage = () => {
  toSeletPage({
    origin: SITE_MENUS.FOOTER
  })
}
const chickEditWin = (item: SideItem, pid?: string) => {
  toEditionModel(item)
}
const deleteItem = (item: SideItem, pid?: string) => {
  showDeleteModel(item, () => {
    // setBuilder.sideState[deleteFunc](item, pid)  
  })
}
const onAdd = async (item: SideItem) => {
  if (isLegal(item)) {
    const baseLegal = {
      title: 'Policy Title',
      type: PAGE_SELECT.POLICY,
      icon: PAGE_ICONS[PAGE_SELECT.POLICY]
    }
    setBuilder.sideState[addChildFunc](decodeURIComponent('Legal'))(baseLegal)
    return
  }
  toSeletPage({
    origin: SITE_MENUS.FOOTER,
    parentId: encodeURIComponent(item.id || item.title || '')
  })
}
</script>
