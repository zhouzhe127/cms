<template>
  <div>
    <HasSidebarWin
      v-model="showWin"
      title="EDIT LEGAL"
      :side-arr="sideArr"
      @close="onClose"
      :componentVal="value"
    />
  </div>
</template>

<script setup lang="ts">
import HasSidebarWin from '@/components/TfrDialog/HasSidebarWin.vue'
import sideArr from './setModules'
import { onMounted, ref } from 'vue'
import { pageContentDetail } from '@/api/siteBuilder/page'
import { useRoute } from 'vue-router'
import router from '@/router'
// const { showWin, closeWin } = generalwin()
const showWin = ref(false)
const route = useRoute()
const value = ref()

onMounted(async () => {
  const code = route.query.page_code
  if (code) {
    try {
      showWin.value = false
      const data: any = await pageContentDetail({ site_navigation_code: code })
      value.value = data.legal
      showWin.value = true
    } catch (e) {
      onClose()
    }
  } else {
    showWin.value = true
  }
})

const onClose = () => {
  router.push({
    path: '/siteBuilder'
  })
}
</script>
