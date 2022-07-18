<template>
  <div>
    <draggable v-model="complist" v-bind="dragOptions" :component-data="{ tag: 'div', name: 'flip-list', type: 'transition', sideState: SITE_MENUS.NAVIGATION }" group="side" item-key="title" @start="isDragging = true" @end="onEndCallback">
      <template #item="{element, index}">
        <ItemChild
          :active="element.navigation.isActive"
          :title="element.navigation.name"
          @clickItem="clickItem(element)"
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
interface Props {
  draglist?: Array<string>,
  parentId: string | number,
  reset?: Function
}
const props = withDefaults(defineProps<Props>(), {
  draglist: () => [],
  reset: () => {},
  parentId: ''
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
const clickItem = (element) => {
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
</script>

<style scoped>

</style>