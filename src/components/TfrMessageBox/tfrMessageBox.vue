<template>
  <div>
    <TfrDialog
      :close-on-click-modal="false"
      v-model="curVisible"
      :width="props.width"
      :isClose="true"
    >
      <div class="body">
        <header>
          <div v-if="!props.dangerouslyTitleHTMLString">{{ props.title }}</div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-else v-html="props.title"></div>
        </header>
        <div class="content">
          <div class="left-icon">
            <svg-icon icon-class="warn" />
          </div>
          <div class="message">
            <div v-if="!props.dangerouslyContentHTMLString">
              {{ props.message }}
            </div>
            <div v-else>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-html="props.message"></span>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <footer>
          <div v-if="!showCancelBtn" class="btn cancel" @click="onCancel">
            {{ props.cancelButtonText }}
          </div>
          <div style="width: 10px"></div>
          <div class="btn confirm" @click="onDelete">
            {{ props.confirmButtonText }}
          </div>
        </footer>
      </template>
    </TfrDialog>
  </div>
</template>

<script lang="ts" setup>
import TfrDialog from '@/components/TfrDialog/index.vue'
import { defineEmits, onMounted, ref, nextTick } from 'vue'
import { MESSAGE_BOX_VARIANTS } from './tfrMessageBox'
const emit = defineEmits(['action', 'vanish'])

interface IProps {
  visible?: boolean
  title: string
  message: string
  cancelButtonText?: string
  confirmButtonText?: string
  width?: string
  dangerouslyContentHTMLString?: boolean
  dangerouslyTitleHTMLString?: boolean
  showCancelBtn?: boolean
  boxType?: typeof MESSAGE_BOX_VARIANTS[number]
}

const props = withDefaults(defineProps<IProps>(), {
  visible: true,
  title: 'Title',
  message: 'Place confirm you setting!',
  cancelButtonText: 'CANCEL',
  confirmButtonText: 'OK',
  width: '375px',
  dangerouslyContentHTMLString: false,
  dangerouslyTitleHTMLString: false
})

const curVisible = ref<Boolean>(props.visible)
const action = ref<string>()
// watchEffect(() => {
//   if (curVisible.value !== props.visible) curVisible.value = props.visible
// })

onMounted(async () => {
  await nextTick()
})

const doClose = () => {
  if (!curVisible.value) return
  curVisible.value = false
  nextTick(() => {
    if (action.value) emit('action', action.value)
    setTimeout(() => {
      emit('vanish')
    }, 1000)
  })
}

const onCancel = () => {
  action.value = 'cancel'
  doClose()
}

const onDelete = () => {
  action.value = 'confirm'
  doClose()
}
</script>
<style lang="scss" scope>
.body header {
  margin-top: 14px;
}

.content {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  .message {
    margin-left: 5px;
  }
}

.left-icon {
  align-items: flex-start;
  margin-right: 5px;
  svg.svg-icon {
    width: 20px;
    height: 20px;
  }
}

footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .btn {
    height: 50px;
    border: none;
    border-radius: 0;
    background-color: rgb(248, 248, 248);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 20px;
    --framer-font-family: 'Brown Regular', serif;
    --framer-font-style: normal;
    --framer-font-weight: 400;
    --framer-text-color: rgba(27, 43, 39, 1);
    --framer-font-size: 14px;
    --framer-text-decoration: none;
    cursor: pointer;
    &.confirm {
      background: rgb(236, 133, 130);
      color: #fff;
    }
  }
}
</style>
<style lang="scss">
.tfr-dialog {
  &.dialog-header-less {
    .el-dialog__footer {
      margin-top: 10px;
    }
  }
}
</style>
