<template>
  <div>
    <TfrDialog class="editpageinfowin" v-bind="$attrs" width="728px" append-to-body @before-close="cancelHandle">
      <div class="editpage">
        <el-container>
          <el-aside width="160px">
            <div class="aside_box">
              <div class="aside_ti">PAGE SETTINGS</div>
              <ul class="tablist">
                <li v-for="(item, index) in sideArr" :key="index" :class="{ active: selectd === index }" @click="clickTab(index)">
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
                <component :is='sideArr[selectd].component' />
              </el-main>
              <el-footer>
                <div class="footerbox">
                  <div class="btn" @click="cancelHandle">CANCEL</div>
                  <div class="btn black">SAVE</div>
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
import InfoForm from '@/components/SiteBuilderMenu/components/InfoForm.vue'
import SeoForm from '@/components/SiteBuilderMenu/components/SeoForm.vue'
import ImageForm from '@/components/SiteBuilderMenu/components/ImageForm.vue'
import CodeForm from '@/components/SiteBuilderMenu/components/CodeForm.vue'
import TagForm from '@/components/SiteBuilderMenu/components/TagForm.vue'
const sideArr = [
  {
    icon: 'fillsigh',
    title: 'Info',
    component: InfoForm
  },
  {
    icon: 'searchseo',
    title: 'SEO',
    component: SeoForm
  },
  {
    icon: 'fillImage',
    title: 'Image',
    component: ImageForm
  },
  {
    icon: 'codeicon',
    title: 'Code',
    component: CodeForm
  },
  {
    icon: 'tagtitle',
    title: 'Tag',
    component: TagForm
  }
]
const selectd = ref(0)
const clickTab = (index:number) => {
  selectd.value = index
}
const Emits = defineEmits(['update:modelValue'])
const cancelHandle = () => {
  Emits('update:modelValue', false)
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
    text-align: center;
    padding-bottom: 30px;
    height: 730px;
    .aside_ti {
      padding: 30px 0;
    }
    .tablist {
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
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          .svg_side {
            margin-right: 8px;
            font-size: 20px;
          }
          span {
            display: block;
            width: 50px;
            text-align: left;
          }
        }
        &:hover {
          .liitem {
            background-color: #ffffff;
          }
        }
      }
      .active {
        opacity: 1;
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
      .btn {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #F8F8F8;
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
</style>
