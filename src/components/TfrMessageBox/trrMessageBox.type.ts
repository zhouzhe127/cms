import {
  ElMessageBoxOptions,
  MessageBoxData
} from 'element-plus/es/components/message-box/src/message-box.type'
import { AppContext, VNode } from 'vue'

export interface TfrSetting extends ElMessageBoxOptions {
  dangerouslyTitleHTMLString?: boolean // 标题采用html模式解析
  dangerouslyContentHTMLString?: boolean // 内容采用html模式解析
  secTitle?: string
  message?: string | VNode | undefined
}

export declare type TfrElMessageBoxShortcutMethod = ((
  message: TfrSetting['message'],
  title: TfrSetting['title'],
  options?: TfrSetting,
  appContext?: AppContext | null
) => Promise<MessageBoxData>) &
  ((
    message: TfrSetting['message'],
    options?: TfrSetting,
    appContext?: AppContext | null
  ) => Promise<MessageBoxData>)

export interface ITfrMessageBox {
  _context: AppContext | null

  /** Show a message box */
  // (message: string, title?: string, type?: string): Promise<MessageBoxData>

  /** Show a message box */
  (
    options: ElMessageBoxOptions,
    appContext?: AppContext | null
  ): Promise<MessageBoxData>

  /** Show an alert message box */
  /** alert: ElMessageBoxShortcutMethod */

  /** Show a confirm message box */
  confirm: TfrElMessageBoxShortcutMethod

  /** Show a prompt message box */
  /** prompt: ElMessageBoxShortcutMethod */

  /** Close current message box */
  close(): void
}
