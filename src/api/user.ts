import request from './request/index'

interface LoginData {
  username: string
  password: string
}

interface SendEmailData {
  email: string
}

interface ResetPasswordData {
  password: string
  official_id: string | undefined
  token: string | undefined
}

// 登录
export function login(data: LoginData) {
  return request({
    url: 'admin/login',
    method: 'post',
    data
  })
}

// 用户信息
export function getInfo() {
  return request({
    url: 'admin/info',
    method: 'get'
  })
}

// 登出
export function layout() {
  return request({
    url: 'admin/logout',
    method: 'post'
  })
}

// 重置密码发送邮件
export function sendEmail(data: SendEmailData) {
  return request({
    url: 'admin/verify/pass/link/reset',
    method: 'post',
    data
  })
}

// 确认重置密码
export function resetPassword(data: ResetPasswordData) {
  return request({
    url: 'admin/pass/link/reset',
    method: 'post',
    data
  })
}
