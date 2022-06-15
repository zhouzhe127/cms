<template>
  <div>
    <HasSidebarWin v-model="showWin" title="PAGE SETTINGS" :side-arr="sideArr" @close="closeWin" />
  </div>
</template>

<script setup lang="ts">
import HasSidebarWin from '@/components/TfrDialog/HasSidebarWin.vue'
import sideArr from '@/views/homePage/editPage/setPage'
import comwin from '@/views/homePage/comwin'
const {showWin, closeWin} = comwin()
// import { onMounted, ref } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
// const router = useRouter()
// const showWin = ref(false)
// const closeWin = () => {
//   router.back()
// }
// onMounted(() => {
//   showWin.value = true
// })
</script>

<style lang="scss" scoped>

</style>
