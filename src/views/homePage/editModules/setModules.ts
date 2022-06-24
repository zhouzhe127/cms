import Article from './components/Article.vue'
import Button from './components/Button.vue'
import Campaign from './components/Campaign.vue'
import Cinema from './components/Cinema.vue'
import InfoBlock from './components/InfoBlock.vue'
import Markdown from './components/Markdown.vue'
import Media from './components/Media.vue'
import Newsletter from './components/Newsletter.vue'
import Shelve from './components/Shelve.vue'
import TitleBar from './components/TitleBar.vue'
import Typeform from './components/Typeform.vue'

export default [
  {
    icon: 'scanner',
    title: 'Article',
    component: Article
  },
  {
    icon: 'smart_button',
    title: 'Button',
    component: Button
  },
  {
    icon: 'campaign_hei',
    title: 'Campain',
    component: Campaign
  },
  {
    icon: 'panorama',
    title: 'Cinema',
    component: Cinema
  },
  {
    icon: 'info',
    title: 'Info Block',
    component: InfoBlock
  },
  {
    icon: 'format_text',
    title: 'Markdown',
    component: Markdown
  },
  {
    icon: 'mms',
    title: 'Media',
    component: Media
  },
  {
    icon: 'mail_fill',
    title: 'Newsletter',
    component: Newsletter
  },
  {
    icon: 'category_fill',
    title: 'Shelve',
    component: Shelve
  },
  {
    icon: 'space_bar',
    title: 'Title Bar',
    component: TitleBar
  },
  {
    icon: 'title_fill',
    title: 'Typeform',
    component: Typeform
  },
]