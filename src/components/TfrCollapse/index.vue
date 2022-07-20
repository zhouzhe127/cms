<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { collapseContextKey } from './index'

interface Props {
  modelValue?: string | string[]
  accordion?: boolean //手风琴模式
}

const ensureArray = (val: string | string[] | undefined) => {
  if (!val) return []
  if (Array.isArray(val)) return val
  return [val]
}

const emit = defineEmits(['change'])
const props = defineProps<Props>()
const activeNames = ref(ensureArray(props?.modelValue))

const setActiveNames = (_activeNames: string[]) => {
  activeNames.value = _activeNames
  const value = props.accordion ? activeNames.value[0] : activeNames.value
  emit('change', value)
}

const handleItemClick = (name: string) => {
  if (props.accordion) {
    setActiveNames([
      activeNames.value[0] && activeNames.value[0] === name ? '' : name
    ])
  } else {
    const _activeNames = [...activeNames.value]
    const index = _activeNames.indexOf(name)
    if (index > -1) {
      _activeNames.splice(index, 1)
    } else {
      _activeNames.push(name)
    }
    setActiveNames(_activeNames)
  }
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})

defineExpose({
  activeNames,
  handleItemClick
})
</script>
