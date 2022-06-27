<template>
  <div>
    <HasSidebarWin v-model="showWin" title="PAGE SETTINGS" :side-arr="sideArr" @close="closeWin" />
  </div>
</template>

<script setup lang="ts">
import HasSidebarWin from '@/components/TfrDialog/HasSidebarWin.vue'
import sideArr from '@/views/homePage/pageDialog/editPage/setPage'
import generalwin from '@/views/homePage/generalwin'
const {showWin, closeWin} = generalwin()
</script>

<style lang="scss" scoped>

</style>
