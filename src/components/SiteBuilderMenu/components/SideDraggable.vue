<template>
  <draggable
    v-model="sidearr"
    v-bind="dragOptions"
    :component-data="{ tag: 'div', name: 'flip-list', type: 'transition', sideState: name }"
    filter=".ignoreElements"
    group="side"
    item-key="title"
    @start="isDragging = true"
    @change="draggableChange"
  >
    <template #item="{element, index}">
      <div :class="{
        ignoreElements: element.disable
      }">
        <slot :element="element" :index="index" :dragSetSide="dragSetSide" />
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref, computed } from 'vue'
import store from '@/store'
import { setChangePosition } from '@/components/SiteBuilderMenu/utils/common'
const isDragging = ref(false)
interface Props {
  list?: Array<Object>
  name?: string
  addFunc?: symbol
}
const props = withDefaults(defineProps<Props>(), {
  name: '',
  list: () => ([]),
  addFunc: Symbol()
})
const setBuilder = store.setBuilder
const setActiveSide = store.setBuilder.setActiveSide
const dragOptions = computed(() => {
  return {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost'
  }
})
const sidearr = computed({
  get() {
    // @ts-ignore
    return setBuilder.sideState[props.name].sidebarArr
  },
  set(value: any) {
    dragSetSide(value)
  }
})
const dragSetSide = (value: any, parentId?: string) => {
  if(parentId) {
    sidearr.value.forEach((v: any) => {
      if (v.navigation.id === parentId) {
        v.sub_navigation = value.map((cd: any) => {
          cd.parent_code = v.navigation.code
          return cd
        })
        const cd = value.filter((s: any) => s.navigation.isActive)
        if (cd[0]) setActiveSide([v.id, cd[0].id])
      }
    })
  } else {
    const arr = value.map((v:any) => {
      v.navigation.parent_code = ''
      return v
    })
    // @ts-ignore
    setBuilder.sideState[props.addFunc](arr)
  }
}
const draggableChange = (e:any) => {
  setChangePosition(e, props.name)
}
</script>

<style scoped>

</style>