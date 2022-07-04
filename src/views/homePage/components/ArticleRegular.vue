<template>
  <div class="articlebox">
    <div class="articletop">
      <div class="maincontent">
        <div class="editcss">
          <CmsEdit :options="['edit_cms', 'lock_white']">
            <div class="leftshow">
              <div class="t1">CATEGORY</div>
              <div class="t2">Lorem Ipsum</div>
              <div class="t3">Lorem Ipsum</div>
              <div class="t4">Words by Name Surname</div>
              <div class="t5">1 Mar 2022</div>
              <div class="t6">LOOKBOOK</div>
              <div class="tablebox">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
              </div>
            </div>
          </CmsEdit>
        </div>
        <div class="rightshow">
          <AddModule />
        </div>
      </div>
      <div class="btn">NEXT STORY</div>
    </div>
    <div class="nextbox">
      <div class="textbox">
        <Articletext />
      </div>
      <Articletext />
    </div>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import AddModule from '@/views/homePage/components/AddModule.vue'
import Articletext from '@/views/homePage/components/Articletext.vue'
</script>

<style lang="scss" scoped>
.articlebox {
  .articletop {
    border: 1px black dashed;
    padding-bottom: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .maincontent {
      display: flex;
      width: 100%;
    }
    .editcss {
      width: 50%;
    }
    .leftshow {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 66px;
      .t2 {
        padding: 35px 0;
        font-size: 36px;
        font-family: "Signifier Regular", serif;
        font-weight: 400;
      }
      .t3 {
        font-size: 18px;
        margin-bottom: 35px;
      }
      .t4 {
        font-weight: 400;
        margin-bottom: 5px;
      }
      .t5 {
        font-family: "Brown Light", serif;
      }
      .t6 {
        margin-top: 60px;
        margin-bottom: 15px;
        font-family: "Brown Light", serif;
      }
      .tablebox {
        display: grid;
        grid-template-columns: 116px 116px 116px;
        grid-gap: 2px;
        .col {
          height: 116px;
          border: 1px black dashed;
        }
      }
    }
    .rightshow {
      width: 50%;
    }
    .btn {
      width: 120px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      margin-top: 120px;
      background-color: #F8F8F8;
      cursor: pointer;
    }
  }
  .nextbox {
    background-color: $bg;
    padding: 15px;
    .textbox {
      margin-bottom: 30px;
    }
  }
}
</style>