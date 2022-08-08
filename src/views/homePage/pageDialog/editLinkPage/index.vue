<template>
  <div>
    <HasSidebarWin
      v-model="showWin"
      title="EDIT LINK"
      :side-arr="sideArr"
      @close="closeWin"
      @data-change="onChange"
      :component-val="detail"
    />
  </div>
</template>

<script setup lang="ts">
import HasSidebarWin from '@/components/TfrDialog/HasSidebarWin.vue'
import sideArr from './setModules'
import generalwin from '@/views/homePage/generalwin'
import { EditLinkData, SETPAGETYPE } from '@/components/SiteBuilderMenu/components/footerNavigation/type';
import { useRoute } from 'vue-router';
import { UpdateRequest } from '@/api/siteBuilder/type/navigation.type'
import { getNavigationDetail, navigationUpdate } from '@/api/siteBuilder/navigation'
import { onMounted, ref } from 'vue';
const { showWin, closeWin } = generalwin()
let detail = ref({})
const route = useRoute()
const code = route.params.code
const getInfoData = async () => {
  const data = await getNavigationDetail({
    code
  })
  detail.value = data
  console.log(data)
}
const onChange = async (data: EditLinkData) => {
  const queryData = route.query
  if (queryData) {
    const updateData: UpdateRequest = {
        code: <string>queryData.code,
        location: <string>queryData.location,
        link: { ...data }
      } 
      const { data: navigationRequest } =  await navigationUpdate(updateData)
      if (navigationRequest) closeWin()
  }
}
onMounted(() => {
  getInfoData()
})
</script>
