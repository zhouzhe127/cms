import MessageBox from './tfrMessageBox'

import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/lib/utils'

const _MessageBox = MessageBox as SFCWithInstall<typeof MessageBox>

_MessageBox.install = (app: App) => {
  _MessageBox._context = app._context
  app.config.globalProperties.$confirm = _MessageBox.confirm
}

export default _MessageBox
export const TfrMessageBox = _MessageBox

export * from './trrMessageBox.type'

/*
 * doc 使用方法（暂时只支持此种，其他后面再补）
 * TfrMessageBox.confirm(
 *     'This folder contains other contents, Place check before deleting.',
 *     '<div >Delete Jewelry</div>',
 *     {
 *       confirmButtonText: 'DELETE',
 *       cancelButtonText: 'CANCEL',
 *       type: 'warning',
 *       dangerouslyTitleHTMLString: true
 *     }
 *   )
 *     .then((e: string) => {
 *       console.log(e)
 *     })
 *    .catch((e: sting) => {
 *       console.log(e)
 *     })
 */
