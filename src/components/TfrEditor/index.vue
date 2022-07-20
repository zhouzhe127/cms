<template>
  <editor
    ref="toastuiEditor"
    :initial-value="editorValue"
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
  editorValue: string
  placeholder: string
}

const editorProps = withDefaults(defineProps<PropsType>(), {
  editorValue: '', // 默认值
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
const editorEmits = defineEmits(['update:editorValue'])
// const editorText = ref('')
const toastuiEditor = ref<any>(null)

const editorValue = computed({
  get: () => editorProps.editorValue,
  set: newEditorValue => {
    editorEmits('update:editorValue', newEditorValue)
  }
})
const editorChange = () => {
  const html = toastuiEditor.value.invoke('getHTML')
  console.log(toastuiEditor.value)
  editorEmits('update:editorValue', html)
}
</script>

<style lang="scss" scoped></style>
