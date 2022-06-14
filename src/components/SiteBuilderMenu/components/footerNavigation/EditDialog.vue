<template>
  <div class="link-show-modal">
    <TfrDialog
      :close-on-click-modal="false"
      v-model="editVisible"
      :width="props.width"
      :isClose="true"
      @before-close="onCancel"
    >
      
      <div class="body">
        <header>LINK</header>
        <LinkShowCon />
      </div>
      <template #footer>
        <footer>
          <TfrButton type="gray" :class="'btn'" @click="onCancel">DELETE</TfrButton>
          <div style="width: 10px"></div>
          <TfrButton type="primary" :class="'btn'" @click="onEdit">EDIT</TfrButton>
        </footer>
      </template>
    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import tfrMessage from '@/components/TfrMessageBox'
import LinkShowCon from './LinkShowCon.vue'

const emit = defineEmits(['cancel', 'confirm'])

interface IProps {
  visible: boolean
  width: string
}

const props = withDefaults(defineProps<IProps>(), {
  visible: true
})
const editVisible = ref(props.visible)

watch(() => props.visible, () => {
  editVisible.value = props.visible
})

const onCancel = () => {
  emit('cancel')
}


const onEdit = () => {
  emit('confirm')
}
</script>

<style lang="scss" scoped>
.link-show-modal {
  & ::v-deep(.el-dialog__body) {
    .body {
      & > header {
        height: 40px;
        line-height: 40px;
        margin-top: 0px;
      }
    }
  }
}

</style>
