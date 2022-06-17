import type { AxiosRequestConfig, AxiosResponse } from 'axios'
interface TAxiosRequestConfig extends AxiosRequestConfig {
  t?: string
}
export interface RequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (err: any) => any
}
// 自定义传入的参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  url?: string
  baseURL?: string
  params?: TAxiosRequestConfig
  headers?: any
}
export interface CancelRequestSource {
  [index: string]: () => void
}

export interface RequestResponse extends AxiosResponse {
  message?: string
}
