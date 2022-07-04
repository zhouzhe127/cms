const execSync = require('child_process').execSync; // eslint-disable-line
const path = require('path')
const pkg = require('./package.json')
const PROJECT_NAME = pkg.name
const env = process.env.BUILD_ENV || 'localhost'
let cdnPath = `${env === 'prod' ? 'online' : env}/pages/${PROJECT_NAME}`
if (process.env.STATIC_PATH) {
  cdnPath = process.env.STATIC_PATH
}
const staticHost = process.env.STATIC_HOST || 'static.tfr.ink'
const gitCommit =
  process.env.GIT_COMMIT ||
  execSync('git rev-parse --short HEAD').toString().replace('\n', '')

const config =
  {
    prod: {
      apiAddress: '//admin-api.tfrapi.com/',
      cookieDomain: '.thefuturerocks.com',
      demoAddress: '//json.tfr.ink/',
      baiduTJ: '0129e5a883589a95f9b89eef85e7959e',
      brandAddress: 'https://dashboard.thefuturerocks.com',
      webAddress: '//www.thefuturerocks.com',
      authAppAddress: '//auth.tfr.ink/'
    },
    pre: {
      apiAddress: '//keeper-api-pre.tfr.ink/',
      cookieDomain: '.thefuturerocks.com',
      demoAddress: '//json.tfr.ink/',
      brandAddress: 'https://pre-dashboard.thefuturerocks.com',
      webAddress: '//pre.thefuturerocks.com',
      baiduTJ: 'd91a8a950a7d697718e58ad5726d0be0',
      authAppAddress: '//pre-auth.tfr.ink/'
    },
    uat: {
      apiAddress: '//keeper-api-uat.tfr.ink/',
      cookieDomain: 'tfr.ink',
      demoAddress: '//json.tfr.ink/',
      brandAddress: 'https://tmp-dashboard.thefuturerocks.com',
      webAddress: '//tmp.thefuturerocks.com',
      baiduTJ: 'd91a8a950a7d697718e58ad5726d0be0',
      authAppAddress: '//uat-auth.tfr.ink/'
    },
    demo: {
      debug: true,
      apiAddress: '//keeper-api-test.tfr.ink/',
      cookieDomain: '.thefuturerocks.com',
      demoAddress: '//json.tfr.ink/',
      brandAddress: 'https://demo-dashboard.thefuturerocks.com',
      webAddress: '//demo.thefuturerocks.com',
      baiduTJ: 'd91a8a950a7d697718e58ad5726d0be0',
      authAppAddress: '//demo-auth.tfr.ink/'
    },
    test: {
      debug: true,
      apiAddress: '//keeper-api-test.tfr.ink/',
      mockAddress: '//yapi.tfr.ink/mock/455/brand/backend/',
      demoAddress: '//json.tfr.ink/',
      brandAddress: 'https://testing-dashboard.thefuturerocks.com',
      webAddress: '//testing.thefuturerocks.com',
      cookieDomain: '.thefuturerocks.com',
      baiduTJ: 'd91a8a950a7d697718e58ad5726d0be0',
      authAppAddress: '//test-auth.tfr.ink/'
    },
    dev: {
      debug: true,
      apiAddress: '//keeper-api-dev.tfr.ink/',
      mockAddress: 'https://mock-api.tfr.ink/mock/35/',
      demoAddress: '//json.tfr.ink/',
      brandAddress: 'https://dev-dashboard.thefuturerocks.com',
      webAddress: '//dev.thefuturerocks.com',
      cookieDomain: '.thefuturerocks.com',
      baiduTJ: 'cca83f133094c9e8b98b0a05a2fac47e',
      authAppAddress: '//dev-auth.tfr.ink/'
    },
    localhost: {
      debug: true,
      apiAddress: 'http://keeper-api-dev.tfr.ink/',
      mockAddress: '//192.168.1.97:8080/',
      brandAddress: 'https://dev-dashboard.thefuturerocks.com',
      webAddress: '//pre.thefuturerocks.com',
      demoAddress: '//json.tfr.ink/',
      cookieDomain: '127.0.0.1',
      baiduTJ: 'cca83f133094c9e8b98b0a05a2fac47e',
      authAppAddress: '//uat-auth.tfr.ink/',
      username: 'tfr',
      password: '111111'
    }
  }[env] || {}
const ENV_CONFIG = {
  apiAddress: 'SERVER_API_ADDRESS', // 对应的后端服务
  appAddress: 'FRONT_APP_ADDRESS', // 官网前端
  brandAddress: 'FRONT_BRAND_ADDRESS', // 商户控制台前端
  webAddress: 'FRONT_WEB_ADDRESS', // 官网前端
  cookieDomain: 'TFR_COOKIE_DOMAIN', // 控制台Cookie
  vaApiAddress: 'TRACK_API_ADDRESS', // TFR日志统计服务
  baiduTJ: 'BAIDU_TJ_KEY', // 百度统计
  appleRedirectURI: 'APPLE_REDIRECT_URL' // 苹果回调地址
}
if (process.env.FRONT_CONFIG_MODE === 'env') {
  for (const key in ENV_CONFIG) {
    const field = ENV_CONFIG[key]
    config[key] = process.env[field] || config[key]
  }
}
module.exports = {
  ...config,
  registerAddress: config.brandAddress + '#/setup',
  buildPath: path.resolve(`./dist/${env}`),
  date: new Date().toISOString(),
  commit: gitCommit,
  ossPolicyPath: '//keeper-dev.tfr.ink/general/oss',
  env,
  name: pkg.name,
  version: pkg.version,
  publicUrl: '/',
  cdnPath: 'dev',
  storagePrefix: `tfr.admin.${env}`,
  ...env !== 'localhost' && {
    publicUrl: `//${staticHost}/${cdnPath}/`,
    cdnPath
  }
}
