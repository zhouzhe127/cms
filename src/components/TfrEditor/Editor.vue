<template>
  <div ref="toastuiEditor" class="tfrEditor"></div>
</template>
<script setup lang="ts">
import {
  watch,
  onMounted,
  onUnmounted,
  ref,
  defineEmits,
  defineExpose
} from 'vue'
import '@toast-ui/editor/dist/toastui-editor.css'
import Editor from '@toast-ui/editor'
interface Props {
  previewStyle?: string
  height?: string
  initialEditType?: string
  initialValue?: string
  options?: object
}
const props = withDefaults(defineProps<Props>(), {
  previewStyle: '',
  height: '',
  initialEditType: '',
  initialValue: '',
  options: () => ({})
})
const toastuiEditor = ref(null)
let editor: any = {}
const defaultValueMap: any = {
  initialEditType: 'wysiwyg',
  initialValue: '',
  height: '300px',
  previewStyle: 'vertical'
}
const eventOptions: any = {}
const emit = defineEmits(editorEvents)
editorEvents.forEach(event => {
  eventOptions[event] = (...args: any) => {
    emit(event, ...args)
  }
})
const computedOptions: any = {
  ...props.options,
  initialEditType: props.initialEditType,
  initialValue: props.initialValue,
  height: props.height,
  previewStyle: props.previewStyle,
  events: eventOptions
}

Object.keys(defaultValueMap).forEach(key => {
  if (!computedOptions[key]) {
    computedOptions[key] = defaultValueMap[key]
  }
})
const invoke = (methodName: string, ...args: any) => {
  let result = null
  if (editor[methodName]) {
    result = editor[methodName](...args)
  }
  return result
}
const getRootElement = () => {
  return toastuiEditor.value
}
onMounted(() => {
  const options = { ...computedOptions, el: toastuiEditor.value }
  editor = new Editor(options)
})
watch(
  () => props.previewStyle,
  (newValue: any) => {
    editor.changePreviewStyle(newValue)
  }
)
watch(
  () => props.height,
  (newValue: any) => {
    editor.height(newValue)
  }
)
onUnmounted(() => {
  editorEvents.forEach(event => {
    editor.off(event)
  })
  editor.destroy()
})
defineExpose({ invoke, getRootElement, toastuiEditor })
</script>
<script lang="ts">
const editorEvents = [
  'load',
  'change',
  'caretChange',
  'focus',
  'blur',
  'keydown',
  'keyup',
  'beforePreviewRender',
  'beforeConvertWysiwygToMarkdown'
]
export default {}
</script>
<style lang="scss" scoped>
.tfrEditor {
  width: 100%;
  ::v-deep(.toastui-editor-defaultUI) {
    border-radius: 8px;
    .toastui-editor-defaultUI-toolbar {
      background-color: $bg;
      border-radius: 8px 8px 0 0;
      border-bottom: none;
    }
  }
  ::v-deep(.toastui-editor-mode-switch) {
    line-height: initial !important;
    background-color: transparent;
  }
}
</style>
