<template>
  <CmsEdit :options="['tool']">
    <div class="foot-box">
      <div class="links">
        <div v-for="(item, index) in links" :key="index" class="links_items">
          <div class="pt">{{ item.text }}</div>
          <div v-for="(list, i) in item.children" :key="list.text + i" class="ct">{{ list.text }}</div>
        </div>
      </div>
      <div class="sndc">
        <span>Copyright © 2022 The Future Rocks Company Limited. All Rights Reserved.</span>
      </div>
      <div class="pagetab">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Cookies Policy</span>
        <span>Return & Refunds Policy</span>
      </div>
      <div class="labdc">
        <span>We make no representations, warranties or guarantees, whether express or implied, that the Website, or any content on it, is accurate, complete, up-to-date or will be free from errors or omissions. To the fullest extent permitted by law, we exclude all conditions, warranties, representations or other terms which may apply to the Website, or any content on it, whether express or implied.</span>
      </div>
    </div>
  </CmsEdit>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'

interface Msd {
  text: string,
  link: string,
  children?: Array<Msd>
}
const links:Array<Msd> = [
  {
    text: 'about',
    link: 'aaaa',
    children: [
      {
        text: 'about',
        link: 'aaaa',
      }
    ]
  },
  {
    text: 'about',
    link: 'aaaa',
    children: [
      {
        text: 'about',
        link: 'aaaa',
      }
    ]
  },
  {
    text: 'about',
    link: 'aaaa',
    children: [
      {
        text: 'about',
        link: 'aaaa',
      }
    ]
  },
  {
    text: 'about',
    link: 'aaaa',
    children: [
      {
        text: 'about',
        link: 'aaaa',
      }
    ]
  },
]
</script>

<style lang="scss" scoped>
.foot-box {
  width: 100%;
  padding: 30px 20px;
  background-color: #F8F8F8;
  font-family: "Brown Regular";
  font-size: 14px;
  .links {
    display: flex;
    justify-content: center;
    .links_items {
      padding-right: 60px;
      font-size: 14px;
      line-height: 1.3;
      color: rgb(27, 43, 39);
      cursor: pointer;
      &:last-child {
        padding-right: initial;
      }
      .pt {
        font-family: "Brown Regular";
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .ct {
        margin-bottom: 10px;
        font-family: "Brown Light", serif;
      }
    }
  }
  .sndc  {
    margin-top: 45px;
    text-align: center;
  }
  .pagetab {
    font-family: "Brown Light", serif;
    text-align: center;
    margin-top: 12px;
    span {
      display: inline-block;
      margin: 0 10px;
    }
  }
  .labdc {
    margin-top: 30px;
    font-size: 12px;
    font-family: "Brown Light", serif;
    line-height: 16px;
    text-align: center;
  }
}
</style>