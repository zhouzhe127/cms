<template>
  <TfrDialog
    v-model="visible"
    width="375px"
    class="update-choose-dialog"
    :is-close="false"
    :header-less="false"
    :append-to-body="true"
  >
    <template #header> SYNCHRONIZED </template>
    <div class="animate-svg">
       <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_zw5fzhuo.json"
          style="width: 100px; height: 100px; margin: 0 auto"
          loop
          autoplay
        ></lottie-player>
    </div>
    <div class="text-tip">Contents in sync. There's nothing to publish.</div>
    <template #footer>
      <TfrButton type="normal" :board="false" @click="onOK">OK</TfrButton>
    </template>
  </TfrDialog>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
interface IProps {
  visible: boolean
}

withDefaults(defineProps<IProps>(), {
  visible: true
})

const emits = defineEmits(['confirm'])

const onOK = () => {
  emits('confirm')
}
</script>

<style lang="scss">
.update-choose-dialog {
  .el-dialog__header {
    text-align: center;
    padding-top: 0;
    padding-bottom: 50px;
  }
  .animate-svg {
    // width: 100px;
    // height: 100px;
    // background-color: #f8f8f8;
    margin: 0 auto;
  }
  .text-tip {
    font-family: 'Brown Light', serif;
    font-size: 14px;
    text-align: center;
    margin: 30px 0px;
  }
}
</style>
