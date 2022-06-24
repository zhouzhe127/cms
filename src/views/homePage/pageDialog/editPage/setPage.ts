import { markRaw } from 'vue'
import InfoForm from './components/InfoForm.vue'
import SeoForm from './components/SeoForm.vue'
import ImageForm from './components/ImageForm.vue'
import CodeForm from './components/CodeForm.vue'
import TagForm from './components/TagForm.vue'

export default [
  {
    icon: 'fillsigh',
    title: 'Info',
    component: markRaw(InfoForm)
  },
  {
    icon: 'searchseo',
    title: 'SEO',
    component: markRaw(SeoForm)
  },
  {
    icon: 'fillImage',
    title: 'Image',
    component: markRaw(ImageForm)
  },
  {
    icon: 'codeicon',
    title: 'Code',
    component: markRaw(CodeForm)
  },
  {
    icon: 'tagtitle',
    title: 'Tag',
    component: markRaw(TagForm)
  }
]