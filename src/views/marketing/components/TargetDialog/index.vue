<template>
  <tfr-dialog
    v-model="visibleDialog"
    :width="dialogProps.width"
    class="target-dialog"
    :append-to-body="true"
    :header-less="false"
    @beforeClose="cancelHandle"
  >
    <template #header>
      <el-input
        v-model="keyword"
        placeholder="SEARCH"
        @keyup.enter="searchUserList"
      >
        <template #suffix>
          <span @click="clearHandle"> CLEAR </span>
        </template>
      </el-input>
    </template>
    <div
      v-infinite-scroll="loadMoreHandle"
      :infinite-scroll-disabled="disabled"
    >
      <div class="select-inline">
        <tfr-select
          v-model="accountOriginSelect"
          v-elSelectInput:accounts="{
            targetValue: accountOriginSelect,
            targetOptions: accountList
          }"
          multiple
          width="100%"
          @change="accountOriginChange"
        >
          <el-option
            v-for="account in accountList"
            :key="account.code"
            :value="account.code"
            :label="account.name"
          />
        </tfr-select>
        <!--        <tfr-select v-model="targetRegionSelect" width="339px">-->
        <!--          <el-option-->
        <!--            v-for="region in regionList"-->
        <!--            :key="region.region_code"-->
        <!--            :value="region.region_code"-->
        <!--            :label="region.region_name"-->
        <!--          />-->
        <!--        </tfr-select>-->
      </div>
      <div v-if="userList.length > 0" v-loading="loading" class="user-list">
        <div class="user-item">
          <tfr-checkbox
            v-model="userAllChecked"
            type="checkbox"
            @change="userAllCheckedHandle"
          >
            SELECT ALL
          </tfr-checkbox>
        </div>
        <div v-for="user in userList" :key="user.id" class="user-item">
          <tfr-checkbox v-model="user.checked" type="checkbox">
            <div>{{ user.first_name }} {{ user.last_name }}</div>
            <div class="email">{{ user.email }}</div>
          </tfr-checkbox>
          <span class="source">{{ user.source }}</span>
        </div>
      </div>
    </div>
    <p v-if="loadingMore" class="loading-more">Loading...</p>
    <template #footer>
      <tfr-button type="gray" @click="cancelHandle">CANCEL</tfr-button>
      <tfr-button type="primary" @click="confirmHandle">CONFIRM</tfr-button>
    </template>
  </tfr-dialog>
</template>

<script setup lang="ts">
import TfrDialog from '@/components/TfrDialog/index.vue'
import TfrSelect from '@/components/TfrSelect/index.vue'
import TfrCheckbox from '@/components/TfrCheckbox/index.vue'
import TfrButton from '@/components/TfrButton/index.vue'
import { getAnnouncementUserList, getPromotionUserList } from '@/api/marketing'
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue'
import type {
  GetAnnouncementUserListParams,
  AnnouncementUserListItem,
  PagingBack
} from '@/api/marketing.type'
import type { TargetParams } from '../../types'

interface PropsType {
  visible: boolean
  type?: string
  width?: string
  params: TargetParams
}

const $tfrMessage: any =
  getCurrentInstance()?.appContext?.config?.globalProperties?.$tfrMessage

const dialogProps = withDefaults(defineProps<PropsType>(), {
  visible: false // 默认值
})

const dialogEmits = defineEmits([
  'update:visible',
  'cancelHandle',
  'confirmHandle'
])
const loading = ref(false)

const userAllChecked = ref(false)
const accountOriginSelect = ref<string[]>([])
const accountList = reactive([
  {
    name: 'All ACCOUNTS',
    code: ''
  },
  {
    name: 'SSO Apple',
    code: 'apple'
  },
  {
    name: 'SSO Facebook',
    code: 'facebook'
  },
  {
    name: 'SSO Google',
    code: 'google'
  },
  {
    name: 'Registered',
    code: 'email'
  },
  {
    name: 'Guest',
    code: 'order'
  }
])
const targetRegionSelect = ref('')
//const regionList = ref<RegionItem[]>([])
const userList = ref<AnnouncementUserListItem[]>([])
const keyword = ref('')

const visibleDialog = computed({
  get: () => dialogProps.visible,
  set: (newVisible: boolean) => {
    dialogEmits('update:visible', newVisible)
  }
})
const loadingMore = ref(false)
const total = ref(0)
const page = ref(1)
const size = ref(5)
const noMore = computed(() => Math.ceil(total.value / size.value) <= page.value)
const disabled = computed(() => loadingMore.value || noMore.value)

onMounted(async () => {
  const targetType = dialogProps.params.target_type
  console.log(targetType, dialogProps.params)
  if (targetType === 'all' || targetType === '') {
    if (targetType === 'all') userAllChecked.value = true
    accountOriginSelect.value = accountList
      .map(item => item.code && item.code)
      .filter(item => item)
  } else {
    keyword.value = dialogProps.params.target_condition?.keyword
    accountOriginSelect.value =
      dialogProps.params.target_condition?.user_sources
  }
  // const rList: any = await getRegionList()
  // regionList.value = [{ region_name: 'All REGION', region_code: '' }, ...rList]
  const uList: AnnouncementUserListItem[] = await getUserListHandle()
  userList.value = [...userList.value, ...uList]
  userList.value.forEach(item => {
    if (targetType === 'customers') {
      const targetCustomers: string[] | undefined =
        dialogProps.params.target_customers
      item.checked = Boolean(targetCustomers?.includes(item.contact_code))
    } else if (targetType === 'all' || targetType === 'condition') {
      item.checked = true
    }
  })
})

const getUserList = <T>(params?: any): Promise<T> => {
  if (dialogProps.type === 'announcement') {
    return getAnnouncementUserList(params)
  }
  return getPromotionUserList(params)
}

const cancelHandle = (): void => {
  dialogEmits('cancelHandle')
}

const confirmHandle = (): void => {
  const checkedItemArray: AnnouncementUserListItem[] = userList.value?.filter(
    (item: AnnouncementUserListItem) => item.checked
  )
  if (checkedItemArray.length === 0) {
    $tfrMessage({
      type: 'error',
      message: 'Select target, please!'
    })
    return
  }
  const backParams: TargetParams = {
    target_type: '',
    target_condition: {
      keyword: '',
      user_sources: []
    }
  }
  /**
   * target_type:all(keyword:'' accountOriginSelect: '')
   * target_type:condition (userAllChecked:true)
   * target_type:customers:(free check)
   */

  if (userAllChecked.value) {
    backParams.target_type =
      accountOriginSelect.value.length === accountList.length - 1 &&
      !keyword.value
        ? 'all'
        : 'condition'
    backParams.total = total.value
  } else {
    backParams.target_type = 'customers'
    backParams.target_customers = []
    userList.value.forEach(item => {
      if (item.checked) {
        backParams.target_customers?.push(item.contact_code)
      }
    })
    backParams.total = checkedItemArray.length
  }
  console.log(backParams.target_type, keyword.value)
  if (backParams.target_type !== 'all') {
    backParams.target_condition.keyword = keyword.value
  }
  backParams.target_condition.user_sources =
    backParams.target_type !== 'all' ? accountOriginSelect.value : ['']
  dialogEmits('confirmHandle', backParams)
}
const getUserListHandle = async <T>(): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    try {
      const params: GetAnnouncementUserListParams = {
        page: page.value,
        size: size.value,
        keyword: keyword.value
      }
      if (accountOriginSelect.value.length > 0)
        params.user_sources = accountOriginSelect.value
      const { list, info }: PagingBack<T> = await getUserList(params)
      //userList.value = list
      page.value = info?.page as number
      total.value = info?.total as number
      resolve(list)
    } catch (e) {
      reject(e)
    }
  })
}
const searchUserList = async () => {
  loading.value = true
  page.value = 1
  userAllChecked.value = false
  const uList: AnnouncementUserListItem[] = await getUserListHandle()
  userList.value = uList
  loading.value = false
}
const clearHandle = async () => {
  if (!keyword.value) return
  loading.value = true
  page.value = 1
  keyword.value = ''
  userAllChecked.value = false
  const uList: AnnouncementUserListItem[] = await getUserListHandle()
  userList.value = uList
  loading.value = false
}
const accountOriginChange = async (userSources: string[]) => {
  console.log(userSources)
  if (!userSources) return
  if (userSources.length === 0 || userSources.includes('')) {
    accountOriginSelect.value = accountList
      .map(item => item.code && item.code)
      .filter(item => item)
  }
  loading.value = true
  page.value = 1
  userAllChecked.value = false
  const uList: AnnouncementUserListItem[] = await getUserListHandle()
  userList.value = uList
  loading.value = false
}
const userAllCheckedHandle = (checked: boolean) => {
  userList.value?.forEach((item: AnnouncementUserListItem) => {
    item.checked = checked
  })
}

const loadMoreHandle = async () => {
  loadingMore.value = true
  page.value++
  const uList: AnnouncementUserListItem[] = await getUserListHandle()
  if (userAllChecked.value) {
    uList.forEach((item: AnnouncementUserListItem) => {
      item.checked = true
    })
  }
  userList.value = [...userList.value, ...uList]
  loadingMore.value = false
}
</script>

<style lang="scss">
.target-dialog {
  height: 100%;
  .el-dialog__header {
    padding: 0;
    margin-top: 60px;
    margin-right: 0;
    border-bottom: 1px solid $theme;
    .el-input {
      .el-input__wrapper {
        padding: 0;
        box-shadow: none;
        .el-input__inner {
          height: 50px;
          padding: 10px;
          border: none;
        }
        .el-input__suffix-inner {
          font-size: 12px;
          color: $theme;
          cursor: pointer;
        }
      }
    }
  }
  .el-dialog__body {
    padding-top: 20px;
    margin-bottom: 91px;
    overflow: auto;
    .select-inline {
      display: flex;
      justify-content: space-between;
      .el-select + .el-select {
        margin-left: 10px;
      }
    }
    .target-list {
      padding-top: 20px;
    }
    .user-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      padding: 10px;
      .el-checkbox__label {
        font-size: 14px;
        .email {
          font-family: 'Brown Light', serif;
          line-height: 1.5;
        }
      }
      .source {
        font-family: 'Brown Light', serif;
      }
    }
    .loading-more {
      text-align: center;
      color: $theme;
    }
  }
  .el-dialog__footer {
    padding: 20px 0;
    margin: 0 20px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid rgba(27, 43, 39, 0.1);
    display: flex;
    justify-content: space-between;
    .el-button {
      width: 339px;
      & + .el-button {
        margin-left: 10px;
      }
    }
  }
}
</style>
