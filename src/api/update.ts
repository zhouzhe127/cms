import request from "./request"
import { PublishData } from "./update.type"

export const getPublishList = (): Promise<PublishData> => {
  return request({
    url: '/v3/cms/publish/list',
    method: 'get'
  })
}

export const batchPublish = (data: string[]) => {
  return request({
    url: '/v3/cms/publish/batch',
    method: 'put',
    data: {
      codes: data
    }
  })
}