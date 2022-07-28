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

export function positionUpdate(data?: unknown) {
  return request({
    url: '/v3/cms/navigation/position/update',
    method: 'post',
    data
  })
}