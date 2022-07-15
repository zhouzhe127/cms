<template>
  <div>
    <HasSidebarWin
      v-model="showWin"
      title="EDIT LINK"
      :side-arr="sideArr"
      @close="closeWin"
      @data-change="onChange"
      :component-val="{[SETPAGETYPE.EMAIL]: { cc: '1111' }}"
    />
  </div>
</template>

<script setup lang="ts">
import HasSidebarWin from '@/components/TfrDialog/HasSidebarWin.vue'
import sideArr from './setModules'
import generalwin from '@/views/homePage/generalwin'
import { SETPAGETYPE } from '@/components/SiteBuilderMenu/components/footerNavigation/utils';
const { showWin, closeWin } = generalwin()
const onChange = (data: any) => {
  console.log(data)
}

</script>
