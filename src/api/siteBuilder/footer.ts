import { getRegionList } from "../marketing"
import request from "../request"
import { FooterDetail } from "./footer.type"
import { pageContentUpdate } from "./page"

export { pageContentUpdate, getRegionList }

export const getFooterContent = async (): Promise<FooterDetail> => {
  return request({
    url: '/v3/cms/footer/detail',
    method: 'get'
  })
}