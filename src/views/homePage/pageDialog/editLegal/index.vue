<template>
  <div>
    <HasSidebarWin
      v-model="showWin"
      title="EDIT LEGAL"
      :side-arr="sideArr"
      @close="closeWin"
    />
  </div>
</template>

<script setup lang="ts">
import HasSidebarWin from '@/components/TfrDialog/HasSidebarWin.vue'
import sideArr from './setModules'
import generalwin from '@/views/homePage/generalwin'
import { ref } from 'vue'
const { showWin, closeWin } = generalwin()

</script>
