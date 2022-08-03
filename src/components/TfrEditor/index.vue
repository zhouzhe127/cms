<template>
  <editor
    ref="toastuiEditor"
    :initial-value="modelValue"
    :options="editorOptions"
    preview-style="vertical"
    v-bind="$attrs"
    @change="editorChange"
  />
</template>

<script lang="ts" setup>
import Editor from './Editor.vue'
import { ref, computed } from 'vue'

interface PropsType {
  modelValue: string
  placeholder: string
}

const editorProps = withDefaults(defineProps<PropsType>(), {
  modelValue: '', // 默认值
  placeholder: ''
})

const editorOptions = {
  minHeight: '200px',
  language: 'en-US',
  placeholder: editorProps.placeholder,
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
const editorEmits = defineEmits(['update:modelValue'])
// const editorText = ref('')
const toastuiEditor = ref<any>(null)

const modelValue = computed({
  get: () => editorProps.modelValue,
  set: newEditorValue => {
    editorEmits('update:modelValue', newEditorValue)
  }
})
const editorChange = () => {
  const html = toastuiEditor.value.invoke('getHTML')
  editorEmits('update:modelValue', html)
}
</script>

<style lang="scss" scoped></style>
