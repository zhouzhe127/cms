<template>
  <div>
    <SideMenu title="ALL UPDATES" @add-click="" @head-click="onAllClick">
      <template #header>
        <div>
          <TfrCheckbox
            key="all"
            v-model="isCheckAll"
            @change="onAllClick"
            type="large"
            >ALL UPADTES</TfrCheckbox
          >
        </div>
      </template>
      <div>
        <div class="warn">
          <svg-icon icon-class="warning" class="svg-warn" />
          <span> The following pages are queuing for publish approval. </span>
        </div>
        <el-checkbox-group v-model="checkAllData">
          <PageListItem
            v-for="(item, index) in publishList"
            :key="item.code"
            :title="item.title"
            :icon-style="{ marginRight: '0px' }"
            @click="() => onAllClick(item)"
          >
            <template #icon>
              <TfrCheckbox :label="item.code"></TfrCheckbox>
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
import { computed, ref } from 'vue'
import store from '@/store'
import { isBoolean } from 'lodash'
import { UpdateSideListItem } from '@/components/PageListItem/index.type'

interface IProps {
  search?: string
}

const props = withDefaults(defineProps<IProps>(), {
  search: ''
})

const publishList = computed(() => {
  return store.upadte.basic.publishList?.filter(
    item => item.title.indexOf(props.search || '') > -1
  )
})

const updateStore = store.upadte
const checkAllData = ref<string[]>([])
const isCheckAll = ref<boolean>(false)

const onAllClick = (item?: any) => {
  if (!item || isBoolean(item)) {
    isCheckAll.value = isBoolean(item) ? item : !isCheckAll.value

    if (isCheckAll.value) {
      checkAllData.value =
        store.upadte.basic.publishList.map(item => item.code || '') || []
      updateStore.setCheckList(publishList.value)
    } else {
      checkAllData.value = []
      updateStore.setCheckList([])
    }
    return
  }
  const index = checkAllData.value.indexOf(item.code)
  if (index >= 0) {
    isCheckAll.value = false
    checkAllData.value.splice(index, 1)
  } else {
    checkAllData.value.push(item.code)
    if (checkAllData.value.length === updateStore.basic.publishList.length)
      isCheckAll.value = true
  }
  const checkDataList: UpdateSideListItem[] = []
  checkAllData.value.forEach((code: string) => {
    const findItem = updateStore.basic.publishList.find(
      item => item.code === code
    )
    if (findItem) {
      checkDataList.push(findItem)
    }
  })
  updateStore.setCheckList(checkDataList)
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
