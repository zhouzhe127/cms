import { EditClearBinItem } from "@/components/PageListItem/index.type"
import request from "../request"
import { CreateRequest, UpdateRequest } from "./type/navigation.type"
export function navigationCreate(data?: CreateRequest) {
  return request({
    url: '/v3/cms/navigation/create',
    method: 'post',
    data
  })
}

export function getNavigationList(data?: unknown) {
  return request({
    url: '/v3/cms/navigation/list',
    method: 'get',
    params: data
  })
}

export function navigationDeleteTrust(data = {}) {
  return request({
    url: '/v3/cms/navigation/trash/operate',
    method: 'put',
    data: {
      deleted: 1, // 0 恢复 1 放入垃圾桶
      ...data
    }
  })
}

export function navigationUpdate(data?: UpdateRequest) {
  return request({
    url: '/v3/cms/navigation/update',
    method: 'put',
    data
  })
}

export function positionUpdate(data?: unknown) {
  return request({
    url: '/v3/cms/navigation/position/update',
    method: 'post',
    data
  })
}

export function getTrustList(): Promise<{list: EditClearBinItem[]}> {
  return request({
    url: '/v3/cms/navigation/trash/list',
    method: 'get',
  })
}

export function trustDelete(data: string[]) {
  return request({
    url: '/v3/cms/navigation/trash/delete',
    method: 'put',
    data: { codes: data }
  })
}

export function getNavigationDetail(params: unknown) {
  return request({
    url: '/v3/cms/navigation/detail',
    method: 'get',
    params
  })
}

export function getNavigationUpdate(data: unknown) {
  return request({
    url: '/v3/cms/navigation/update',
    method: 'put',
    data
  })
}