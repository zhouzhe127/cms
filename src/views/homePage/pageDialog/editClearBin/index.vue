<template>
  <TfrDialog
    v-model="visible"
    :close-on-click-modal="false"
    :is-no-padding="true"
    :header-less="false"
    width="728px"
    class="clear-bin-dialog"
    append-to-body
    @before-close="handlerCancel"
  >
    <template #header>
      <div class="header">
        <span>DELETED ITEMS</span>
      </div>
    </template>
    <div class="body">
      <div class="warn-text">
        <svg-icon icon-class="warning" class="svg-warn" />
        <span
          >Restore recently deleted pages or empty trash to remove from the
          system.</span
        >
      </div>
      <section>
        <el-scrollbar>
          <div v-for="item in deleteList" class="delete-item">
            <PageListItem
              @leftClick="onRevert(item.code)"
              :title="item.name"
              :icon-name="PAGE_ICONS[item.content_type]"
              :date="item.gmt_create"
            >
              <template #icon>
                <svg-icon icon-class="delete_up" class="delete"></svg-icon>
              </template>
            </PageListItem>
          </div>
        </el-scrollbar>
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
import { onMounted, ref } from 'vue'
import { EditClearBinItem } from '@/components/PageListItem/index.type'
import { PAGE_ICONS, PAGE_SELECT } from '../selectPage/index.type'
import {
  getTrustList,
  navigationDeleteTrust,
  trustDelete
} from '@/api/siteBuilder/navigation'
import store from '@/store'

const { showWin, closeWin } = generalwin()
const visible = ref(true)
const deleteList = ref<EditClearBinItem[]>()

const getClearList = async () => {
  const data = await getTrustList()
  if (data) {
    console.log(data)
    deleteList.value = data.list
  }
}

onMounted(async () => {
  getClearList()
})

const onRevert = async (code: string) => {
  await navigationDeleteTrust({ code, deleted: 0 })
  await getClearList()
  await store.setBuilder.getSetBuilderList()
  if (deleteList.value?.length === 0) {
    closeWin()
  }
}

const handlerCancel = () => {
  closeWin()
  // Emits('cancel')
}

const handlerConfirm = async () => {
  const deletCodeList =
    deleteList.value && deleteList.value.map(item => item.code)
  if (deletCodeList && deletCodeList?.length > 0) {
    await trustDelete(deletCodeList)
  }
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
    height: 500px;
    overflow: hidden;
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
