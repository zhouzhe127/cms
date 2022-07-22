import request from "../request"
import { UpdateRequest } from "./navigation.type"
export function navigationCreate(data?: unknown) {
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

export function navigationDelete(data?: unknown) {
  return request({
    url: '/v3/cms/navigation/delete',
    method: 'delete',
    data
  })
}

export function navigationUpdate(data?: UpdateRequest) {
  return request({
    url: '/v3/cms/navigation/update',
    method: 'put',
    data 
  })
}