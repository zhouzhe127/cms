<template>
  <div>
    <SideMenu title="ALL UPDATES" @add-click="" @head-click="onAllClick">
      <template #header>
        <div>
          <TfrCheckbox v-model="isCheckAll" key="all" type="large">ALL UPADTES</TfrCheckbox>
        </div>
      </template>
      <div>
        <div class="warn">
          <svg-icon icon-class="warn" class="svg-warn" />
          <span> The following pages are queuing for publish approval. </span>
        </div>
        <el-checkbox-group v-model="checkAllData">
          <PageListItem
            v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]"
            :icon-style="{ marginRight: '0px' }"
            @click="() => onAllClick(item)"
          >
            <template #icon>
              <TfrCheckbox type="large" :key="item" :label="item"></TfrCheckbox>
            </template>
          </PageListItem>
        </el-checkbox-group>
      </div>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import TfrCheckbox from '@/components/TfrCheckbox/index.vue'
import PageListItem from '@/components/PageListItem/index.vue'
import { ref } from 'vue'
const checkAllData = ref<any[]>([1, 2, 3, 4, 5, 6, 7])
const isCheckAll = ref<boolean>(false)

const onAllClick = (item?: any) => {
  if (!item) {
    isCheckAll.value = !isCheckAll.value

    if (isCheckAll.value) {
      checkAllData.value = [1,2,3,4,5,6,7,8]
    } else {
      checkAllData.value = []
    }
    return
  }
  const index = checkAllData.value.indexOf(item)
  if (index >= 0) {
    checkAllData.value.splice(index, 1)
  } else {
    checkAllData.value.push(item)
  }
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
