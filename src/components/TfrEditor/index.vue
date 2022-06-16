<template>
  <editor
    ref="toastuiEditor"
    :initial-value="editorText"
    :options="editorOptions"
    preview-style="vertical"
    v-bind="$attrs"
    @change="editorChange"
  />
</template>

<script lang="ts" setup>
import Editor from './Editor.vue'
import { ref } from 'vue'
const editorOptions = {
  minHeight: '200px',
  language: 'en-US',
  useCommandShortcut: true,
  usageStatistics: true,
  hideModeSwitch: false,
  toolbarItems: [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table']
  ]
}
const emit = defineEmits(['update:modelValue'])
const editorText = ref('')
const toastuiEditor = ref<any>(null)
const editorChange = () => {
  const html = toastuiEditor.value.invoke('getHTML')
  emit('update:modelValue', html)
}
</script>

<style lang="scss" scoped>
</style>
