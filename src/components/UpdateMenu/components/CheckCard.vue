<template>
  <div>
    <SideMenu title="ALL UPDATES" @add-click="" @head-click="onAllClick">
      <template #header>
        <div>
          <TfrCheckbox key="all" type="large">ALL UPADTES</TfrCheckbox>
        </div>
      </template>
      <div>
        <div class="warn">
          <svg-icon icon-class="warn" class="svg-warn" />
          <span> The following pages are queuing for publish approval. </span>
        </div>
        <PageListItem
          v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]"
          :key="item"
          :icon-style="{ marginRight: '0px' }"
          @click="onAllClick"
        >
          <template #icon>
            <TfrCheckbox type="large"></TfrCheckbox>
          </template>
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
