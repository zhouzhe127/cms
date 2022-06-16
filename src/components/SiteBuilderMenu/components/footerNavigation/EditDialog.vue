<template>
  <TfrDialog
    :close-on-click-modal="false"
    class="link-show-modal"
    v-model="editVisible"
    :width="props.width"
    :header-less="false"
    :isClose="true"
    @before-close="onCancel"
    append-to-body 
  >
  <template #header>
    <header>
      <span v-if="!isDelete">LINK</span> <span v-else> Delete XXX</span>
    </header>
  </template>
    <div class="body">
      <LinkShowCon />
    </div>
    <template #footer>
      <footer v-if="!isDelete">
        <TfrButton type="gray" :class="'btn'" @click="isDelete = true"
          >DELETE</TfrButton
        >
        <div style="width: 10px"></div>
        <TfrButton type="primary" :class="'btn'" @click="onEdit"
          >EDIT</TfrButton
        >
      </footer>
      <footer v-else>
        <TfrButton type="gray" :class="'btn'" @click="isDelete = false"
          >CANCEL</TfrButton
        >
        <div style="width: 10px"></div>
        <TfrButton type="danger" :class="'btn'" @click="onDelete"
          >DELETE</TfrButton
        >
      </footer>
    </template>
  </TfrDialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import LinkShowCon from './LinkShowCon.vue'

const emit = defineEmits(['cancel', 'confirm', 'delete'])

interface IProps {
  visible: boolean
  width: string
}

const props = withDefaults(defineProps<IProps>(), {
  visible: true
})

const isDelete = ref(false)
const editVisible = ref(props.visible)

watch(
  () => props.visible,
  () => {
    editVisible.value = props.visible
    if (props.visible === true) isDelete.value = false
  }
)

const onCancel = () => {
  emit('cancel')
}

const onEdit = () => {
  emit('confirm')
}

const onDelete = () => {
  emit('delete')
}
</script>

<style lang="scss" scoped>
.link-show-modal {
  & .el-dialog__body {
    .body {
      margin-top: 10px;
      // header {
      //   height: 40px;
      //   line-height: 40px;
      //   margin-top: 0px;
      // }
    }
  }
}
</style>
