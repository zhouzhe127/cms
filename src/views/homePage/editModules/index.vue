<template>
  <div>
    <HasSidebarWin v-model="showWin" :has-search="true" title="CONTENT MODULES" aside-width="240px" rightbtn="APPLY" :side-arr="modulesArr" @close="closeWin" />
  </div>
</template>

<script setup lang="ts">
import HasSidebarWin from '@/components/TfrDialog/HasSidebarWin.vue'
import modulesArr from '@/views/homePage/editModules/setModules'
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
