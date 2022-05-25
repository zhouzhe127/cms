<template>
  <div class="marketing-menu-bar">
    <ul>
      <li v-for="(menuItem, index) in menuList">
        <div class="menu-title">
          {{ menuItem.name }}
          <svg-icon
            icon-class="back"
            :class="[menuItem.expand ? 'expand' : '']"
            @click="expandToggle(menuItem.expand, index)"
          />
        </div>
        <div v-if="menuItem.expand" class="menu-content">
          <div class="add" @click="addHandle(menuItem.type)">
            <svg-icon icon-class="add_black" />
            Add
          </div>
        </div>
      </li>
    </ul>
    <TfrDialog v-model="addVisible" width="210px" class="marketing-add-dialog" :is-close="false">
      <div class="type-list">
        <ul>
          <li>
            <svg-icon icon-class="promo"/>
            <span>PROMO</span>
          </li>
          <li>
            <svg-icon icon-class="discount"/>
            <span>DISCOUNT</span>
          </li>
        </ul>
      </div>
    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import appStore from '@/store/index'
import TfrDialog from '@/components/TfrDialog/index.vue'
const addVisible = ref(false)
const { getMenuList } = appStore.menuMarketingStore
const menuList = reactive(getMenuList)
console.log(menuList, appStore.menuMarketingStore.getMenuList)
const expandToggle = (expand:boolean, index:number) => {
  menuList[index].expand = !expand
  console.log(menuList, 'menuList')
  // setMenuList(menuList)
  console.log(expand, index)
}
const addHandle = (type: string) => {
  console.log(type)
  addVisible.value = true
}
const closeAddDialog = () => {
  console.log('kkkk')
  addVisible.value = false
}
</script>

<style lang="scss">
.marketing-menu-bar {
  >ul li + li {
    margin-top: 10px;
  }
  .menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px 5px 10px;
    height: 40px;
    border-bottom: 1px solid $theme;
    > svg {
      font-size: 20px;
      transform: rotate(-90deg);
      cursor: pointer;
    }
    .expand {
      margin-top: 12px;
      transform: rotate(90deg);
    }
  }
  .menu-content {
    .add {
      width: 116px;
      padding-left: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      cursor: pointer;
      .svg-icon {
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
  .marketing-add-dialog{
    .type-list{
      ul{
        display: flex;
        justify-content: space-between;
        li{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding:10px;
          font-size:12px;
          cursor: pointer;
          opacity: 0.5;
          .svg-icon{
            font-size:30px;
            margin-bottom: 10px;
          }
          &:hover{
            opacity: 1;
          }
        }
      }

    }
  }
}
</style>
