<template>
  <div>
    <TfrDialog
      :close-on-click-modal="false"
      v-model="curVisible"
      :width="props.width"
      :isClose="true"
      @before-close="onCancel"
    >
      <div class="body">
        <header>
          <div v-if="!props.dangerouslyTitleHTMLString">
            {{ isString(props.title) ? props.title : "" }}
            <span class="sec">{{ props.secTitle }}</span>
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-else v-html="props.title"></div>
        </header>
        <div class="content">
          <slot>
            <div class="base-content">
              <div class="left-icon">
                <svg-icon icon-class="warning" />
              </div>
              <div class="message">
                <div v-if="!props.dangerouslyContentHTMLString">
                  {{ isString(props.message) ? props.message : "" }}
                </div>
                <div v-else>
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <span v-html="props.message"></span>
                </div>
              </div>
            </div>
          </slot>
        </div>
      </div>

      <template #footer>
        <footer>
          <TfrButton type="gray" :class="'btn'" @click="onCancel">{{
            props.cancelButtonText
          }}</TfrButton>
          <div style="width: 10px"></div>
          <TfrButton type="danger" :class="'btn'" @click="onDelete">{{
            props.confirmButtonText
          }}</TfrButton>
        </footer>
      </template>
    </TfrDialog>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, onMounted, ref, nextTick, VNode } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import { MESSAGE_BOX_VARIANTS } from './tfrMessageBox'
import { TfrSetting } from './trrMessageBox.type';
const emit = defineEmits(['action', 'vanish'])

interface IProps {
  visible?: boolean
  title: string
  message: TfrSetting['message']
  cancelButtonText?: string
  confirmButtonText?: string
  width?: string
  dangerouslyContentHTMLString?: boolean
  dangerouslyTitleHTMLString?: boolean
  showCancelBtn?: boolean
  boxType?: typeof MESSAGE_BOX_VARIANTS[number]
  secTitle?: string
}

const props = withDefaults(defineProps<IProps>(), {
  visible: true,
  title: 'Delete',
  message: 'Place confirm you setting!',
  cancelButtonText: 'CANCEL',
  confirmButtonText: 'OK',
  width: '375px',
  dangerouslyContentHTMLString: false,
  dangerouslyTitleHTMLString: false
})

const curVisible = ref<Boolean>(props.visible)
const action = ref<string>()

const isString = (item: any) => typeof item === 'string'
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
  color: $theme;
  font-family: "Brown Regular", serif;
  .sec {
    font-size: 15px;
  }
}

.content {
  margin-top: 30px;
  .base-content {
    display: flex;
    justify-content: space-between;
    padding: 0px 30px 30px;
  }
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
