<template>
  <div>
    <draggable
      v-model="complist"
      v-bind="dragOptions"
      :component-data="{
        tag: 'div',
        name: 'flip-list',
        type: 'transition',
        sideState: SITE_MENUS.NAVIGATION
      }"
      group="side"
      item-key="title"
      @start="isDragging = true"
      @end="onEndCallback"
      @change="draggableChange"
    >
      <template #item="{ element, index }">
        <ItemChild
          :title="element.navigation.name"
          :active="element.navigation.isActive"
          :center-icon="
            element.navigation.icon ||
            PAGE_ICONS[element.navigation.content_type]
          "
          @clickItem="clickItem(element)"
          @right-click="emits('rightClick', element.navigation)"
          @left-click="emits('leftClick', element.navigation)"
        />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref, computed } from 'vue'
import { SITE_MENUS } from '../type'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
import store from '@/store'
import { PAGE_ICONS } from '@/views/homePage/pageDialog/selectPage/index.type'
import { setChangePosition } from '@/components/SiteBuilderMenu/utils/common'

interface Props {
  draglist?: Array<string>
  parentId: string | number
  parentCode: string
  reset?: Function,
  name?: string
}
const props = withDefaults(defineProps<Props>(), {
  draglist: () => [],
  reset: () => {},
  parentId: '',
  parentCode: '',
  name: ''
})
const setActiveSide = store.setBuilder.setActiveSide
const isDragging = ref(false)
const dragOptions = computed(() => {
  return {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost'
  }
})
const emits = defineEmits(['rightClick', 'leftClick'])
const clickItem = (element: any) => {
  setActiveSide([props.parentId, element.navigation.id])
}
const complist = computed({
  get() {
    return props.draglist
  },
  set(value: any) {
    if (props.reset) props.reset(value, props.parentId)
  }
})
const onEndCallback = (evt: any) => {
  isDragging.value = false
}
const draggableChange = (e:any) => {
  setChangePosition(e, props.name, props.parentCode)
}
</script>

<style scoped></style>
