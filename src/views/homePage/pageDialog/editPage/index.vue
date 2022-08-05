<template>
  <div>
    <HasSidebarWin
      v-model="showWin"
      title="PAGE SETTINGS"
      :side-arr="sideArr"
      :componentVal="detail"
      @close="closeWin"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import HasSidebarWin from '@/components/TfrDialog/HasSidebarWin.vue'
import sideArr from '@/views/homePage/pageDialog/editPage/setPage'
import generalwin from '@/views/homePage/generalwin'
import { getNavigationDetail } from '@/api/siteBuilder/navigation'
import { useRoute } from 'vue-router'
const { showWin, closeWin } = generalwin()
const route = useRoute()
const code = route.params.code
console.log(route.params.code)
let detail = ref({})
const getInfoData = async () => {
  const data = await getNavigationDetail({
    code
  })
  detail.value = data
  console.log(data)
}
onMounted(() => {
  getInfoData()
})
</script>

<style lang="scss" scoped></style>
