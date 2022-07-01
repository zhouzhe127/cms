<template>
  <div class="form_seo">
    <div class="headerbox">
      SOCIAL IMAGE
    </div>
    <div class="contant">
      <div class="sbanner">
        <el-image src="https://img.tfrcdn.com/product/brand/1018/626a0f17a15b010007500c52/c9lp2ltpqh8rkm1jvgtg.png" />
        <div class="top">
          <span>Inspirations - The Future Rocks</span>
          <svg-icon icon-class="tablet" class="svgicon" />
        </div>
        <div class="muend">https://www.thefuturerocks.com/inspirations</div>
      </div>
      <div class="formcontant tfr-form">
        <el-form ref="ruleFormNode" :model="ruleForm" label-width="80px" label-position="top" class="tfr-form-required">
          <el-form-item label="Alternate Image" prop="alternateImage">
            <tfr-input v-model="ruleForm.alternateImage" maxLength="60" width="100%" />
          </el-form-item>
          <el-form-item label="Alt Text" prop="altText">
            <div class="optionbox">
              <tfr-input v-model="ruleForm.altText" type="textarea" :rows="4" :placeholder="holderText" maxLength="60" width="100%" />
              <div class="ptbox">
                <span>{{ ruleForm.altText.length }}</span>
                <span>/</span>
                <span>100</span>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const ruleForm = reactive({
  alternateImage: '',
  altText: '',
})
const holderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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