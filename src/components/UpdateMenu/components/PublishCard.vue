<template>
  <div>
    <SideMenu
      :disable="true"
      title="PUBLISHED"
      @add-click=""
      @head-click="onAllClick"
    >
      <template #header>
        <div>PUBLISHED</div>
      </template>
      <div :style="{ paddingTop: '10px' }">
        <PageListItem
          :no-icon="true"
          :disable="true"
          v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]"
          :icon-style="{ marginRight: '0px' }"
          @click="onAllClick"
        >
          <template #icon></template>
        </PageListItem>
      </div>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import TfrCheckbox from '@/components/TfrCheckbox/index.vue'
import PageListItem from '@/components/PageListItem/index.vue'
let i = 0

const onAllClick = () => {
  console.log('多选点击' + i++)
}
</script>

<style lang="scss" scoped>
.warn {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
  .svg-warn {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  span {
    font-family: 'Brown Light', serif;
    font-size: 14px;
  }
}
::v-deep(.icon) {
  text-align: right;
}
::v-deep(.el-checkbox) {
  padding-right: 0;
  margin-right: 0;
}
</style>
