<template>
  <TfrDialog v-model="showWin" width="730px" class="folder" @before-close="closeWin">
    <div>
      <div class="title">{{ title }}</div>
      <slot ref="formNode" />
    </div>
    <div slot="footer">
      <div class="footerbox">
        <div>
          <tfr-button class="btn" @click="closeWin">CANCEL</tfr-button>
        </div>
        <div>
          <tfr-button
            class="btn black"
            :loading="rightBtnLoading"
            @click="clickRightBtn"
            >SAVE</tfr-button>
        </div>
      </div>
    </div>
  </TfrDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import generalwin from '@/views/homePage/generalwin'
interface Props {
  title?: string,
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
})
const Emits = defineEmits(['confirm'])

const { showWin, closeWin } = generalwin()
const rightBtnLoading = ref(false)
const formNode = ref<any>(false)
const clickRightBtn = async () => {
  Emits('confirm')
}
</script>

<style lang="scss" scoped>
.folder {
  .container {
    color: black;
    .title {
      padding: 20px 0;
    }
  }
  .footerbox {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    line-height: 50px;
    .btn {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: #f8f8f8;
      color: black;
      cursor: pointer;
    }
    .black {
      background-color: $theme;
      color: #ffffff;
    }
  }
}
</style>