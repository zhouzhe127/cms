import { getRegionList } from "../marketing"
import request from "../request"
import { FooterDetail, FooterSettingRequest } from "./type/footer.type"
import { pageContentUpdate } from "./page"

export { pageContentUpdate, getRegionList }

export const getFooterContent = async (): Promise<FooterDetail> => {
  return request({
    url: '/v3/cms/footer/detail',
    method: 'get'
  })
}

export const updateFooterSetting = async (data: FooterSettingRequest) => {
  return request({
    url: '/v3/cms/footer/config/update',
    method: 'put',
    data
  })
}
