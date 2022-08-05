<template>
  <div>
    <SideMenu
      :disable="true"
      title="PUBLISHED"
      @add-click=""
      @head-click="onAllClick"
    >
      <template #header>
        <div class="publish-header"> PUBLISHED </div>
      </template>
      <div :style="{ paddingTop: '10px' }">
        <PageListItem
          v-for="(item, index) in publishedList"
          :id="item.code"
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
import store from '@/store'
import { ref, computed } from 'vue'

interface IProps {
  search?: string
}

const props = withDefaults(defineProps<IProps>(), {
  search: ''
})

const publishedList = computed(() => store.upadte.basic.publishedList?.filter((item) => item.title.indexOf(props.search || '') > -1))

const onAllClick = () => {}
</script>

<style lang="scss" scoped>
.publish-header {
  line-height: 50px;
  border-bottom: 1px solid #8a9290;
  color: #8a9290;
  padding: 0px 10px;
}
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
