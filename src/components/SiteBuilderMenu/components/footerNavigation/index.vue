<template>
  <div>
    <SideMenu title="FOOTER" @add-click="addPage">
      <MenuItem
        v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 32, 11, 23, 34]"
        :key="index"
        title="ss-2022"
        @left-click="deleteItem"
        @right-click="chickEditWin"
      >
        <ItemChild title="mnns" />
      </MenuItem>
    </SideMenu>
    <PageSelectWin v-model="showPageWin" />
    <EditDialog :visible="linkConEdit" width="375px" @confirm="onEdit" @cancel="onCancel" @delete="onCancel"/>
    <EditPageInfoWin
      v-model="showEdit"
      :side-arr="moduleArr"
      title="EDIT LINK"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import tfrMessage from '@/components/TfrMessageBox'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
import PageSelectWin from '@/components/PageSelectWin/index.vue'
import EditPageInfoWin from '@/components/SiteBuilderMenu/EditPageInfoWin.vue'
import EditDialog from './EditDialog.vue'
import moduleArr from './siteModulesPage'
const showPageWin = ref(false)
const showEdit = ref(false)
const linkConEdit = ref(false)
const addPage = () => {
  showPageWin.value = true
}
const chickEditWin = () => {
  linkConEdit.value = true
}
const deleteItem = () => {
  tfrMessage.confirm('wqqqqqq')
}
const onCancel = () => {
  linkConEdit.value = false
}
const onEdit = () => {
  showEdit.value = true
}
</script>

<style scoped></style>
