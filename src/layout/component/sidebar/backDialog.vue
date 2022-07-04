<template>
  <tfr-dialog
    v-model="visibleDialog"
    width="335px"
    :header-less="false"
    :append-to-body="true"
    class="back-dialog"
    @beforeClose="cancelHandle"
  >
    <template #header>
      <div>UNSAVE CHANGES</div>
    </template>
    <div class="content">
      <span><svg-icon icon-class="warning" /></span>
      <span>If you leave this page,any unsaveed changes will be lost.</span>
    </div>
    <template #footer>
      <tfr-button type="gray" @click="cancelHandle">CANCEL</tfr-button>
      <tfr-button type="danger" @click="confirmHandle">LEAVE</tfr-button>
    </template>
  </tfr-dialog>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import { computed } from 'vue'
interface PropsType {
  visible: boolean
}

const dialogProps = withDefaults(defineProps<PropsType>(), {
  visible: false // 默认值
})
const dialogEmits = defineEmits(['update:visible', 'confirmHandle'])

const visibleDialog = computed({
  get: () => dialogProps.visible,
  set: (newVisible: boolean) => {
    dialogEmits('update:visible', newVisible)
  }
})
const cancelHandle = () => {
  visibleDialog.value = false
}

const confirmHandle = () => {
  dialogEmits('confirmHandle')
}
</script>

<style lang="scss">
.back-dialog {
  .content {
    svg {
      font-size: 20px;
      display: block;
    }
    padding: 10px;
    margin-bottom: 20px;
    word-break: break-word;
    display: flex;
    & span:last-of-type {
      margin-left: 10px;
    }
  }
}
</style>
