<template>
  <div class="update-menu">
    <header>
      <TfrButton type="normal" :class="'btn'">PREVIEW</TfrButton>
      <div style="width: 10px"></div>
      <TfrButton
        :type="isPublishCheck ? 'primary' : 'normal'"
        :class="'btn'"
        @click="onPublish"
        >PUBLISH</TfrButton
      >
    </header>
    <EdgeInput v-model="searchStr" placeholder="SEARCH" width="100%" />
    <CheckCard :search="searchStr" />
    <PublishCard :search="searchStr" />
    <ChooseDialog :visible="chooseVisible" :close-on-click-modal="false" @confirm="onChooseClick" />
    <PublishDialog
      :visible="publishVisible"
      :close-on-click-modal="false"
      @check="onChooseClick"
      @down="onChooseClick"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import store from '@/store'
import EdgeInput from '@/components/TfrInput/EdgeInput.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import CheckCard from '@/components/UpdateMenu/components/CheckCard.vue'
import PublishCard from '@/components/UpdateMenu/components/PublishCard.vue'
import ChooseDialog from './components/ChooseDialog.vue'
import PublishDialog from './components/PublishDialog.vue'
import { batchPublish } from '@/api/update'

const updateStore = store.upadte
const chooseVisible = ref<boolean>(false)
const publishVisible = ref<boolean>(false)
const searchStr = ref<string>("")
const isPublishCheck = computed(
  () => updateStore.basic.checkCardList.length > 0
)

onMounted(() => {
  updateStore.publishGetList()
})

const onPublish = async () => {
  if (updateStore.basic.checkCardList.length === 0) {
    chooseVisible.value = true
    return 
  }
  const publishList = updateStore.basic?.checkCardList?.map((item) => <string>item.code) || []
  await batchPublish(publishList)
  await updateStore.publishGetList()
  chooseVisible.value = false
  publishVisible.value = true
}

const onChooseClick = () => {
  chooseVisible.value = false
  publishVisible.value = false
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  .btn {
    flex: 1;
  }
}

::v-deep(.edge) {
  margin-bottom: 10px;
}
</style>
