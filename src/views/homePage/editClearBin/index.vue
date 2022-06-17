<template>
  <TfrDialog
    :close-on-click-modal="false"
    v-model="visible"
    :is-no-padding="true"
    :headerLess="false"
    width="728px"
    class="clear-bin-dialog"
    @before-close="handlerCancel"
    append-to-body
  >
    <template #header>
      <div class="header">
        <span>DELETED ITEMS</span>
      </div>
    </template>
    <div class="body">
      <div class="warn-text">
        <svg-icon icon-class="warn" class="svg-warn" />
        <span
          >Restore recently deleted pages or empty trash to remove from the
          system.</span
        >
      </div>
      <section>
        <div class="delete-item" v-for="item in [1, 2, 3, 4, 5, 6]">
          <PageListItem>
            <template #icon>
              <svg-icon icon-class="delete_up" class="delete"></svg-icon>
            </template>
          </PageListItem>
        </div>
      </section>
    </div>
    <template #footer>
      <footer>
        <TfrButton type="gray" @click="handlerCancel"> CANCEL </TfrButton>
        <TfrButton type="danger" @click="handlerConfirm"> CLEAR BIN</TfrButton>
      </footer>
    </template>
  </TfrDialog>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
import PageListItem from '@/components/PageListItem/index.vue'
import generalwin from '@/views/homePage/generalwin'
import { ref } from 'vue'

const { showWin, closeWin } = generalwin()
const visible = ref(true)

// const Emits = defineEmits(['cancel', 'confirm'])

const handlerCancel = () => {
  closeWin()
  // Emits('cancel')
}

const handlerConfirm = () => {
  closeWin()
  // Emits('confirm')
}
</script>

<style lang="scss" scoped>
.warn-text {
  padding: 10px 20px 20px;
  color: $theme;
  .svg-warn {
    width: 20px;
    height: 20px;
  }
  & > span {
    margin-left: 5px;
    vertical-align: top;
    font-weight: 300;
  }
}
.body {
  section {
    width: 100%;
    background-color: #f8f8f8;
    padding: 20px;
    .delete {
      width: 30px;
      height: 30px;
      fill: #fc7e7e;
    }
  }
}
footer {
  padding: 20px;
}
</style>
<style lang="scss">
.clear-bin-dialog {
  .el-dialog__header {
    padding-top: 32px;
    margin-bottom: 0px;
  }
}
</style>
