import InfoForm from '@/components/SiteBuilderMenu/components/setpages/InfoForm.vue'
import SeoForm from '@/components/SiteBuilderMenu/components/setpages/SeoForm.vue'
import ImageForm from '@/components/SiteBuilderMenu/components/setpages/ImageForm.vue'
import CodeForm from '@/components/SiteBuilderMenu/components/setpages/CodeForm.vue'
import TagForm from '@/components/SiteBuilderMenu/components/setpages/TagForm.vue'

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