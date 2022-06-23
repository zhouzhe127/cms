<template>
  <div class="update-menu">
    <header>
      <TfrButton type="normal" :class="'btn'">PREVIEW</TfrButton>
      <div style="width: 10px"></div>
      <TfrButton type="primary" :class="'btn'" @click="onPublish">PUBLISH</TfrButton>
    </header>
    <EdgeInput placeholder="SEARCH" width="100%" />
    <CheckCard />
    <PublishCard />
    <ChooseDialog :visible="chooseVisible" @confirm="onChooseClick"/>
    <PublishDialog :visible="publishVisible" @check="onChooseClick" @down="onChooseClick" />
  </div>
</template>

<script setup lang="ts">
import EdgeInput from '@/components/TfrInput/EdgeInput.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import CheckCard from '@/components/UpdateMenu/components/CheckCard.vue'
import PublishCard from '@/components/UpdateMenu/components/PublishCard.vue'
import ChooseDialog from './components/ChooseDialog.vue'
import PublishDialog from './components/PublishDialog.vue'
import { ref } from 'vue'

const chooseVisible = ref<boolean>(false)
const publishVisible = ref<boolean>(false)

const onPublish = () => {
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
