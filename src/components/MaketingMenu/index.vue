<template>
  <div class="marketing-menu-bar">
    <ul>
      <li
        v-for="(menuItem, index) in marketingMenuList"
        :key="'marketingMenu' + index"
      >
        <div class="menu-title">
          {{ menuItem.name }}
          <svg-icon
            icon-class="down"
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
    <TfrDialog
      v-model="addVisible"
      width="210px"
      class="marketing-add-dialog"
      :is-close="false"
      :append-to-body="true"
    >
      <div class="type-list">
        <ul>
          <li @click="jumpTo('/marketing/promotion/promo/add')">
            <svg-icon icon-class="promo" />
            <span>PROMO</span>
          </li>
          <li @click="jumpTo('/marketing/promotion/discount/add')">
            <svg-icon icon-class="discount" />
            <span>DISCOUNT</span>
          </li>
        </ul>
      </div>
    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import TfrDialog from '@/components/TfrDialog/index.vue'
import { menuStore } from '@/store/modules/menu'
const router = useRouter()
const addVisible = ref(false)
const { marketingMenuList } = storeToRefs(menuStore())
const expandToggle = (expand: boolean, index: number) => {
  marketingMenuList.value[index].expand = !expand
}
const addHandle = (type: string) => {
  console.log(type)
  addVisible.value = true
}
// const closeAddDialog = () => {
//   addVisible.value = false
// }
const jumpTo = (path: string) => {
  router.push({ path })
  addVisible.value = false
}
</script>

<style lang="scss" scoped>
.marketing-menu-bar {
  > ul li + li {
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
      cursor: pointer;
    }
    .expand {
      margin-top: 12px;
      transform: rotate(180deg);
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
}
</style>
<style lang="scss">
.marketing-add-dialog {
  .type-list {
    ul {
      display: flex;
      justify-content: space-between;
      li {
        padding: 10px;
        font-size: 12px;
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .svg-icon {
          font-size: 30px;
          margin-bottom: 10px;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
