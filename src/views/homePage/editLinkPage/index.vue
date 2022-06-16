<template>
  <div>
    <EditDialog
      :visible="linkConEdit"
      width="375px"
      @confirm="onEdit"
      @cancel="onCancel"
      @delete="onCancel"
    />
    <HasSidebarWin
      title="EDIT LINK"
      v-model="showEdit"
      :side-arr="sideArr"
      @close="closeWin"
    />
  </div>
</template>

<script setup lang="ts">
import HasSidebarWin from '@/components/TfrDialog/HasSidebarWin.vue'
import EditDialog from '@/components/SiteBUilderMenu/components/footerNavigation/EditDialog.vue'
import sideArr from './setModules'
import generalwin from '@/views/homePage/generalwin'
import { ref } from 'vue'
const { closeWin } = generalwin()

const showPageWin = ref(false)
const showEdit = ref(false)
const linkConEdit = ref(true)

const onCancel = () => {
  closeWin()
}
const onEdit = () => {
  showEdit.value = true
}
</script>

<style lang="scss" scoped></style>
