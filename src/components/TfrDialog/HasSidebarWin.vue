<template>
  <div>
    <TfrDialog class="editpageinfowin" v-bind="$attrs" :width="props.width" append-to-body @beforeClose="close" @close="close">
      <div class="editpage">
        <el-container>
          <el-aside :width="props.asideWidth">
            <div class="aside_box">
              <div class="aside_ti">{{ props.title }}</div>
              <ul class="tablist">
                <div v-if="props.hasSearch" class="inputbox">
                  <edge-input v-model="searchText" placeholder="SEARCH" @input="inputSearch" @clear="inputSearch" />
                </div>
                <li v-for="(item, index) in cacheAside" :key="index" :class="{ active: selectd === index }" @click="clickTab(index)">
                  <div class="liitem">
                    <svg-icon  :icon-class="item.icon" class="svg_side" />
                    <span>{{ item.title }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </el-aside>
          <el-main class="main_container">
            <el-container style="height:100%;">
              <el-main>
                <component v-if="cacheAside[selectd]" :is='cacheAside[selectd].component' :close="close" ref="modulsNode" />
              </el-main>
              <el-footer>
                <div class="footerbox">
                  <!-- <div class="btn" @click="cancelHandle">{{ props.leftbtn }}</div> -->
                  <div>
                    <tfr-button class="btn" @click="cancelHandle">{{ props.leftbtn }}</tfr-button>
                  </div>
                  <div>
                    <tfr-button class="btn black" :loading="rightBtnLoading" @click="clickRightBtn">{{ props.rightbtn }}</tfr-button>
                  </div>
                </div>
              </el-footer>
            </el-container>
          </el-main>
        </el-container>
      </div>
    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import EdgeInput from '@/components/TfrInput/EdgeInput.vue'
interface Props {
  sideArr?: Array<{
    icon?: string,
    title?: string,
    component?: any
  }>,
  width?: string,
  asideWidth?: string,
  hasSearch?: boolean,
  title?: string,
  leftbtn?: string,
  rightbtn?: string
}
const props = withDefaults(defineProps<Props>(), {
  width: '728px',
  title: '--',
  asideWidth: '160px',
  hasSearch: false,
  leftbtn: 'CANCEL',
  rightbtn: 'SAVE',
  sideArr: () => ([])
})
const cacheAside = ref<any>([])
cacheAside.value = [...props.sideArr]
const selectd = ref(0)
const rightBtnLoading = ref(false)
const modulsNode = ref<any>(null)
const clickTab = (index:number) => {
  selectd.value = index
}
const searchText = ref('')
const inputSearch = (e: string) => {
  searchText.value = e
  if (e) {
    cacheAside.value = props.sideArr.filter(v => {
      return v.title?.toLocaleLowerCase()?.indexOf(e.toLocaleLowerCase()) !== -1
    })
    selectd.value = 0
  } else {
    cacheAside.value = props.sideArr
  }
}
const Emits = defineEmits(['update:modelValue', 'close'])
const cancelHandle = () => {
  close()
}
const close = () => {
  Emits('update:modelValue', false)
  Emits('close')
}
const clickRightBtn = async () => {
  rightBtnLoading.value = true
  if (modulsNode.value.confirm) await modulsNode.value.confirm()
  rightBtnLoading.value = false
}
onUnmounted(() => {
  selectd.value = 0
})
</script>

<style lang="scss" scoped>
.editpage {
  color: black;
  .aside_box {
    background-color: #F8F8F8;
    padding-bottom: 30px;
    height: 730px;
    .aside_ti {
      padding: 30px 20px;
    }
    .tablist {
      .inputbox {
        padding: 20px;
      }
      li {
        padding: 0 20px;
        height: 40px;
        display: flex;
        opacity: .4;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .liitem {
          width: 100%;
          height: 100%;
          display: flex;
          padding-left: 10px;
          align-items: center;
          border-radius: 8px;
          .svg_side {
            margin-right: 8%;
            font-size: 20px;
          }
          span {
            display: block;
            text-align: left;
          }
        }
        &:hover {
          opacity: 1;
          .liitem {
            background-color: #ffffff;
          }
        }
      }
      .active {
        opacity: 1;
        .liitem {
          background-color: #ffffff;
        }
      }
    }
  }
  .main_container {
    height: 730px;
    .el-main {
      padding: initial;
      padding-bottom: 20px;
      overflow: auto;
    }
    .footerbox {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      line-height: 50px;
      .btn {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #F8F8F8;
        color: black;
        cursor: pointer;
      }
      .black {
        background-color: $theme;
        color: #ffffff;
      }
    }
    .el-footer {
      padding: initial;
    }
  }
}
::v-global(.editpageinfowin) {
  padding: initial !important;
}
.editpageinfowin::v-global(.el-dialog__footer) {
  margin-top: initial !important;
}
.main_container::v-global(.el-footer) {
  height: auto;
}
</style>
