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
          v-for="(item, index) in publishList"
          :no-icon="true"
          :disable="true"
          :title="item.title"
          :date="item.date"
          :icon-name="item.iconName"
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
import PageListItem from '@/components/PageListItem/index.vue'
import { UpdateSideListItem } from '@/components/PageListItem/index.type'
import store from '@/store'
import { ref } from 'vue'

const publishList = ref<UpdateSideListItem[]>(
  store.upadte.allModule.publishList
)

const onAllClick = () => {}
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
