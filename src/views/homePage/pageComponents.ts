import Pagetop from '@/views/homePage/components/Pagetop.vue'
import Banner from '@/views/homePage/components/Banner.vue'
import AddModule from '@/views/homePage/components/AddModule.vue'
import FootContent from '@/views/homePage/components/FootContent.vue'
import { Component } from 'vue'
type stringKey = Record<string, Component>
const ComponentsMap:stringKey =  {
  'Pagetop': Pagetop,
  'Banner': Banner,
  'AddModule': AddModule,
  'FootContent': FootContent
}
export default ComponentsMap