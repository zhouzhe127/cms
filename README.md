# tfr-platform-cms

> tfr-platform-cms包含了 Element Plus & axios & iconfont & permission control & lint。

目前版本基于 `vite` 进行构建.

## v0.9.0

## Build Setup

```bash
# 克隆项目
git clone tfr-platform-cms.git

# 进入项目目录
cd tfr-platform-cms

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:2278](http://localhost:2278)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

### 关于协作

###### 分支管理：
我们会使用[git-flow](http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html)，请先按照[该教程](http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html)初始化项目

##### 将pull request合并到本地来进行review
```
$  git fetch origin pull/对应的ID/head:本地分支名
```

###### 代码规范：
大家一起约定，制定一份`.eslint`来统一项目的代码风格，其中几个关键点：
- 不要使用分号
- 不要有多余的空格和空行（不超过两行）
- 变量命名用驼峰命名法
- 不要有多余的定义但未使用的变量
- html/jsx中的attribute value使用单引号
- 使用全等符号`===`

###### GIT Commit Msg:
格式一般为: `[<type>](<scope>) <subject>`

其中`<type>`可以是:
- done (finish new feature for the user, not a new feature for build script)
- WIP (work in progress)
- fix (bug fix for the user, not a fix to a build script)
- doc (changes to the documentation)
- style (formatting, missing semi colons, etc; no production code change)
- refactor (refactoring production code, eg. renaming a variable)
- test (adding missing tests, refactoring tests, update mock api etc; no production code change)
- chore (updating build script etc; no production code change)
- Merge (merge with somebody)

其中`<scope>`可以是:
- lib
- styles
- assets
- service
- ui
- page
- config
- mockAPI
- etc.



## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

[TFR](https://www.thefuturerocks.com)

Copyright (c) 2020-present The Future Rocks
