<template>
  <div class="marketing-menu-bar">
    <ul>
      <li
        v-for="(menuItem, index) in marketingMenuList"
        :key="'marketingMenu' + index"
      >
        <div
          class="menu-title"
          @click="expandToggle(menuItem.expand, menuItem.type, index)"
        >
          {{ menuItem.name }}
          <svg-icon
            icon-class="down"
            :class="[menuItem.expand ? 'expand' : '']"
          />
        </div>
        <div v-if="menuItem.expand" class="menu-content">
          <div
            v-for="(item, index) in menuItem.list"
            :key="menuItem.type + index"
            @click="reviewHandle(menuItem.type, item.announcement_id)"
          >
            <div
              v-if="menuItem.type === 'announcement'"
              class="item"
              :class="{ active: id === item.announcement_id + '' }"
            >
              <div class="left">
                <svg-icon icon-class="announcement_active" />
                <div>
                  <h5>{{ item.name }}</h5>
                  <span>{{ item.description }}</span>
                </div>
              </div>
              <div class="right">
                {{ myUpperCaseFirstLetter(item.region_range) }}
              </div>
            </div>
          </div>

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
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute, RouteRecordName } from 'vue-router'
import TfrDialog from '@/components/TfrDialog/index.vue'
import { upperCaseFirstLetter } from '@/utils'
//import { getAnnouncementList } from '@/api/marketing'
import { menuStore } from '@/store/modules/menu'
const useMenuStore = menuStore()
const router = useRouter()
const route = useRoute()
const addVisible = ref(false)
const { marketingMenuList } = storeToRefs(menuStore())
const target = ref<string | string[]>('add')
const id = ref<string | string[]>('')
type RouterNameType = RouteRecordName | string | null | undefined

onMounted(() => {
  const routeName = route.name
  target.value = route.params.target
  if (target.value === 'detail') {
    id.value = route.params.id
  }
  if (typeof routeName === 'string') {
    setMarketingMenuListExpand(routeName)
  }
  watch(
    () => route.name,
    name => {
      console.log('name', name)
      target.value = route.params.target
      if (target.value === 'detail') {
        id.value = route.params.id
      } else {
        id.value = ''
      }
      if (typeof name === 'string') {
        setMarketingMenuListExpand(name)
      }
    }
  )
  watch(
    () => route.params,
    params => {
      console.log(params, 'params')
      if (params.target === 'detail' && params.id && id.value !== params.id) {
        id.value = params.id
      }
    }
  )
})

const myUpperCaseFirstLetter = upperCaseFirstLetter

const expandToggle = async (expand: boolean, type: string, index: number) => {
  if (expand) {
    marketingMenuList.value[index].expand = false
  } else {
    useMenuStore.updateMarketingMenuList(type)
  }

  // if (type === 'announcement') {
  //   const data: any = await getAnnouncementList()
  //   marketingMenuList.value[index].list = data.list
  //   console.log(data)
  // }
  //marketingMenuList.value[index].expand = !expand
}

const addHandle = (type: string) => {
  if (type === 'promotion') {
    addVisible.value = true
  } else if (type === 'giftCard') {
    jumpTo('/marketing/giftCard/add')
  } else {
    jumpTo('/marketing/announcement/add')
  }
  id.value = ''
  // addVisible.value = true
}
// const closeAddDialog = () => {
//   addVisible.value = false
// }
const jumpTo = (path: string) => {
  router.push({ path })
  addVisible.value = false
}

const setMarketingMenuListExpand = async (routeName: string) => {
  useMenuStore.updateMarketingMenuList(routeName)
}

const reviewHandle = (type: string, itemId: string) => {
  jumpTo(`/marketing/${type}/detail/${itemId}`)
  id.value = itemId
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
    cursor: pointer;
    > svg {
      font-size: 20px;
    }
    .expand {
      margin-top: 12px;
      transform: rotate(180deg);
    }
  }
  .menu-content {
    .item {
      display: flex;
      align-items: flex-start;
      padding: 10px;
      margin-top: 10px;
      cursor: pointer;
      &.active,
      &:hover {
        background-color: #fff;
        border-radius: 8px;
      }
      .left {
        display: flex;
        .svg-icon {
          font-size: 20px;
          margin-right: 10px;
        }
        h5 {
          margin: 0 0 10px 0;
        }
        span {
          font-family: 'Brown Light', serif;
        }
      }
      .right {
        font-family: 'Brown Light', serif;
      }
    }
    .add {
      width: 116px;
      padding-left: 40px;
      margin-top: 10px;
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
