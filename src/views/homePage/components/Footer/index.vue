<template>
  <CmsEdit :options="['tool']" @option-click="onOpClick">
    <div class="footer-box">
      <div class="links pc">
        <div v-for="(item, index) in links" :key="index" class="links_items">
          <div class="pt">{{ item.navigation?.name }}</div>
          <div
            v-for="(list, i) in item.sub_navigation"
            :key="`${list.navigation?.code} - ${i}`"
            class="ct"
          >
            {{ list.navigation?.name }}
          </div>
        </div>
      </div>

      <div class="links mobile">
        <TfrCollapse modelValue="about">
          <template :key="index" v-for="(item, index) in links">
            <TfrCollapseItem :name="item.navigation?.name || 'Phone item'">
              <div class="list-con">
                <div
                  v-for="(list, i) in item.sub_navigation"
                  :key="`${list.navigation?.code} - ${i}`"
                  class="list-item"
                >
                  {{ list.navigation?.name }}
                </div>
              </div>
            </TfrCollapseItem>
          </template>
        </TfrCollapse>
      </div>
      <div class="sndc">
        <span
          >Copyright © 2022 The Future Rocks Company Limited. All Rights
          Reserved.</span
        >
      </div>
      <div class="pagetab">
        <div v-for="(item, index) in legalList" :key="index">
          <span v-for="polic in item.sub_navigation" :key="polic.navigation.code">{{polic.navigation.name}}</span>
        </div>
        <!-- <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Cookies Policy</span>
        <span>Return & Refunds Policy</span> -->
      </div>
      <div class="labdc">
        <span
          >We make no representations, warranties or guarantees, whether express
          or implied, that the Website, or any content on it, is accurate,
          complete, up-to-date or will be free from errors or omissions. To the
          fullest extent permitted by law, we exclude all conditions,
          warranties, representations or other terms which may apply to the
          Website, or any content on it, whether express or implied.</span
        >
      </div>
    </div>
  </CmsEdit>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import { useRouter } from 'vue-router'
import TfrCollapse from '@/components/TfrCollapse/index.vue'
import TfrCollapseItem from '@/components/TfrCollapse/TfrCollapseItem.vue'
import { computed, onMounted, ref } from 'vue'
import { getFooterContent } from '@/api/siteBuilder/footer'
import { isLegal } from '@/components/SiteBuilderMenu/components/footerNavigation/utils'
import { FooterListItem } from '@/api/siteBuilder/type/footer.type'
import store from '@/store'
import { SITE_MENUS } from '@/components/SiteBuilderMenu/type'

const router = useRouter()
const onOpClick = () => {
  router.push({
    path: '/siteBuilder/footerSettings'
  })
}

const links = computed(() => {
  const sidebarArr = store.setBuilder.sideState[SITE_MENUS.FOOTER].sidebarArr
  return sidebarArr?.filter(item => !isLegal(item.navigation?.content_type))
})

const legalList = computed(() => {
  const sidebarArr = store.setBuilder.sideState[SITE_MENUS.FOOTER].sidebarArr
  return sidebarArr?.filter(item => (isLegal(item.navigation?.content_type) && item?.sub_navigation?.length))
})

onMounted(async () => {
  const data = await getFooterContent()
  if (data) {
    console.log(data)
    // links.value = data?.footer_list.filter(
    //   item => !isLegal(item.navigation?.content_type)
    // )
    // console.log(links)
  }
})
</script>

<style lang="scss" scoped>
.footer-box {
  width: 100%;
  padding: 30px 20px;
  background-color: #f8f8f8;
  font-family: 'Brown Regular';
  font-size: 14px;
  .mobile {
    display: none;
    &.links {
      display: none;
    }
  }
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
        font-family: 'Brown Regular';
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .ct {
        margin-bottom: 10px;
        font-family: 'Brown Light', serif;
      }
    }
  }
  .sndc {
    margin-top: 45px;
    text-align: center;
  }
  .pagetab {
    font-family: 'Brown Light', serif;
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
    font-family: 'Brown Light', serif;
    line-height: 16px;
    text-align: center;
  }
}
::v-deep(.header_con span) {
  text-transform: uppercase;
}
</style>

<style lang="scss">
.mobile_platform {
  .footer-box {
    padding-top: 60px;
    .pc {
      display: none;
    }
    .mobile {
      display: block;
      &.links {
        display: block;
      }
      .list-con {
        padding: 20px;
        .list-item {
          font-family: 'Brown Light', serif;
          color: rgb(27, 43, 39);
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
