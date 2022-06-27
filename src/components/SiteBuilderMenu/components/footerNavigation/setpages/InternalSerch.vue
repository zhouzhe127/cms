<template>
  <div class="internal-search">
    <el-input placeholder="SEARCH" v-model="inputVal">
      <template #suffix> <span @click="onClear">CLEAR</span> </template>
    </el-input>

    <div class="search-list" v-for="item in showList">
      <div class="search-item">
        <div class="icon">
          <svg-icon :icon-class="item.icon" class="svg_item" />
        </div>
        <div>
          <div class="name">{{ item.name }}</div>
          <div class="url">{{ item.url }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface SearchItem {
  icon: string
  name: string
  url: string
}

const inputVal = ref<string>('')
const showList = computed(() =>
  uiList.filter((item: any) => {
    return (
      item.name.toLowerCase().indexOf(inputVal.value.toLocaleLowerCase()) >= 0
    )
  })
)

const uiList: SearchItem[] = [
  {
    icon: 'home',
    name: 'Home',
    url: '/home'
  },
  {
    icon: 'scratchable',
    name: 'Necklaces',
    url: '/jewelry/necklaces'
  },
  {
    icon: 'scratchable',
    name: 'Rains',
    url: '/jewelry/necklaces'
  }
]

const onClear = () => {
  inputVal.value = ''
  console.log('触发了clear事件')
}
</script>

<style lang="scss" scoped>
.internal-search {
  width: 100%;
  .el-input {
    ::v-deep(.el-input__wrapper) {
      margin-right: 0;
      padding: 0;
      padding-right: 10px;
      box-shadow: none;
      border-radius: 0;
      border-bottom: 1px solid $theme;
      .el-input__inner {
        height: 50px;
        padding: 10px;
        border: none;
      }
      .el-input__suffix-inner {
        cursor: pointer;
        font-size: 12px;
        color: $theme;
      }
    }
  }
  .search-list {
    margin-top: 10px;
  }
  .search-item {
    width: 100%;
    display: flex;
    padding: 10px;
    cursor: pointer;

    .svg_item {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    .name {
      font-family: 'Brown Regular', serif;
      font-weight: 400;
      line-height: 1.3em;
      margin-top: 6px;
    }
    .url {
      font-weight: 300;
      font-style: normal;
      line-height: 1.3em;
      margin-top: 6px;
      color: rgb(112, 122, 119);
    }
  }
  .search-item:hover {
    background-color: rgb(248, 248, 248);
  }
}
</style>
