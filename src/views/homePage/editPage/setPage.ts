import InfoForm from './components/InfoForm.vue'
import SeoForm from './components/SeoForm.vue'
import ImageForm from './components/ImageForm.vue'
import CodeForm from './components/CodeForm.vue'
import TagForm from './components/TagForm.vue'

export default [
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