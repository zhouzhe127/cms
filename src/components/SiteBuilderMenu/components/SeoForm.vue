<template>
  <div class="form_seo">
    <div class="headerbox">
      SEO PREVIEW
    </div>
    <div class="contant">
      <div class="sbanner">
        <div class="top">
          <span>Necklaces</span>
          <svg-icon icon-class="scratchable" class="svgicon" />
        </div>
        <div class="muend">The page title appears in the top of the browser window.</div>
        <div class="muend topbord">The page title appears in the top of the browser window.</div>
      </div>
      <div class="formcontant tfr-form">
        <el-form ref="ruleFormNode" :model="ruleForm" :rules="rules" label-width="80px" label-position="top" class="tfr-form-required">
          <el-form-item label="Meta Title" prop="metaTitle">
            <div class="optionbox">
              <tfr-input v-model="ruleForm.metaTitle" maxLength="60" width="100%" />
              <div class="ptbox">
                <span>{{ ruleForm.metaTitle.length }}</span>
                <span>/</span>
                <span>60</span>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="Slug" prop="slug">
            <tfr-input v-model="ruleForm.slug" width="100%" />
          </el-form-item>
          <p class="mkdu">The unique location slug for this page.</p>
          <el-form-item label="Meta Description" prop="metaDes">
            <tfr-input v-model="ruleForm.metaDes" width="100%" />
          </el-form-item>
          <div class="navrid">
            <span>Hide From Navigation</span>
            <div class="dtt" />
            <div class="bg-switch">
              <el-switch v-model="ruleForm.hide" active-color="#1B2B27" inactive-color="#F8F8F8" @change="switchChange" />
            </div>
          </div>
          <p class="mkdu">Disabled pages can’t be accessed by site visitors.</p>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const ruleForm = reactive({
  metaTitle: '',
  slug: '',
  metaDes: '',
  hide: true
})
const rules = {
  metaTitle: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
  slug: {
    required: true,
    message: ' ',
    trigger: 'blur'
  },
}
const switchChange = (e: boolean) => {
  // ruleForm.hide = e
}
</script>

<style lang="scss" scoped>
.form_seo {
  padding-top: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .headerbox {
    padding-bottom: 20px;
  }
  .contant {
    flex: 1;
    overflow-y: auto;
    .sbanner {
      padding: 20px;
      background-color: #F8F8F8;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .svgicon {
          font-size: 20px;
        }
      }
    }
  }
  .muend {
    font-family: "Brown Light", serif;
    font-weight: 300;
    padding: 10px 0;
  }
  .mkdu {
    font-family: "Brown Light", serif;
    font-weight: 300;
    margin-bottom: 24px;
  }
  .topbord {
    border-top: 1px #C7CACA solid;
  }
  .formcontant {
    margin-top: 40px;
    padding: 0 10px;
    .navrid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 45px;
      color: black;
      .dtt {
        height: 1px;
        border-bottom: 1px #C7CACA solid;
        margin: 0 30px;
        flex: 1;
      }
    }
    .optionbox {
      position: relative;
      width: 100%;
      .ptbox {
        position: absolute;
        right: 0;
        top: -34px;
        color: #C7CACA;
      }
    }
  }
}
</style>