# tfr-platform-cms

> tfr-platform-cms包含了 Element Plus & axios & iconfont & permission control & lint。

目前版本基于 `vite` 进行构建.

## v0.9.0
#### 开发环境依赖:
- NodeJS version: 16.15.1
- NPM version: 8.11.0

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

```
tfr-platform-cms
├─ .env
├─ .env.dev
├─ .eslintrc.js
├─ .eslintrcignore
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ dev
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ dev
│  │           └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ c463021137b9ed331c25aa7d150b9b6d26f0f4
│  │  ├─ 01
│  │  │  ├─ 4fa55a526d4c46556500af227c83eeafcb923d
│  │  │  └─ fbd9d9ff092312e08312c90698806734155f3f
│  │  ├─ 02
│  │  │  ├─ 2dd6389b850e3659b6a6adb72aa1a390ec046b
│  │  │  ├─ 896f78f50363aea6a12b6c7ba7e1e36722d510
│  │  │  ├─ 98cfe8aacbe06ee23127ab3a3834f72c265372
│  │  │  └─ cdc4309d1bfe9fb7dc4f022079883b901400b3
│  │  ├─ 03
│  │  │  ├─ 001a20fcad215911c1fc28460108f0217e663f
│  │  │  └─ 1ccff93d43c758ab878a35678e9e0b8aa597b7
│  │  ├─ 04
│  │  │  ├─ 62a36f3a7d4f674c5ecea5846f02f4a082b318
│  │  │  ├─ b82100fc4c949c5dfe93bedadf9cb1849dc6af
│  │  │  └─ d8f579d3dfeced96b36e55ebb106c9cf5c4382
│  │  ├─ 05
│  │  │  └─ 2a4e345088670f7a9cf23605d9a8b88c45a442
│  │  ├─ 06
│  │  │  └─ abbb0460ef0122dba85a17ec917d951b9ed2d9
│  │  ├─ 07
│  │  │  ├─ 535375d6b5e68aba8d97d015a06f14602ef0f7
│  │  │  └─ a864bd755998fdd5dc9f4165cc54641a03e3d6
│  │  ├─ 08
│  │  │  └─ c53694a832a2c53a7b8b82bcca2b2f6c5aa58a
│  │  ├─ 0a
│  │  │  ├─ 1f7fdc0c0edbec3c81f59fc78d119a6eecb901
│  │  │  ├─ 47531dc2c001c3422de43be54681a8a1f61248
│  │  │  ├─ b8342303eaf6ae7effd910601627e1fa826bbc
│  │  │  └─ e6b60beaa9777d12ddab66bdd147ac4140395d
│  │  ├─ 0b
│  │  │  ├─ 04c754f8eac506a4e33634924b28d639052c6a
│  │  │  ├─ 16e8345f3e987eed55c1429779a67c5b121633
│  │  │  └─ 72da13a7439885f505e46734f6cd0729f5037e
│  │  ├─ 0c
│  │  │  ├─ 065b924bb5fa4111890dc78b76d68cc1d6d403
│  │  │  └─ b97d11fdc58be62f2291e99b5609ca56659451
│  │  ├─ 0e
│  │  │  └─ 6ec79587c177420b5a3e0cecf2530c5a7ee90b
│  │  ├─ 0f
│  │  │  └─ 211226d8b0a7f8611c3c5f8867102a66d3e677
│  │  ├─ 10
│  │  │  ├─ dd502b3e39e3f996d104314cd28c9d99bae914
│  │  │  └─ f6304673724e7c9c581884cee484ba708a676c
│  │  ├─ 11
│  │  │  └─ ebeac6cf52bc1be685c9ee8438e5337af437e8
│  │  ├─ 14
│  │  │  ├─ 1b60ed6d3aa5f77cf900c9d8cc62e83f5b0980
│  │  │  ├─ 62056461944bf474c71a7162d77df123b7c181
│  │  │  └─ 8c3cc98aa897501639e986881e40b0a19b1e56
│  │  ├─ 16
│  │  │  └─ 6725cdf65f6f0085724cb056995a0b72a5313f
│  │  ├─ 17
│  │  │  ├─ 41cb2c951906544aa3f0b1db2eaa1748540e7b
│  │  │  └─ 6147346663d10b514e1a931606d07b7b20981c
│  │  ├─ 18
│  │  │  ├─ 1797f1e2d8aa02f9c72ea189b985fe0e798aa1
│  │  │  └─ 6b076c88811c602639ef9eaf1a7e4e46fe0be5
│  │  ├─ 19
│  │  │  ├─ 26c60236da8c3dfb0e50bc759ffd937c2f4fe4
│  │  │  ├─ 5485d4b2d0423e56297e924a74a40f4c22f2a7
│  │  │  └─ 83693b11f87a59a02dba004e64cdc317ac0a6a
│  │  ├─ 1a
│  │  │  └─ a8829d1858e9c714e407867c3aea6d877f54d8
│  │  ├─ 1b
│  │  │  ├─ 81d18ff83b4edd947a17905bd4d56134843afa
│  │  │  └─ cbf236e469b87bcfb3cb3714f9e472da5c54a7
│  │  ├─ 1c
│  │  │  ├─ 9032d8a59fe8cdcba29a9e579a7f0253ec420a
│  │  │  └─ f25ba978aedb53ba022cc76b8399d6977a69fa
│  │  ├─ 1e
│  │  │  ├─ 65b4b8239ad6eac37555c52c25b4abb6c8c7e0
│  │  │  └─ a26e0dd12d7c37c5db5ae24dcb8b7d4b5b2a9b
│  │  ├─ 1f
│  │  │  ├─ 170f56d7831378c10797d2f4900f2c7eb94405
│  │  │  ├─ 391dd61440c6aaf1e32e76bb88a38052632406
│  │  │  └─ ce4256d955a4e87e432b06371cb3409dab9d02
│  │  ├─ 22
│  │  │  ├─ 8efe68dc25824ed7676c39298483532b72c167
│  │  │  └─ d4aa5a4360dece220b69f4c6a7af7d77efea16
│  │  ├─ 24
│  │  │  └─ ce49fed09ba986e5b67dca5a93c2c30a7ebe3a
│  │  ├─ 25
│  │  │  ├─ 263d94af07cca0a478373cb09815565d762905
│  │  │  └─ f6f63273413af5e243aae8d49de39e29dd575f
│  │  ├─ 27
│  │  │  └─ 0784df5492f889677b441d98b7289ce92bc716
│  │  ├─ 28
│  │  │  ├─ 0a7adda1e47c0253eb4eb0a643c1e14a15787b
│  │  │  ├─ 52848de2b8d0302fff332618bc7f2a33941643
│  │  │  └─ 66fdb601a006cb1bb5d78d2a40d194608da1c7
│  │  ├─ 29
│  │  │  ├─ 1ce3f0a5dabf7959f29e3738b8d5418a35b9ce
│  │  │  └─ d4d1d95db99e144fdde38af0dcad8774a03e65
│  │  ├─ 2a
│  │  │  ├─ 23423a9588d94b6c509b05322504694332263a
│  │  │  ├─ 6d34164d5bd1f60934582943887088a6bee8aa
│  │  │  ├─ 6d363e2661f04398c3a98514bf5f1d61e9385b
│  │  │  ├─ 74d84a3dd2a9606eacd4ed511f1707f34d3558
│  │  │  ├─ c89fb33e1dc3bd6f6f11cc35c30cef0abe87dd
│  │  │  └─ f1e7439c44af68ae59a42d5ca5351350a8e57c
│  │  ├─ 2d
│  │  │  ├─ dc3e2e970d69df382b7577752c0cde079a002e
│  │  │  └─ e298d675d77f76f9e690f95a87ed4e030aff35
│  │  ├─ 2e
│  │  │  ├─ 890fa319cee5aa3b47f731a9a70ccec2f500af
│  │  │  └─ dff78486cd6043dac6121247bee88dd2f7b7e0
│  │  ├─ 2f
│  │  │  └─ 1fb59d92c2468c626452e76da726c243da4eaf
│  │  ├─ 30
│  │  │  ├─ 1dd5236e5b120ae3d3101fadfa617a1b0581de
│  │  │  ├─ a1e52e18d8d80300f83bafd4178f23c6bacea6
│  │  │  ├─ b15e215a24b78043970d820dd5dd5d2e6a3863
│  │  │  └─ dbd837d8c4f351042d728390ff4c38b86108d6
│  │  ├─ 31
│  │  │  ├─ 4683857bb5f55e6a9ae7f7fc6283c513837d2a
│  │  │  └─ 9e7b0a29c72874214c648772bcd2ad980b6cea
│  │  ├─ 32
│  │  │  └─ 8f6ac2e6c4689d2aee3868a1363da9e80b5052
│  │  ├─ 34
│  │  │  ├─ cdd2afba56b9dd3c7f0e3b758069a92db6b7bf
│  │  │  └─ d1d305ed915224e310bda9e08e41c2aa30fd8a
│  │  ├─ 35
│  │  │  └─ f8c2ba34bfb1ac13c9dacb8242525dd975ce81
│  │  ├─ 36
│  │  │  └─ b74bbd995e7cc5c6baab1ce6808ecfda8c27ae
│  │  ├─ 37
│  │  │  ├─ 79f3e4369be525107a6b8c5b9eea0f451fe855
│  │  │  └─ 87552d002886797e80c869132fdb2697b7c709
│  │  ├─ 38
│  │  │  ├─ 439b419c2e3fb6025617b8e27b4fe30031b71f
│  │  │  ├─ 78f749d9ecf37f6ad683d63360dbde5ece2b12
│  │  │  └─ dae70739a15aafd1a462e55b214a27f5a304c3
│  │  ├─ 39
│  │  │  └─ 5ab433bb827bd356297eb395e4c8524d169760
│  │  ├─ 3c
│  │  │  ├─ 50b186c916de79d5ec93ba3798640829a22f35
│  │  │  └─ 610d5bd5898eb187e15b3472fa5aacc2d9291f
│  │  ├─ 3d
│  │  │  └─ 13fb0da5c2221ad3d95a14cf10d28a74c4ffae
│  │  ├─ 3e
│  │  │  └─ e7c7da39b28b962781ca25b2077678b6b71dd3
│  │  ├─ 3f
│  │  │  ├─ c6b94cf05e763cf4d2b30e966101178483dbe1
│  │  │  └─ d661d369df0cca252ef1f73db2721382bd0b55
│  │  ├─ 40
│  │  │  ├─ 5f61073e63417f668acb8590042dc42a0427e0
│  │  │  ├─ 71dfede2a0be1f1c999499fd5329a3cfe34e91
│  │  │  ├─ 753f0e29b0a17dacd25131dcc172970e7ae966
│  │  │  ├─ 7bc4ba16e01e354ec85f6d670e24be08ba95ce
│  │  │  ├─ f1b352bfacdf45d36981df60e29ec2ed809f59
│  │  │  ├─ f2063bbafed7ae041198da4a580774f5d4ecea
│  │  │  └─ fa85a18853e4cafe8357f798b45bdd833013fd
│  │  ├─ 45
│  │  │  ├─ 554b9967da80313c55e0c37c26e475c7475304
│  │  │  └─ f699603a8fa6e9910adbe823df0bb85fc1f472
│  │  ├─ 46
│  │  │  └─ e91cc5043799cb99b029fc06bf2c862fa7b893
│  │  ├─ 47
│  │  │  └─ e62e2324726f536f7b22c295f9a71237ab8754
│  │  ├─ 48
│  │  │  └─ a3e37ad43964273a21485c9866fd4f32dcce2c
│  │  ├─ 49
│  │  │  ├─ 0a57576dae9980bd1483a28f5998f0a83a1e24
│  │  │  └─ a75ec35308ecda1ff9b761eb8963f18936a9af
│  │  ├─ 4a
│  │  │  ├─ 50e066ba0287acd9ac13ba39dc59231b06f485
│  │  │  └─ 96619f98bf0e028c345660deb3e02538009a07
│  │  ├─ 4b
│  │  │  └─ e281d79a3828f35f3260a9eb55816c6e787952
│  │  ├─ 4c
│  │  │  ├─ 32e8530907fb0d6d463b52b71e3adbbcb41baa
│  │  │  ├─ b27cc811e28605bb6d0657a6257f0c901f6809
│  │  │  ├─ e59c4db9d4e0fee1e17d09d39b6d7207958ad9
│  │  │  └─ ec15e0927683d68e440bcef661952adbc9220d
│  │  ├─ 50
│  │  │  └─ a03a45a1c316f6ba6520cd357b4457afc5e622
│  │  ├─ 52
│  │  │  ├─ 20f461a2d785818114c25637eb4593318c6b31
│  │  │  ├─ 67ef8e7325577ba9d0aaaed76a6d2a4a852729
│  │  │  ├─ 7d11e20af16c68fe70e0ec14e23905c59f261f
│  │  │  ├─ d3f87194a2334ffe0a219aa31d039e7fbb7719
│  │  │  └─ d51647b5aa090aba0646b24ef3eb736eb501a8
│  │  ├─ 54
│  │  │  ├─ 5bc2e544c84258e08ed00d562c1c102147841e
│  │  │  ├─ db4380256be9f186a1b17edc6fbd6d581b2031
│  │  │  └─ de5f781cee405af77fe5420a535f1e587377c7
│  │  ├─ 55
│  │  │  ├─ 061428d3240bfdb8c3754f97d32cf886427f94
│  │  │  └─ d1ab84e4a5b78d56d4e29a89bd8ace89457f50
│  │  ├─ 57
│  │  │  ├─ 6c6eec88beb9f5ead6963c542c16712baf1bff
│  │  │  ├─ a0fbcea0a71c29c212416d2b570644c451520d
│  │  │  └─ bb490df37f9fa7b03dd230f33d04ec34b12f8b
│  │  ├─ 58
│  │  │  ├─ 162da1b9ce65c0ecbb5fa4374ed9a19594ce4f
│  │  │  └─ 599870745eba388fc97d64b5824085feb3c321
│  │  ├─ 59
│  │  │  ├─ 0753d65c18e7b58c92cd98751afd114f62632b
│  │  │  ├─ 1ebfcaa77b51f009f07440f57bfffa19c68a4c
│  │  │  └─ 5eac44cfec353da351205d208610d80575c555
│  │  ├─ 5a
│  │  │  └─ 2bd4a4b05545f3046a93e2a3d7e4d2dca2fdc5
│  │  ├─ 5b
│  │  │  └─ 6d0dd1da4710e9455476246b6236717bdbb496
│  │  ├─ 5c
│  │  │  ├─ c739e6e9aa326be704c5bad51c1a5af3a44ceb
│  │  │  └─ d6bb50f8290068dfa70a7ef53e9c6f09533936
│  │  ├─ 5d
│  │  │  ├─ 08be4e68b04b36bfba096c66eb752c4e0ce03b
│  │  │  ├─ 5e274413719cb186ab3629a37f354ae7d21f7a
│  │  │  └─ bb227772d15e6a6214b02def2ec7bffadb20e8
│  │  ├─ 5e
│  │  │  ├─ 073f1fc0759622df2567b32aedf0c638682a3c
│  │  │  ├─ 9414246411c5134f1643af9209fc3507d091c5
│  │  │  └─ c6ae341674413a9ba13502e6c9476f82aa17cb
│  │  ├─ 5f
│  │  │  ├─ 6af85091a687cb59d0b81889195375878425c6
│  │  │  └─ e2e218655a71e17ab21e15737b141f01103c1d
│  │  ├─ 60
│  │  │  ├─ 7f02b27effc4181d977d0d8241368de1fa8af4
│  │  │  └─ 945e8b70ad31f2a4cff5e8fc116c0d85225d3d
│  │  ├─ 61
│  │  │  └─ 1b0cfe1ae8609189bfa012cd242dfb7c505dd7
│  │  ├─ 62
│  │  │  ├─ 327d7f1007af751ad22123beb00d36b702aa31
│  │  │  └─ 3bd4b2ede2d23ff87d01aa371de94833d9ec7e
│  │  ├─ 63
│  │  │  └─ 551e3a6b613db0a733fb37d8fa02a18a9b5ad1
│  │  ├─ 64
│  │  │  └─ d70334cc1b95a0b3c3b6d2230a6e4af29c5a05
│  │  ├─ 65
│  │  │  ├─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  │  ├─ 373efc2ee0833472417385c75a8a7d1ce84149
│  │  │  └─ 857dd9ae4cda223ad02f52d5f8f1c41e504544
│  │  ├─ 67
│  │  │  ├─ 54e846c498638ea1cc7ff58bcab1ffccf84638
│  │  │  └─ bb2b81af87b2c3a1f823e7a2d6a0e3448dc377
│  │  ├─ 68
│  │  │  ├─ 08682e9c402383d69d303f3a71442beb080ed8
│  │  │  └─ aaca32a158c604360b5a46132807a3b7dc7adb
│  │  ├─ 6a
│  │  │  └─ 2c343940a887650db77eadf832922af96edd4e
│  │  ├─ 6b
│  │  │  └─ f04d7f4400b4e3a8d6971486c54c85cb7a265b
│  │  ├─ 6c
│  │  │  └─ a209bbb9416ece7685efb07c323c4f9a34cee0
│  │  ├─ 6d
│  │  │  └─ f50190aab43bd3a727b580fe2699ba36a4712c
│  │  ├─ 6f
│  │  │  └─ 5ae2f0657115f849eb4146beea38e1204877d2
│  │  ├─ 70
│  │  │  ├─ 1e207d4aff89e1e6118850d675d901447f085a
│  │  │  ├─ 395ba7a39833233aa6191635e63f336120dac2
│  │  │  ├─ 7d0e381e29545b6a7129819b37033eae3954e9
│  │  │  ├─ db6608458399c55593b636dfab253844010c67
│  │  │  └─ f1937f903b497ef9f9a38bfbabc5edc5667e7d
│  │  ├─ 71
│  │  │  └─ 8809925f2de27220e04095da134be547688802
│  │  ├─ 72
│  │  │  ├─ 8a01c3c2d52d39392f8240f18655ab22f30bd8
│  │  │  └─ e8b7aa6017e4a73134b499a4e77b72f5676471
│  │  ├─ 73
│  │  │  ├─ 709719fca5fa02f3e43b7956ff9a66efd38540
│  │  │  └─ ca45d049d490f545db70ee5597378b7c766763
│  │  ├─ 74
│  │  │  ├─ 564aad827d5cfb0c779098cfeb801754d5604a
│  │  │  └─ f832e063afbd70e75490acc585b11d0c59911f
│  │  ├─ 75
│  │  │  └─ 96c042770713bf8728c032223a52484e902aaa
│  │  ├─ 76
│  │  │  ├─ b60797c8a8b551d288b585483422527a16de44
│  │  │  └─ bc807d8da29ec100b04697125a5ad14287e508
│  │  ├─ 78
│  │  │  ├─ 7a3de22826bf88f09a656b87c577ce0b512d61
│  │  │  └─ e2869fcdce277649b77fc1c88ee04576a6b713
│  │  ├─ 79
│  │  │  └─ 26dd7ab3bf5c190178c80845cba5cd09d3659b
│  │  ├─ 7a
│  │  │  ├─ 8b8cbe5697a7c8a24eee2e2c4b2f1d12c76130
│  │  │  └─ 95bc30119e143be2c1cee4503ede6c4b4260a7
│  │  ├─ 7b
│  │  │  └─ 5ad8e50a342a1cefbffca23c9c273221e0587a
│  │  ├─ 7c
│  │  │  ├─ 1e9d25ceda82e702ccb2329063acc4a56cbf31
│  │  │  └─ 279b8175da086d333e24725093321c1e3ac098
│  │  ├─ 7d
│  │  │  └─ b4362cf7f11f5e248162696869ea38a86248e4
│  │  ├─ 7e
│  │  │  └─ d81a88c8ce6e264c1f651859fc9d822c335aab
│  │  ├─ 7f
│  │  │  ├─ 4af58a1110bd430b0c103224098a8fdde57f04
│  │  │  └─ 61f98a94f161ba7427fb739756a2cc2628a45b
│  │  ├─ 80
│  │  │  ├─ 4268dd2e3259e5396ce0ef8814dde55f8db6a4
│  │  │  └─ 9f8335880dbbe1a366621b70dd6b26964dfe9a
│  │  ├─ 81
│  │  │  ├─ 37ec3d95936d9ca0b70fb36a182b650e60d6b9
│  │  │  ├─ bd4ba473dd3500a7e6fd062959865e8d8de455
│  │  │  └─ ed6f43619e3091201873f0bee786e945d39061
│  │  ├─ 83
│  │  │  ├─ 1533d71037a1ef81faf8c551c136cefd082047
│  │  │  ├─ 8592ddc0e2370b1d1807a140bcb63eca695b24
│  │  │  ├─ e3b185caeb4d301640e44599963fc57e900bde
│  │  │  └─ f7b41384135978c2adbe07c3361a88784273a6
│  │  ├─ 86
│  │  │  └─ 240e598fd0596f5323546bad19f85589132b65
│  │  ├─ 87
│  │  │  ├─ 7566dde4703e8a0cf911e7a27ee5b910261567
│  │  │  └─ d6eba4bcd0280737fb0a22c6247951eea62c99
│  │  ├─ 88
│  │  │  ├─ 6bacf9e3f522042602a16f85368119f498b195
│  │  │  └─ c3b0ae4162bc2647d8b4497e5fa2201335d069
│  │  ├─ 89
│  │  │  ├─ 010de4a5dd3798a298af12b03a3f334920798e
│  │  │  ├─ 02432ee6b7696bc469ae0e400f0b61821a01c2
│  │  │  └─ 4efe3ceed25c7db8b9ce1d3e787a86850f892f
│  │  ├─ 8a
│  │  │  ├─ 426a4d789cdfc27e87f1b9a84e61d920d130dc
│  │  │  └─ dd4f0ebc2f21f4d0179994c4d74a4201ffc886
│  │  ├─ 8b
│  │  │  └─ 28ee087ef73ce3db5d5cbae1979acf05c36cdb
│  │  ├─ 8c
│  │  │  └─ ad4026553da51fca3150b8c202cf1a0fdde1fe
│  │  ├─ 8d
│  │  │  ├─ 5a5b4e934d9c0c58f94d9262eba85f145564a8
│  │  │  └─ da3d7782cf9abd10acab6fdb1ea18c6fd08435
│  │  ├─ 8e
│  │  │  ├─ 37a2a50f7c5ced1bab44ca2476bb3431626587
│  │  │  └─ fe06bae20f226b1aa3573c1d8f74a164327a86
│  │  ├─ 8f
│  │  │  └─ 866a2ecb469fd6ee1ada194b877ab57a52580b
│  │  ├─ 90
│  │  │  └─ 2c0458141dace70bd553f8899136ee2d15b9b2
│  │  ├─ 91
│  │  │  ├─ 0ac243e26d52909a8f0f04525ca93e7dec6a1f
│  │  │  ├─ 1996a78ac18a96cb94fc694000a020cedbd5d1
│  │  │  └─ a7996609d893e785f0c27d0e2388981dd0fd34
│  │  ├─ 93
│  │  │  ├─ 80ee065fb214c1b6d9c59b8e01920ed8d6d419
│  │  │  └─ 823cec4bec63b0ff36fbe5845b17cb7590d2ae
│  │  ├─ 95
│  │  │  ├─ 2a9d12b591ea3c985dd31aa64ad49d92648fe9
│  │  │  └─ 8be04c8d54514d7b47d553f3571477710bbaef
│  │  ├─ 97
│  │  │  ├─ 0dbb40d40b8c9d81215c484c14da4cd4f91b53
│  │  │  ├─ 3200912b2457464341ed895e3e925a050d0460
│  │  │  └─ e0333afc1b02d343ed2809f917048bbfa06544
│  │  ├─ 98
│  │  │  └─ 82fbc72935e719540cb5e9f0b664d200df3a21
│  │  ├─ 99
│  │  │  └─ 9019611586a5ba8c9cb22e7009aa6a097336e6
│  │  ├─ 9c
│  │  │  ├─ 0af464cd65fa8510e6140ca47f42f36470e4b2
│  │  │  ├─ 2e07a5f54401a3fbfcc9d31540a409b926ddd2
│  │  │  └─ 6d742974332c59e97b853ee3d43336ad96eeae
│  │  ├─ 9d
│  │  │  ├─ 0895156c34911a16f4304081a178ac05deb614
│  │  │  ├─ 382212e6328cd5ab9eed09c44cf1c2872046c8
│  │  │  ├─ 4dab9cbe36b9107e4781aae2ade8d3c84808d9
│  │  │  └─ b0a84056c6f279b133e9dbfd67cd8594621ab7
│  │  ├─ 9e
│  │  │  ├─ 8422715f746f9815012a974d1991de1380bd21
│  │  │  └─ ba0a38dfb84683c33d5f7cc99df52873226340
│  │  ├─ 9f
│  │  │  ├─ 7bf544492b284b09aaff3eae8dc2f89b97b19d
│  │  │  └─ c04dca01782d8ad6642f4b568d30e1f381df90
│  │  ├─ a0
│  │  │  ├─ 37d57a679d6316736a74c86cbfc6f5fae57c6f
│  │  │  ├─ 5c41855f45c357e42990d3dacbb1c84dc9cacc
│  │  │  └─ 773da93dbd912f8e0e4c2650ed04a5f53951d1
│  │  ├─ a3
│  │  │  └─ b634b1456032ef847429f4a9fe6bb5197ce624
│  │  ├─ a4
│  │  │  ├─ 29b423fb5fd3ff339bbc772855dc08e57c2e0b
│  │  │  └─ 71af3ff879fef990db07781f34481bc129d4ea
│  │  ├─ a5
│  │  │  ├─ 19b9ffdb2768d11595ce40e5f26ff699a84ff6
│  │  │  ├─ 34941ac0a954282a422d9477f9fc190ba01d7b
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ b0545a805135f2ef793a079fedae085840b337
│  │  ├─ a7
│  │  │  ├─ a6b86390c2914ed72ba40aa689fdf4871cb3c1
│  │  │  ├─ cea0b0678120a1b590d1b6592c7318039b9179
│  │  │  └─ e015e14653b5ddcb9d8660cc07546a6616b384
│  │  ├─ a8
│  │  │  ├─ c082a0c256f69eca367cc702fa806bc63605d0
│  │  │  ├─ c3e81bb6b228533cff5e19266ef909c9872732
│  │  │  └─ e1eda21473e01b214bc6f9ae5b0e4de1aaa914
│  │  ├─ a9
│  │  │  └─ 816cbfef17c7362c408cb64e2a4e30b9f12f36
│  │  ├─ aa
│  │  │  ├─ b1b597b0af3d414c5538cfd416eab7ef6d8d72
│  │  │  └─ fef9509dd5c4364df3b0e29457a63e0c87011b
│  │  ├─ ac
│  │  │  ├─ 41f96d2b2b67484e13a5e90128b4f973a436ec
│  │  │  ├─ 574cfdd7bbbf880351932c4b902bbc5ee896ec
│  │  │  └─ 69eb9e9439cb07274a588265b5d3cc4c5b8946
│  │  ├─ ad
│  │  │  └─ 4ac85b5a20848aa89ecf04ed96cb6e7d00cc2a
│  │  ├─ ae
│  │  │  ├─ 55bf31a2d64909fbda26874dc57580e6a3af12
│  │  │  ├─ 80dc74d869305357db5ad39ac39ca3755c8d6b
│  │  │  └─ fd6d1de9e21d4eca521cd46c79c9e908a54ddd
│  │  ├─ af
│  │  │  ├─ 2dae8ffe71fae551ab166a29c03880d6d6fea2
│  │  │  └─ 2e7aac746be4577bf8a71af56276d9d7041843
│  │  ├─ b0
│  │  │  ├─ db7e73f809dcace0b93ff5fb62c1b6f7da9303
│  │  │  └─ f15e84dd7f1f3c2874d15f73fe3f073704e708
│  │  ├─ b1
│  │  │  └─ c6a8dbd5187c1db8acd2557037444bdcb962c7
│  │  ├─ b2
│  │  │  └─ b52705c4d7eddfee2367ec124f584ba220100f
│  │  ├─ b3
│  │  │  └─ 3cb1a1cabb4b8e1565a577fa60fe24f864e6f1
│  │  ├─ b4
│  │  │  └─ 25822683e1bb97c1a0c6c93a35f4cc76f34b34
│  │  ├─ b5
│  │  │  ├─ 0c71e31f1eebb6666403e96322f4b7f52237a5
│  │  │  ├─ 1848b4ef7621732e2af1d61207bccfb63d2139
│  │  │  ├─ 3285b208bc998f53393c4c958c17c16a53c665
│  │  │  ├─ 7918dfc05aed198723a6ec24e1b7c89a1503a4
│  │  │  └─ b5ba0cb405fa546229a7b0cd2721acc31d03de
│  │  ├─ b6
│  │  │  ├─ 6e4ea29f33ffd2092105c08a53b6e57ef0becb
│  │  │  ├─ ae97aee345cfd900f70e84aa87fcfd586ea89e
│  │  │  └─ c880b517a0dc4b4fac9d466d506d46f3a59224
│  │  ├─ b7
│  │  │  └─ 64a00a5b05e6716a33384536715522048971c6
│  │  ├─ b8
│  │  │  ├─ 6e383b49d33c9aad178c9ecc7f3f3c2331694f
│  │  │  ├─ 81c8913d177bedd12c5d3fa07e9b6967e1c910
│  │  │  └─ 838526f85688a7e992095e9a723a7f30f421db
│  │  ├─ bc
│  │  │  ├─ 0be75bffbdae561eaa93153721f199f0319981
│  │  │  └─ 0e0f65f0e6201d04f209b7a0ce2d23ea5e7005
│  │  ├─ be
│  │  │  ├─ b1136121a740151ae8783a4d6ca1a0b52c493a
│  │  │  └─ b8ecdeb35c9f20d36be0a8e1e9ebe629bc07c3
│  │  ├─ bf
│  │  │  ├─ cfc36100b92b10f3ca12583bb1313cbfad7845
│  │  │  └─ d7e29233bf58be43b818010ecac93c383ec398
│  │  ├─ c0
│  │  │  └─ 550dfb894e0c9425f7f5dbcb1125af25ae409d
│  │  ├─ c1
│  │  │  ├─ 34d322424020c03feaa0293280fabf59f6dada
│  │  │  ├─ ace90cea5e95cc85a908930de8b7c49c0a83e2
│  │  │  └─ f90d317b929a74ef250b2761d8b554e6e8633d
│  │  ├─ c2
│  │  │  ├─ d15195629f16f45c67e37b9bd7555d3a88458e
│  │  │  └─ e23dc4d90c1ea7c06f09d4e594c37f28e0f43d
│  │  ├─ c4
│  │  │  └─ 85b1f214c8c7b55d8a5181fdcac563c02af39e
│  │  ├─ c5
│  │  │  ├─ a6d039741214363d07956abc4a6b9dec35c9b4
│  │  │  └─ d40bbd7064e766aad406d1a2e039de79f2904f
│  │  ├─ c8
│  │  │  └─ 9ce17cf384774a9923b1d77545e471394ab0f0
│  │  ├─ c9
│  │  │  └─ d4226ecc153076728eea5b71ebc8ac9f05b41e
│  │  ├─ ca
│  │  │  ├─ 31ac8e9e8e069ddae39aca94d49621156f6188
│  │  │  ├─ 462d63c937b1e06be6c36ed6b0652447144fd0
│  │  │  ├─ d7382b17169626b07793627c5c1903d6c4fcc3
│  │  │  └─ e9f4d8411cd3567659095aa670033fb85fee58
│  │  ├─ cb
│  │  │  └─ f87782373be5f9656a001912da00ffd28e17be
│  │  ├─ cc
│  │  │  └─ 23cd6962431e9804c9350249ced3330145b9f1
│  │  ├─ cd
│  │  │  ├─ 0a31ecc1e28816d84b7a23f16470106bb408d9
│  │  │  └─ 51d69db209de8035f10641171aa4d2ce88896c
│  │  ├─ ce
│  │  │  ├─ 0314ba7ebc79b2e05eab9e896a178d3a370ec2
│  │  │  ├─ bab07b7711aca49e2d03e152ea09024bafd36f
│  │  │  └─ e3fdbce612ad0ece6debcf9bb8be8d1063d424
│  │  ├─ d0
│  │  │  ├─ 205d6d9ce8c20fc1d9989a01d4519e653fd828
│  │  │  ├─ 4b0438686e80479226abb56bc2a5ce8c05fb46
│  │  │  ├─ 552e4b033b71ecc66b7ab43b119aa4b4c2aeed
│  │  │  ├─ 7cb9ae1e516f30376192ff58bfa4484b6f6c95
│  │  │  └─ 8e6e29828d9b9f42ee39c364e4a6dec77456c8
│  │  ├─ d1
│  │  │  ├─ 15ba41289a1113c70e9da5c92d562cc41528f1
│  │  │  └─ 1906aec26dd14372dd1b298f72270c38cce1b7
│  │  ├─ d2
│  │  │  └─ 61b40268579d86f2c43522e4c991d2c52b6bb4
│  │  ├─ d3
│  │  │  └─ 93132cabcb33d41a0efb593a53263a6097e170
│  │  ├─ d4
│  │  │  └─ 4eb05e4d3a0c211a2a50f7a2dbddedbe9d26d5
│  │  ├─ d5
│  │  │  └─ c8554327b382b87e59b23af14b409413df6cf6
│  │  ├─ d6
│  │  │  └─ c071dd0231b55d4b6a2a2a9accfc0d3ef6d5fd
│  │  ├─ d7
│  │  │  ├─ 95dd3c61b1c6ae86f965404e78641b79a256c9
│  │  │  └─ a29ac311b8db602d93aa85d6839f5ee11c9092
│  │  ├─ d9
│  │  │  └─ 69dccb6c83ebbc3bfd6789b1faad88b77efeb4
│  │  ├─ da
│  │  │  ├─ 175699e1ae257a98ffa5efb706f42f58517dfb
│  │  │  ├─ 48fee597a1df875f49c5dddd367e3f153245bb
│  │  │  ├─ 72f0cf44cfe773c41a0c3067d7c6bca04b9c40
│  │  │  └─ a279bfd9bf19d590d055f9feaaf9b76223187c
│  │  ├─ dd
│  │  │  ├─ a0430396cbdcb2031c992a8233f385e095e39b
│  │  │  └─ a7d65e3d7b7af4072031f07189a3da0ef3a14f
│  │  ├─ de
│  │  │  └─ 3595048aabdb05eb0d75b29f11b938e8b922f8
│  │  ├─ df
│  │  │  ├─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  │  ├─ 7a36a2171fdc0801714415997a6ea1c952025a
│  │  │  └─ e87e4ca81bb8bcf9931f5aedfd0a454d4bbf90
│  │  ├─ e1
│  │  │  ├─ 153fe08200d7001c278f0746acf231ed2fb33a
│  │  │  └─ 63e50b2d0deeb219ac5df44ba51993dfbb7af6
│  │  ├─ e2
│  │  │  ├─ 142211eee9e1a2c436517586e6eadcb77d66b8
│  │  │  └─ d1de936ff050724e96947c29086e686ffe9254
│  │  ├─ e3
│  │  │  └─ 99c4a8ddf1886593ac9727bcf0bfa9f7d08254
│  │  ├─ e4
│  │  │  └─ 658a53dd0a67b1879c9edbb4416bbe66c4f704
│  │  ├─ e5
│  │  │  ├─ 06039cf7ad2803a9a1f64ba50a824c7649b03b
│  │  │  ├─ 16621da9e0ffae7479106deed61b7e216150af
│  │  │  ├─ 3f0c5090162881d330cb40a9edb5f85fbe73a0
│  │  │  ├─ b962fa64cf861638400f238b76674e32bd1d35
│  │  │  └─ cc6904f8d015a92f6016a4ba8bded433176279
│  │  ├─ e6
│  │  │  ├─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  │  └─ c6aa85a34e188c4381e2a086c79aa289b18289
│  │  ├─ e9
│  │  │  └─ 93792cb12c9d8223f5a731f2d662ab553180f2
│  │  ├─ eb
│  │  │  ├─ c31c717c6bf994ee856f80788a1a32f52871ef
│  │  │  └─ cc411b927ad6e6a076107b776835a51f6b92aa
│  │  ├─ ec
│  │  │  └─ c0bf2b9b1cd11214312f0c91169f5a81501588
│  │  ├─ ed
│  │  │  ├─ 692a78fd13087d266aff6c9f428f67762c73b1
│  │  │  └─ 836520f5d451c2bc814599cde8e4434105b0b4
│  │  ├─ ef
│  │  │  ├─ 16e69abe5d1250280e496c7498297c8985e80e
│  │  │  └─ 988193feb011257af75bc435a78e627e5c9bd4
│  │  ├─ f0
│  │  │  └─ d5fb0ce8b6faafe9dcd9ce10f7bb4260a6f09d
│  │  ├─ f1
│  │  │  ├─ 219a1d8605d2e635df86818e84cb83b0f50444
│  │  │  └─ 56d84fe7a08ac06584f6c12d8cb5de6b3fd098
│  │  ├─ f2
│  │  │  ├─ 21a02f69530551118b38cd8f8b33154df9a4f1
│  │  │  ├─ 7274d28b95e7237d752e33a444e2c51d2d0cc5
│  │  │  └─ 8b8bcc89b42205be9d6e75cea4b631e92a6ab0
│  │  ├─ f3
│  │  │  ├─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  │  └─ ddc88757af19cebe5fda7be529c073fbfd3aaa
│  │  ├─ f4
│  │  │  ├─ 1d2ad4f9937177853aeb636db325b2389dcf36
│  │  │  └─ ada1144ab4a48e66f5cc27524b04f9d8b8fca5
│  │  ├─ f5
│  │  │  ├─ b32c10e5449c66b349ff00ab26b87fadbcb5b1
│  │  │  ├─ b4881ee2761f3e4ccf156be0fc831e34349771
│  │  │  └─ ce0bb90ab40856e6b33f68ae2304b95a6b835c
│  │  ├─ fa
│  │  │  └─ 69b461bb6333acc77ffa62db29dc7070897e13
│  │  ├─ fb
│  │  │  ├─ 28324b52faeccee39953518f49874af299eac6
│  │  │  ├─ 2cd095a5aa5ac2810115b57f538789b1505e03
│  │  │  └─ c7b9ac3e9c31aba66cd84c11feb5c84cd7a035
│  │  ├─ fc
│  │  │  ├─ 22dc00c75f955d2cc455fe1f3ec78ba337cc0d
│  │  │  ├─ 4be983bbda8b7f2f04c9140eebe47f278c8957
│  │  │  └─ a651fa9e00ea2c3fcafcecf8cc1e0a4e2c9ece
│  │  ├─ fd
│  │  │  ├─ cf621e0e99cbc2fcdd296a7c1f0ff51534656d
│  │  │  └─ dc8f5ea5384177b12e068bcb5eb81cb3935f3b
│  │  ├─ fe
│  │  │  ├─ 7956cf430d2c24e3aa04c0427e5082bbafb565
│  │  │  ├─ a283c4ab44010bafa4d14d61cfe8a5a52ae7d2
│  │  │  └─ c386cb2a99888eb6d83cd83dec4beb22cbb351
│  │  ├─ ff
│  │  │  └─ 46b1fc13b441a46787421a14111edc87bf3dc8
│  │  ├─ info
│  │  └─ pack
│  ├─ refs
│  │  ├─ heads
│  │  │  ├─ dev
│  │  │  └─ master
│  │  ├─ remotes
│  │  │  └─ origin
│  │  │     ├─ dev
│  │  │     └─ master
│  │  └─ tags
│  └─ sourcetreeconfig
├─ .gitignore
├─ .prettierrc.json
├─ README.md
├─ auto-imports.d.ts
├─ components.d.ts
├─ env.config.ts
├─ env.d.ts
├─ index.html
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ favicon.jpg
├─ src
│  ├─ App.vue
│  ├─ api
│  │  ├─ request
│  │  │  ├─ index.ts
│  │  │  ├─ request.ts
│  │  │  └─ types.ts
│  │  └─ test.ts
│  ├─ assets
│  │  ├─ font
│  │  │  └─ SF-Pro-Text-Regular.otf
│  │  └─ image
│  │     └─ top.png
│  ├─ components
│  │  ├─ CmsEdit
│  │  │  └─ index.vue
│  │  ├─ HelloWorld.vue
│  │  ├─ PlatformControl
│  │  │  └─ index.vue
│  │  ├─ SecondSide
│  │  │  ├─ MenuItem.vue
│  │  │  ├─ SideMenu.vue
│  │  │  └─ index.vue
│  │  ├─ SvgIcon
│  │  │  └─ index.vue
│  │  ├─ TfrButton
│  │  │  └─ index.vue
│  │  ├─ TfrCheckbox
│  │  │  └─ index.vue
│  │  ├─ TfrInput
│  │  │  └─ index.vue
│  │  └─ TfrLogo
│  │     └─ index.vue
│  ├─ config.ts
│  ├─ env.d.ts
│  ├─ icons
│  │  ├─ material
│  │  │  ├─ flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2
│  │  │  └─ materialIcons.css
│  │  ├─ svg
│  │  │  ├─ 404.svg
│  │  │  ├─ add_black.svg
│  │  │  ├─ add_white.svg
│  │  │  ├─ analytics.svg
│  │  │  ├─ back.svg
│  │  │  ├─ calendar_black.svg
│  │  │  ├─ delete_red.svg
│  │  │  ├─ edit_cms.svg
│  │  │  ├─ home.svg
│  │  │  ├─ logo.svg
│  │  │  ├─ logout.svg
│  │  │  ├─ mobile.svg
│  │  │  ├─ pc.svg
│  │  │  ├─ siteBuilder.svg
│  │  │  ├─ suspended.svg
│  │  │  ├─ tablet.svg
│  │  │  ├─ tool.svg
│  │  │  ├─ tool_gray.svg
│  │  │  ├─ update.svg
│  │  │  ├─ visibility.svg
│  │  │  └─ visibility_off.svg
│  │  └─ svgo.yml
│  ├─ layout
│  │  ├─ component
│  │  │  └─ sidebar
│  │  │     ├─ index.vue
│  │  │     ├─ logoUser.vue
│  │  │     ├─ menuItem.vue
│  │  │     └─ subMenuItem.vue
│  │  └─ index.vue
│  ├─ main.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ permission.ts
│  ├─ store
│  │  ├─ index.ts
│  │  ├─ modules
│  │  │  └─ user.ts
│  │  ├─ pageconfig
│  │  │  └─ index.ts
│  │  └─ roleStore
│  │     ├─ basic.ts
│  │     └─ index.ts
│  ├─ styles
│  │  ├─ common.less
│  │  ├─ element-ui.scss
│  │  ├─ index.scss
│  │  ├─ mixin.scss
│  │  ├─ sidebar.scss
│  │  ├─ tfr.scss
│  │  ├─ transition.scss
│  │  └─ variables.scss
│  ├─ utils
│  │  ├─ cookies.ts
│  │  └─ validate.ts
│  └─ views
│     ├─ error
│     │  └─ index.vue
│     ├─ home
│     │  └─ index.vue
│     ├─ login
│     │  └─ index.vue
│     └─ pagecontent
│        ├─ components
│        │  ├─ AddModule.vue
│        │  ├─ Banner.vue
│        │  ├─ FootContent.vue
│        │  └─ Pagetop.vue
│        └─ index.vue
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock

```
```
tfr-platform-cms
├─ .env
├─ .env.dev
├─ .eslintrc.js
├─ .eslintrcignore
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ dev
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ dev
│  │           └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ c463021137b9ed331c25aa7d150b9b6d26f0f4
│  │  ├─ 01
│  │  │  ├─ 4fa55a526d4c46556500af227c83eeafcb923d
│  │  │  └─ fbd9d9ff092312e08312c90698806734155f3f
│  │  ├─ 02
│  │  │  ├─ 2dd6389b850e3659b6a6adb72aa1a390ec046b
│  │  │  ├─ 896f78f50363aea6a12b6c7ba7e1e36722d510
│  │  │  ├─ 98cfe8aacbe06ee23127ab3a3834f72c265372
│  │  │  └─ cdc4309d1bfe9fb7dc4f022079883b901400b3
│  │  ├─ 03
│  │  │  ├─ 001a20fcad215911c1fc28460108f0217e663f
│  │  │  └─ 1ccff93d43c758ab878a35678e9e0b8aa597b7
│  │  ├─ 04
│  │  │  ├─ 62a36f3a7d4f674c5ecea5846f02f4a082b318
│  │  │  ├─ b82100fc4c949c5dfe93bedadf9cb1849dc6af
│  │  │  └─ d8f579d3dfeced96b36e55ebb106c9cf5c4382
│  │  ├─ 05
│  │  │  └─ 2a4e345088670f7a9cf23605d9a8b88c45a442
│  │  ├─ 06
│  │  │  └─ abbb0460ef0122dba85a17ec917d951b9ed2d9
│  │  ├─ 07
│  │  │  ├─ 535375d6b5e68aba8d97d015a06f14602ef0f7
│  │  │  └─ a864bd755998fdd5dc9f4165cc54641a03e3d6
│  │  ├─ 08
│  │  │  └─ c53694a832a2c53a7b8b82bcca2b2f6c5aa58a
│  │  ├─ 0a
│  │  │  ├─ 1f7fdc0c0edbec3c81f59fc78d119a6eecb901
│  │  │  ├─ 47531dc2c001c3422de43be54681a8a1f61248
│  │  │  ├─ b8342303eaf6ae7effd910601627e1fa826bbc
│  │  │  └─ e6b60beaa9777d12ddab66bdd147ac4140395d
│  │  ├─ 0b
│  │  │  ├─ 04c754f8eac506a4e33634924b28d639052c6a
│  │  │  ├─ 16e8345f3e987eed55c1429779a67c5b121633
│  │  │  └─ 72da13a7439885f505e46734f6cd0729f5037e
│  │  ├─ 0c
│  │  │  ├─ 065b924bb5fa4111890dc78b76d68cc1d6d403
│  │  │  └─ b97d11fdc58be62f2291e99b5609ca56659451
│  │  ├─ 0e
│  │  │  └─ 6ec79587c177420b5a3e0cecf2530c5a7ee90b
│  │  ├─ 0f
│  │  │  └─ 211226d8b0a7f8611c3c5f8867102a66d3e677
│  │  ├─ 10
│  │  │  ├─ dd502b3e39e3f996d104314cd28c9d99bae914
│  │  │  └─ f6304673724e7c9c581884cee484ba708a676c
│  │  ├─ 11
│  │  │  └─ ebeac6cf52bc1be685c9ee8438e5337af437e8
│  │  ├─ 14
│  │  │  ├─ 1b60ed6d3aa5f77cf900c9d8cc62e83f5b0980
│  │  │  ├─ 62056461944bf474c71a7162d77df123b7c181
│  │  │  └─ 8c3cc98aa897501639e986881e40b0a19b1e56
│  │  ├─ 16
│  │  │  └─ 6725cdf65f6f0085724cb056995a0b72a5313f
│  │  ├─ 17
│  │  │  ├─ 41cb2c951906544aa3f0b1db2eaa1748540e7b
│  │  │  └─ 6147346663d10b514e1a931606d07b7b20981c
│  │  ├─ 18
│  │  │  ├─ 1797f1e2d8aa02f9c72ea189b985fe0e798aa1
│  │  │  └─ 6b076c88811c602639ef9eaf1a7e4e46fe0be5
│  │  ├─ 19
│  │  │  ├─ 26c60236da8c3dfb0e50bc759ffd937c2f4fe4
│  │  │  ├─ 5485d4b2d0423e56297e924a74a40f4c22f2a7
│  │  │  └─ 83693b11f87a59a02dba004e64cdc317ac0a6a
│  │  ├─ 1a
│  │  │  └─ a8829d1858e9c714e407867c3aea6d877f54d8
│  │  ├─ 1b
│  │  │  ├─ 81d18ff83b4edd947a17905bd4d56134843afa
│  │  │  └─ cbf236e469b87bcfb3cb3714f9e472da5c54a7
│  │  ├─ 1c
│  │  │  ├─ 9032d8a59fe8cdcba29a9e579a7f0253ec420a
│  │  │  └─ f25ba978aedb53ba022cc76b8399d6977a69fa
│  │  ├─ 1e
│  │  │  ├─ 65b4b8239ad6eac37555c52c25b4abb6c8c7e0
│  │  │  └─ a26e0dd12d7c37c5db5ae24dcb8b7d4b5b2a9b
│  │  ├─ 1f
│  │  │  ├─ 170f56d7831378c10797d2f4900f2c7eb94405
│  │  │  ├─ 391dd61440c6aaf1e32e76bb88a38052632406
│  │  │  └─ ce4256d955a4e87e432b06371cb3409dab9d02
│  │  ├─ 22
│  │  │  ├─ 8efe68dc25824ed7676c39298483532b72c167
│  │  │  └─ d4aa5a4360dece220b69f4c6a7af7d77efea16
│  │  ├─ 24
│  │  │  └─ ce49fed09ba986e5b67dca5a93c2c30a7ebe3a
│  │  ├─ 25
│  │  │  ├─ 263d94af07cca0a478373cb09815565d762905
│  │  │  └─ f6f63273413af5e243aae8d49de39e29dd575f
│  │  ├─ 27
│  │  │  └─ 0784df5492f889677b441d98b7289ce92bc716
│  │  ├─ 28
│  │  │  ├─ 0a7adda1e47c0253eb4eb0a643c1e14a15787b
│  │  │  ├─ 52848de2b8d0302fff332618bc7f2a33941643
│  │  │  └─ 66fdb601a006cb1bb5d78d2a40d194608da1c7
│  │  ├─ 29
│  │  │  ├─ 1ce3f0a5dabf7959f29e3738b8d5418a35b9ce
│  │  │  └─ d4d1d95db99e144fdde38af0dcad8774a03e65
│  │  ├─ 2a
│  │  │  ├─ 23423a9588d94b6c509b05322504694332263a
│  │  │  ├─ 6d34164d5bd1f60934582943887088a6bee8aa
│  │  │  ├─ 6d363e2661f04398c3a98514bf5f1d61e9385b
│  │  │  ├─ 74d84a3dd2a9606eacd4ed511f1707f34d3558
│  │  │  ├─ c89fb33e1dc3bd6f6f11cc35c30cef0abe87dd
│  │  │  └─ f1e7439c44af68ae59a42d5ca5351350a8e57c
│  │  ├─ 2d
│  │  │  ├─ dc3e2e970d69df382b7577752c0cde079a002e
│  │  │  └─ e298d675d77f76f9e690f95a87ed4e030aff35
│  │  ├─ 2e
│  │  │  ├─ 890fa319cee5aa3b47f731a9a70ccec2f500af
│  │  │  └─ dff78486cd6043dac6121247bee88dd2f7b7e0
│  │  ├─ 2f
│  │  │  └─ 1fb59d92c2468c626452e76da726c243da4eaf
│  │  ├─ 30
│  │  │  ├─ 1dd5236e5b120ae3d3101fadfa617a1b0581de
│  │  │  ├─ a1e52e18d8d80300f83bafd4178f23c6bacea6
│  │  │  ├─ b15e215a24b78043970d820dd5dd5d2e6a3863
│  │  │  └─ dbd837d8c4f351042d728390ff4c38b86108d6
│  │  ├─ 31
│  │  │  ├─ 4683857bb5f55e6a9ae7f7fc6283c513837d2a
│  │  │  └─ 9e7b0a29c72874214c648772bcd2ad980b6cea
│  │  ├─ 32
│  │  │  └─ 8f6ac2e6c4689d2aee3868a1363da9e80b5052
│  │  ├─ 34
│  │  │  ├─ cdd2afba56b9dd3c7f0e3b758069a92db6b7bf
│  │  │  └─ d1d305ed915224e310bda9e08e41c2aa30fd8a
│  │  ├─ 35
│  │  │  └─ f8c2ba34bfb1ac13c9dacb8242525dd975ce81
│  │  ├─ 36
│  │  │  └─ b74bbd995e7cc5c6baab1ce6808ecfda8c27ae
│  │  ├─ 37
│  │  │  ├─ 79f3e4369be525107a6b8c5b9eea0f451fe855
│  │  │  └─ 87552d002886797e80c869132fdb2697b7c709
│  │  ├─ 38
│  │  │  ├─ 439b419c2e3fb6025617b8e27b4fe30031b71f
│  │  │  ├─ 78f749d9ecf37f6ad683d63360dbde5ece2b12
│  │  │  └─ dae70739a15aafd1a462e55b214a27f5a304c3
│  │  ├─ 39
│  │  │  └─ 5ab433bb827bd356297eb395e4c8524d169760
│  │  ├─ 3c
│  │  │  ├─ 50b186c916de79d5ec93ba3798640829a22f35
│  │  │  └─ 610d5bd5898eb187e15b3472fa5aacc2d9291f
│  │  ├─ 3d
│  │  │  └─ 13fb0da5c2221ad3d95a14cf10d28a74c4ffae
│  │  ├─ 3e
│  │  │  └─ e7c7da39b28b962781ca25b2077678b6b71dd3
│  │  ├─ 3f
│  │  │  ├─ c6b94cf05e763cf4d2b30e966101178483dbe1
│  │  │  └─ d661d369df0cca252ef1f73db2721382bd0b55
│  │  ├─ 40
│  │  │  ├─ 5f61073e63417f668acb8590042dc42a0427e0
│  │  │  ├─ 71dfede2a0be1f1c999499fd5329a3cfe34e91
│  │  │  ├─ 753f0e29b0a17dacd25131dcc172970e7ae966
│  │  │  ├─ 7bc4ba16e01e354ec85f6d670e24be08ba95ce
│  │  │  ├─ f1b352bfacdf45d36981df60e29ec2ed809f59
│  │  │  ├─ f2063bbafed7ae041198da4a580774f5d4ecea
│  │  │  └─ fa85a18853e4cafe8357f798b45bdd833013fd
│  │  ├─ 45
│  │  │  ├─ 554b9967da80313c55e0c37c26e475c7475304
│  │  │  └─ f699603a8fa6e9910adbe823df0bb85fc1f472
│  │  ├─ 46
│  │  │  └─ e91cc5043799cb99b029fc06bf2c862fa7b893
│  │  ├─ 47
│  │  │  └─ e62e2324726f536f7b22c295f9a71237ab8754
│  │  ├─ 48
│  │  │  └─ a3e37ad43964273a21485c9866fd4f32dcce2c
│  │  ├─ 49
│  │  │  ├─ 0a57576dae9980bd1483a28f5998f0a83a1e24
│  │  │  └─ a75ec35308ecda1ff9b761eb8963f18936a9af
│  │  ├─ 4a
│  │  │  ├─ 50e066ba0287acd9ac13ba39dc59231b06f485
│  │  │  └─ 96619f98bf0e028c345660deb3e02538009a07
│  │  ├─ 4b
│  │  │  └─ e281d79a3828f35f3260a9eb55816c6e787952
│  │  ├─ 4c
│  │  │  ├─ 32e8530907fb0d6d463b52b71e3adbbcb41baa
│  │  │  ├─ b27cc811e28605bb6d0657a6257f0c901f6809
│  │  │  ├─ e59c4db9d4e0fee1e17d09d39b6d7207958ad9
│  │  │  └─ ec15e0927683d68e440bcef661952adbc9220d
│  │  ├─ 50
│  │  │  └─ a03a45a1c316f6ba6520cd357b4457afc5e622
│  │  ├─ 52
│  │  │  ├─ 20f461a2d785818114c25637eb4593318c6b31
│  │  │  ├─ 67ef8e7325577ba9d0aaaed76a6d2a4a852729
│  │  │  ├─ 7d11e20af16c68fe70e0ec14e23905c59f261f
│  │  │  ├─ d3f87194a2334ffe0a219aa31d039e7fbb7719
│  │  │  └─ d51647b5aa090aba0646b24ef3eb736eb501a8
│  │  ├─ 54
│  │  │  ├─ 5bc2e544c84258e08ed00d562c1c102147841e
│  │  │  ├─ db4380256be9f186a1b17edc6fbd6d581b2031
│  │  │  └─ de5f781cee405af77fe5420a535f1e587377c7
│  │  ├─ 55
│  │  │  ├─ 061428d3240bfdb8c3754f97d32cf886427f94
│  │  │  └─ d1ab84e4a5b78d56d4e29a89bd8ace89457f50
│  │  ├─ 57
│  │  │  ├─ 6c6eec88beb9f5ead6963c542c16712baf1bff
│  │  │  ├─ a0fbcea0a71c29c212416d2b570644c451520d
│  │  │  └─ bb490df37f9fa7b03dd230f33d04ec34b12f8b
│  │  ├─ 58
│  │  │  ├─ 162da1b9ce65c0ecbb5fa4374ed9a19594ce4f
│  │  │  └─ 599870745eba388fc97d64b5824085feb3c321
│  │  ├─ 59
│  │  │  ├─ 0753d65c18e7b58c92cd98751afd114f62632b
│  │  │  ├─ 1ebfcaa77b51f009f07440f57bfffa19c68a4c
│  │  │  └─ 5eac44cfec353da351205d208610d80575c555
│  │  ├─ 5a
│  │  │  └─ 2bd4a4b05545f3046a93e2a3d7e4d2dca2fdc5
│  │  ├─ 5b
│  │  │  └─ 6d0dd1da4710e9455476246b6236717bdbb496
│  │  ├─ 5c
│  │  │  ├─ c739e6e9aa326be704c5bad51c1a5af3a44ceb
│  │  │  └─ d6bb50f8290068dfa70a7ef53e9c6f09533936
│  │  ├─ 5d
│  │  │  ├─ 08be4e68b04b36bfba096c66eb752c4e0ce03b
│  │  │  ├─ 5e274413719cb186ab3629a37f354ae7d21f7a
│  │  │  └─ bb227772d15e6a6214b02def2ec7bffadb20e8
│  │  ├─ 5e
│  │  │  ├─ 073f1fc0759622df2567b32aedf0c638682a3c
│  │  │  ├─ 9414246411c5134f1643af9209fc3507d091c5
│  │  │  └─ c6ae341674413a9ba13502e6c9476f82aa17cb
│  │  ├─ 5f
│  │  │  ├─ 6af85091a687cb59d0b81889195375878425c6
│  │  │  └─ e2e218655a71e17ab21e15737b141f01103c1d
│  │  ├─ 60
│  │  │  ├─ 7f02b27effc4181d977d0d8241368de1fa8af4
│  │  │  └─ 945e8b70ad31f2a4cff5e8fc116c0d85225d3d
│  │  ├─ 61
│  │  │  └─ 1b0cfe1ae8609189bfa012cd242dfb7c505dd7
│  │  ├─ 62
│  │  │  ├─ 327d7f1007af751ad22123beb00d36b702aa31
│  │  │  └─ 3bd4b2ede2d23ff87d01aa371de94833d9ec7e
│  │  ├─ 63
│  │  │  └─ 551e3a6b613db0a733fb37d8fa02a18a9b5ad1
│  │  ├─ 64
│  │  │  └─ d70334cc1b95a0b3c3b6d2230a6e4af29c5a05
│  │  ├─ 65
│  │  │  ├─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  │  ├─ 373efc2ee0833472417385c75a8a7d1ce84149
│  │  │  └─ 857dd9ae4cda223ad02f52d5f8f1c41e504544
│  │  ├─ 67
│  │  │  ├─ 54e846c498638ea1cc7ff58bcab1ffccf84638
│  │  │  └─ bb2b81af87b2c3a1f823e7a2d6a0e3448dc377
│  │  ├─ 68
│  │  │  ├─ 08682e9c402383d69d303f3a71442beb080ed8
│  │  │  └─ aaca32a158c604360b5a46132807a3b7dc7adb
│  │  ├─ 6a
│  │  │  └─ 2c343940a887650db77eadf832922af96edd4e
│  │  ├─ 6b
│  │  │  └─ f04d7f4400b4e3a8d6971486c54c85cb7a265b
│  │  ├─ 6c
│  │  │  └─ a209bbb9416ece7685efb07c323c4f9a34cee0
│  │  ├─ 6d
│  │  │  └─ f50190aab43bd3a727b580fe2699ba36a4712c
│  │  ├─ 6f
│  │  │  └─ 5ae2f0657115f849eb4146beea38e1204877d2
│  │  ├─ 70
│  │  │  ├─ 1e207d4aff89e1e6118850d675d901447f085a
│  │  │  ├─ 395ba7a39833233aa6191635e63f336120dac2
│  │  │  ├─ 7d0e381e29545b6a7129819b37033eae3954e9
│  │  │  ├─ db6608458399c55593b636dfab253844010c67
│  │  │  └─ f1937f903b497ef9f9a38bfbabc5edc5667e7d
│  │  ├─ 71
│  │  │  └─ 8809925f2de27220e04095da134be547688802
│  │  ├─ 72
│  │  │  ├─ 8a01c3c2d52d39392f8240f18655ab22f30bd8
│  │  │  └─ e8b7aa6017e4a73134b499a4e77b72f5676471
│  │  ├─ 73
│  │  │  ├─ 709719fca5fa02f3e43b7956ff9a66efd38540
│  │  │  └─ ca45d049d490f545db70ee5597378b7c766763
│  │  ├─ 74
│  │  │  ├─ 564aad827d5cfb0c779098cfeb801754d5604a
│  │  │  └─ f832e063afbd70e75490acc585b11d0c59911f
│  │  ├─ 75
│  │  │  └─ 96c042770713bf8728c032223a52484e902aaa
│  │  ├─ 76
│  │  │  ├─ b60797c8a8b551d288b585483422527a16de44
│  │  │  └─ bc807d8da29ec100b04697125a5ad14287e508
│  │  ├─ 78
│  │  │  ├─ 7a3de22826bf88f09a656b87c577ce0b512d61
│  │  │  └─ e2869fcdce277649b77fc1c88ee04576a6b713
│  │  ├─ 79
│  │  │  └─ 26dd7ab3bf5c190178c80845cba5cd09d3659b
│  │  ├─ 7a
│  │  │  ├─ 8b8cbe5697a7c8a24eee2e2c4b2f1d12c76130
│  │  │  └─ 95bc30119e143be2c1cee4503ede6c4b4260a7
│  │  ├─ 7b
│  │  │  └─ 5ad8e50a342a1cefbffca23c9c273221e0587a
│  │  ├─ 7c
│  │  │  ├─ 1e9d25ceda82e702ccb2329063acc4a56cbf31
│  │  │  └─ 279b8175da086d333e24725093321c1e3ac098
│  │  ├─ 7d
│  │  │  └─ b4362cf7f11f5e248162696869ea38a86248e4
│  │  ├─ 7e
│  │  │  └─ d81a88c8ce6e264c1f651859fc9d822c335aab
│  │  ├─ 7f
│  │  │  ├─ 4af58a1110bd430b0c103224098a8fdde57f04
│  │  │  └─ 61f98a94f161ba7427fb739756a2cc2628a45b
│  │  ├─ 80
│  │  │  ├─ 4268dd2e3259e5396ce0ef8814dde55f8db6a4
│  │  │  └─ 9f8335880dbbe1a366621b70dd6b26964dfe9a
│  │  ├─ 81
│  │  │  ├─ 37ec3d95936d9ca0b70fb36a182b650e60d6b9
│  │  │  ├─ bd4ba473dd3500a7e6fd062959865e8d8de455
│  │  │  └─ ed6f43619e3091201873f0bee786e945d39061
│  │  ├─ 83
│  │  │  ├─ 1533d71037a1ef81faf8c551c136cefd082047
│  │  │  ├─ 8592ddc0e2370b1d1807a140bcb63eca695b24
│  │  │  ├─ e3b185caeb4d301640e44599963fc57e900bde
│  │  │  └─ f7b41384135978c2adbe07c3361a88784273a6
│  │  ├─ 86
│  │  │  └─ 240e598fd0596f5323546bad19f85589132b65
│  │  ├─ 87
│  │  │  ├─ 7566dde4703e8a0cf911e7a27ee5b910261567
│  │  │  └─ d6eba4bcd0280737fb0a22c6247951eea62c99
│  │  ├─ 88
│  │  │  ├─ 6bacf9e3f522042602a16f85368119f498b195
│  │  │  └─ c3b0ae4162bc2647d8b4497e5fa2201335d069
│  │  ├─ 89
│  │  │  ├─ 010de4a5dd3798a298af12b03a3f334920798e
│  │  │  ├─ 02432ee6b7696bc469ae0e400f0b61821a01c2
│  │  │  └─ 4efe3ceed25c7db8b9ce1d3e787a86850f892f
│  │  ├─ 8a
│  │  │  ├─ 426a4d789cdfc27e87f1b9a84e61d920d130dc
│  │  │  └─ dd4f0ebc2f21f4d0179994c4d74a4201ffc886
│  │  ├─ 8b
│  │  │  └─ 28ee087ef73ce3db5d5cbae1979acf05c36cdb
│  │  ├─ 8c
│  │  │  └─ ad4026553da51fca3150b8c202cf1a0fdde1fe
│  │  ├─ 8d
│  │  │  ├─ 5a5b4e934d9c0c58f94d9262eba85f145564a8
│  │  │  └─ da3d7782cf9abd10acab6fdb1ea18c6fd08435
│  │  ├─ 8e
│  │  │  ├─ 37a2a50f7c5ced1bab44ca2476bb3431626587
│  │  │  └─ fe06bae20f226b1aa3573c1d8f74a164327a86
│  │  ├─ 8f
│  │  │  └─ 866a2ecb469fd6ee1ada194b877ab57a52580b
│  │  ├─ 90
│  │  │  └─ 2c0458141dace70bd553f8899136ee2d15b9b2
│  │  ├─ 91
│  │  │  ├─ 0ac243e26d52909a8f0f04525ca93e7dec6a1f
│  │  │  ├─ 1996a78ac18a96cb94fc694000a020cedbd5d1
│  │  │  └─ a7996609d893e785f0c27d0e2388981dd0fd34
│  │  ├─ 93
│  │  │  ├─ 80ee065fb214c1b6d9c59b8e01920ed8d6d419
│  │  │  └─ 823cec4bec63b0ff36fbe5845b17cb7590d2ae
│  │  ├─ 95
│  │  │  ├─ 2a9d12b591ea3c985dd31aa64ad49d92648fe9
│  │  │  └─ 8be04c8d54514d7b47d553f3571477710bbaef
│  │  ├─ 97
│  │  │  ├─ 0dbb40d40b8c9d81215c484c14da4cd4f91b53
│  │  │  ├─ 3200912b2457464341ed895e3e925a050d0460
│  │  │  └─ e0333afc1b02d343ed2809f917048bbfa06544
│  │  ├─ 98
│  │  │  └─ 82fbc72935e719540cb5e9f0b664d200df3a21
│  │  ├─ 99
│  │  │  └─ 9019611586a5ba8c9cb22e7009aa6a097336e6
│  │  ├─ 9c
│  │  │  ├─ 0af464cd65fa8510e6140ca47f42f36470e4b2
│  │  │  ├─ 2e07a5f54401a3fbfcc9d31540a409b926ddd2
│  │  │  └─ 6d742974332c59e97b853ee3d43336ad96eeae
│  │  ├─ 9d
│  │  │  ├─ 0895156c34911a16f4304081a178ac05deb614
│  │  │  ├─ 382212e6328cd5ab9eed09c44cf1c2872046c8
│  │  │  ├─ 4dab9cbe36b9107e4781aae2ade8d3c84808d9
│  │  │  └─ b0a84056c6f279b133e9dbfd67cd8594621ab7
│  │  ├─ 9e
│  │  │  ├─ 8422715f746f9815012a974d1991de1380bd21
│  │  │  └─ ba0a38dfb84683c33d5f7cc99df52873226340
│  │  ├─ 9f
│  │  │  ├─ 7bf544492b284b09aaff3eae8dc2f89b97b19d
│  │  │  └─ c04dca01782d8ad6642f4b568d30e1f381df90
│  │  ├─ a0
│  │  │  ├─ 37d57a679d6316736a74c86cbfc6f5fae57c6f
│  │  │  ├─ 5c41855f45c357e42990d3dacbb1c84dc9cacc
│  │  │  └─ 773da93dbd912f8e0e4c2650ed04a5f53951d1
│  │  ├─ a3
│  │  │  └─ b634b1456032ef847429f4a9fe6bb5197ce624
│  │  ├─ a4
│  │  │  ├─ 29b423fb5fd3ff339bbc772855dc08e57c2e0b
│  │  │  └─ 71af3ff879fef990db07781f34481bc129d4ea
│  │  ├─ a5
│  │  │  ├─ 19b9ffdb2768d11595ce40e5f26ff699a84ff6
│  │  │  ├─ 34941ac0a954282a422d9477f9fc190ba01d7b
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ b0545a805135f2ef793a079fedae085840b337
│  │  ├─ a7
│  │  │  ├─ a6b86390c2914ed72ba40aa689fdf4871cb3c1
│  │  │  ├─ cea0b0678120a1b590d1b6592c7318039b9179
│  │  │  └─ e015e14653b5ddcb9d8660cc07546a6616b384
│  │  ├─ a8
│  │  │  ├─ c082a0c256f69eca367cc702fa806bc63605d0
│  │  │  ├─ c3e81bb6b228533cff5e19266ef909c9872732
│  │  │  └─ e1eda21473e01b214bc6f9ae5b0e4de1aaa914
│  │  ├─ a9
│  │  │  └─ 816cbfef17c7362c408cb64e2a4e30b9f12f36
│  │  ├─ aa
│  │  │  ├─ b1b597b0af3d414c5538cfd416eab7ef6d8d72
│  │  │  └─ fef9509dd5c4364df3b0e29457a63e0c87011b
│  │  ├─ ac
│  │  │  ├─ 41f96d2b2b67484e13a5e90128b4f973a436ec
│  │  │  ├─ 574cfdd7bbbf880351932c4b902bbc5ee896ec
│  │  │  └─ 69eb9e9439cb07274a588265b5d3cc4c5b8946
│  │  ├─ ad
│  │  │  └─ 4ac85b5a20848aa89ecf04ed96cb6e7d00cc2a
│  │  ├─ ae
│  │  │  ├─ 55bf31a2d64909fbda26874dc57580e6a3af12
│  │  │  ├─ 80dc74d869305357db5ad39ac39ca3755c8d6b
│  │  │  └─ fd6d1de9e21d4eca521cd46c79c9e908a54ddd
│  │  ├─ af
│  │  │  ├─ 2dae8ffe71fae551ab166a29c03880d6d6fea2
│  │  │  └─ 2e7aac746be4577bf8a71af56276d9d7041843
│  │  ├─ b0
│  │  │  ├─ db7e73f809dcace0b93ff5fb62c1b6f7da9303
│  │  │  └─ f15e84dd7f1f3c2874d15f73fe3f073704e708
│  │  ├─ b1
│  │  │  └─ c6a8dbd5187c1db8acd2557037444bdcb962c7
│  │  ├─ b2
│  │  │  └─ b52705c4d7eddfee2367ec124f584ba220100f
│  │  ├─ b3
│  │  │  └─ 3cb1a1cabb4b8e1565a577fa60fe24f864e6f1
│  │  ├─ b4
│  │  │  └─ 25822683e1bb97c1a0c6c93a35f4cc76f34b34
│  │  ├─ b5
│  │  │  ├─ 0c71e31f1eebb6666403e96322f4b7f52237a5
│  │  │  ├─ 1848b4ef7621732e2af1d61207bccfb63d2139
│  │  │  ├─ 3285b208bc998f53393c4c958c17c16a53c665
│  │  │  ├─ 7918dfc05aed198723a6ec24e1b7c89a1503a4
│  │  │  └─ b5ba0cb405fa546229a7b0cd2721acc31d03de
│  │  ├─ b6
│  │  │  ├─ 6e4ea29f33ffd2092105c08a53b6e57ef0becb
│  │  │  ├─ ae97aee345cfd900f70e84aa87fcfd586ea89e
│  │  │  └─ c880b517a0dc4b4fac9d466d506d46f3a59224
│  │  ├─ b7
│  │  │  └─ 64a00a5b05e6716a33384536715522048971c6
│  │  ├─ b8
│  │  │  ├─ 6e383b49d33c9aad178c9ecc7f3f3c2331694f
│  │  │  ├─ 81c8913d177bedd12c5d3fa07e9b6967e1c910
│  │  │  └─ 838526f85688a7e992095e9a723a7f30f421db
│  │  ├─ bc
│  │  │  ├─ 0be75bffbdae561eaa93153721f199f0319981
│  │  │  └─ 0e0f65f0e6201d04f209b7a0ce2d23ea5e7005
│  │  ├─ be
│  │  │  ├─ b1136121a740151ae8783a4d6ca1a0b52c493a
│  │  │  └─ b8ecdeb35c9f20d36be0a8e1e9ebe629bc07c3
│  │  ├─ bf
│  │  │  ├─ cfc36100b92b10f3ca12583bb1313cbfad7845
│  │  │  └─ d7e29233bf58be43b818010ecac93c383ec398
│  │  ├─ c0
│  │  │  └─ 550dfb894e0c9425f7f5dbcb1125af25ae409d
│  │  ├─ c1
│  │  │  ├─ 34d322424020c03feaa0293280fabf59f6dada
│  │  │  ├─ ace90cea5e95cc85a908930de8b7c49c0a83e2
│  │  │  └─ f90d317b929a74ef250b2761d8b554e6e8633d
│  │  ├─ c2
│  │  │  ├─ d15195629f16f45c67e37b9bd7555d3a88458e
│  │  │  └─ e23dc4d90c1ea7c06f09d4e594c37f28e0f43d
│  │  ├─ c4
│  │  │  └─ 85b1f214c8c7b55d8a5181fdcac563c02af39e
│  │  ├─ c5
│  │  │  ├─ a6d039741214363d07956abc4a6b9dec35c9b4
│  │  │  └─ d40bbd7064e766aad406d1a2e039de79f2904f
│  │  ├─ c8
│  │  │  └─ 9ce17cf384774a9923b1d77545e471394ab0f0
│  │  ├─ c9
│  │  │  └─ d4226ecc153076728eea5b71ebc8ac9f05b41e
│  │  ├─ ca
│  │  │  ├─ 31ac8e9e8e069ddae39aca94d49621156f6188
│  │  │  ├─ 462d63c937b1e06be6c36ed6b0652447144fd0
│  │  │  ├─ d7382b17169626b07793627c5c1903d6c4fcc3
│  │  │  └─ e9f4d8411cd3567659095aa670033fb85fee58
│  │  ├─ cb
│  │  │  └─ f87782373be5f9656a001912da00ffd28e17be
│  │  ├─ cc
│  │  │  └─ 23cd6962431e9804c9350249ced3330145b9f1
│  │  ├─ cd
│  │  │  ├─ 0a31ecc1e28816d84b7a23f16470106bb408d9
│  │  │  └─ 51d69db209de8035f10641171aa4d2ce88896c
│  │  ├─ ce
│  │  │  ├─ 0314ba7ebc79b2e05eab9e896a178d3a370ec2
│  │  │  ├─ bab07b7711aca49e2d03e152ea09024bafd36f
│  │  │  └─ e3fdbce612ad0ece6debcf9bb8be8d1063d424
│  │  ├─ d0
│  │  │  ├─ 205d6d9ce8c20fc1d9989a01d4519e653fd828
│  │  │  ├─ 4b0438686e80479226abb56bc2a5ce8c05fb46
│  │  │  ├─ 552e4b033b71ecc66b7ab43b119aa4b4c2aeed
│  │  │  ├─ 7cb9ae1e516f30376192ff58bfa4484b6f6c95
│  │  │  └─ 8e6e29828d9b9f42ee39c364e4a6dec77456c8
│  │  ├─ d1
│  │  │  ├─ 15ba41289a1113c70e9da5c92d562cc41528f1
│  │  │  └─ 1906aec26dd14372dd1b298f72270c38cce1b7
│  │  ├─ d2
│  │  │  └─ 61b40268579d86f2c43522e4c991d2c52b6bb4
│  │  ├─ d3
│  │  │  └─ 93132cabcb33d41a0efb593a53263a6097e170
│  │  ├─ d4
│  │  │  └─ 4eb05e4d3a0c211a2a50f7a2dbddedbe9d26d5
│  │  ├─ d5
│  │  │  └─ c8554327b382b87e59b23af14b409413df6cf6
│  │  ├─ d6
│  │  │  └─ c071dd0231b55d4b6a2a2a9accfc0d3ef6d5fd
│  │  ├─ d7
│  │  │  ├─ 95dd3c61b1c6ae86f965404e78641b79a256c9
│  │  │  └─ a29ac311b8db602d93aa85d6839f5ee11c9092
│  │  ├─ d9
│  │  │  └─ 69dccb6c83ebbc3bfd6789b1faad88b77efeb4
│  │  ├─ da
│  │  │  ├─ 175699e1ae257a98ffa5efb706f42f58517dfb
│  │  │  ├─ 48fee597a1df875f49c5dddd367e3f153245bb
│  │  │  ├─ 72f0cf44cfe773c41a0c3067d7c6bca04b9c40
│  │  │  └─ a279bfd9bf19d590d055f9feaaf9b76223187c
│  │  ├─ dd
│  │  │  ├─ a0430396cbdcb2031c992a8233f385e095e39b
│  │  │  └─ a7d65e3d7b7af4072031f07189a3da0ef3a14f
│  │  ├─ de
│  │  │  └─ 3595048aabdb05eb0d75b29f11b938e8b922f8
│  │  ├─ df
│  │  │  ├─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  │  ├─ 7a36a2171fdc0801714415997a6ea1c952025a
│  │  │  └─ e87e4ca81bb8bcf9931f5aedfd0a454d4bbf90
│  │  ├─ e1
│  │  │  ├─ 153fe08200d7001c278f0746acf231ed2fb33a
│  │  │  └─ 63e50b2d0deeb219ac5df44ba51993dfbb7af6
│  │  ├─ e2
│  │  │  ├─ 142211eee9e1a2c436517586e6eadcb77d66b8
│  │  │  └─ d1de936ff050724e96947c29086e686ffe9254
│  │  ├─ e3
│  │  │  └─ 99c4a8ddf1886593ac9727bcf0bfa9f7d08254
│  │  ├─ e4
│  │  │  └─ 658a53dd0a67b1879c9edbb4416bbe66c4f704
│  │  ├─ e5
│  │  │  ├─ 06039cf7ad2803a9a1f64ba50a824c7649b03b
│  │  │  ├─ 16621da9e0ffae7479106deed61b7e216150af
│  │  │  ├─ 3f0c5090162881d330cb40a9edb5f85fbe73a0
│  │  │  ├─ b962fa64cf861638400f238b76674e32bd1d35
│  │  │  └─ cc6904f8d015a92f6016a4ba8bded433176279
│  │  ├─ e6
│  │  │  ├─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  │  └─ c6aa85a34e188c4381e2a086c79aa289b18289
│  │  ├─ e9
│  │  │  └─ 93792cb12c9d8223f5a731f2d662ab553180f2
│  │  ├─ eb
│  │  │  ├─ c31c717c6bf994ee856f80788a1a32f52871ef
│  │  │  └─ cc411b927ad6e6a076107b776835a51f6b92aa
│  │  ├─ ec
│  │  │  └─ c0bf2b9b1cd11214312f0c91169f5a81501588
│  │  ├─ ed
│  │  │  ├─ 692a78fd13087d266aff6c9f428f67762c73b1
│  │  │  └─ 836520f5d451c2bc814599cde8e4434105b0b4
│  │  ├─ ef
│  │  │  ├─ 16e69abe5d1250280e496c7498297c8985e80e
│  │  │  └─ 988193feb011257af75bc435a78e627e5c9bd4
│  │  ├─ f0
│  │  │  └─ d5fb0ce8b6faafe9dcd9ce10f7bb4260a6f09d
│  │  ├─ f1
│  │  │  ├─ 219a1d8605d2e635df86818e84cb83b0f50444
│  │  │  └─ 56d84fe7a08ac06584f6c12d8cb5de6b3fd098
│  │  ├─ f2
│  │  │  ├─ 21a02f69530551118b38cd8f8b33154df9a4f1
│  │  │  ├─ 7274d28b95e7237d752e33a444e2c51d2d0cc5
│  │  │  └─ 8b8bcc89b42205be9d6e75cea4b631e92a6ab0
│  │  ├─ f3
│  │  │  ├─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  │  └─ ddc88757af19cebe5fda7be529c073fbfd3aaa
│  │  ├─ f4
│  │  │  ├─ 1d2ad4f9937177853aeb636db325b2389dcf36
│  │  │  └─ ada1144ab4a48e66f5cc27524b04f9d8b8fca5
│  │  ├─ f5
│  │  │  ├─ b32c10e5449c66b349ff00ab26b87fadbcb5b1
│  │  │  ├─ b4881ee2761f3e4ccf156be0fc831e34349771
│  │  │  └─ ce0bb90ab40856e6b33f68ae2304b95a6b835c
│  │  ├─ fa
│  │  │  └─ 69b461bb6333acc77ffa62db29dc7070897e13
│  │  ├─ fb
│  │  │  ├─ 28324b52faeccee39953518f49874af299eac6
│  │  │  ├─ 2cd095a5aa5ac2810115b57f538789b1505e03
│  │  │  └─ c7b9ac3e9c31aba66cd84c11feb5c84cd7a035
│  │  ├─ fc
│  │  │  ├─ 22dc00c75f955d2cc455fe1f3ec78ba337cc0d
│  │  │  ├─ 4be983bbda8b7f2f04c9140eebe47f278c8957
│  │  │  └─ a651fa9e00ea2c3fcafcecf8cc1e0a4e2c9ece
│  │  ├─ fd
│  │  │  ├─ cf621e0e99cbc2fcdd296a7c1f0ff51534656d
│  │  │  └─ dc8f5ea5384177b12e068bcb5eb81cb3935f3b
│  │  ├─ fe
│  │  │  ├─ 7956cf430d2c24e3aa04c0427e5082bbafb565
│  │  │  ├─ a283c4ab44010bafa4d14d61cfe8a5a52ae7d2
│  │  │  └─ c386cb2a99888eb6d83cd83dec4beb22cbb351
│  │  ├─ ff
│  │  │  └─ 46b1fc13b441a46787421a14111edc87bf3dc8
│  │  ├─ info
│  │  └─ pack
│  ├─ refs
│  │  ├─ heads
│  │  │  ├─ dev
│  │  │  └─ master
│  │  ├─ remotes
│  │  │  └─ origin
│  │  │     ├─ dev
│  │  │     └─ master
│  │  └─ tags
│  └─ sourcetreeconfig
├─ .gitignore
├─ .prettierrc.json
├─ README.md
├─ auto-imports.d.ts
├─ components.d.ts
├─ env.config.ts
├─ env.d.ts
├─ index.html
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ favicon.jpg
├─ src
│  ├─ App.vue
│  ├─ api
│  │  ├─ request
│  │  │  ├─ index.ts
│  │  │  ├─ request.ts
│  │  │  └─ types.ts
│  │  └─ test.ts
│  ├─ assets
│  │  ├─ font
│  │  │  └─ SF-Pro-Text-Regular.otf
│  │  └─ image
│  │     └─ top.png
│  ├─ components
│  │  ├─ CmsEdit
│  │  │  └─ index.vue
│  │  ├─ HelloWorld.vue
│  │  ├─ PlatformControl
│  │  │  └─ index.vue
│  │  ├─ SecondSide
│  │  │  ├─ MenuItem.vue
│  │  │  ├─ SideMenu.vue
│  │  │  └─ index.vue
│  │  ├─ SvgIcon
│  │  │  └─ index.vue
│  │  ├─ TfrButton
│  │  │  └─ index.vue
│  │  ├─ TfrCheckbox
│  │  │  └─ index.vue
│  │  ├─ TfrInput
│  │  │  └─ index.vue
│  │  └─ TfrLogo
│  │     └─ index.vue
│  ├─ config.ts
│  ├─ env.d.ts
│  ├─ icons
│  │  ├─ material
│  │  │  ├─ flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2
│  │  │  └─ materialIcons.css
│  │  ├─ svg
│  │  │  ├─ 404.svg
│  │  │  ├─ add_black.svg
│  │  │  ├─ add_white.svg
│  │  │  ├─ analytics.svg
│  │  │  ├─ back.svg
│  │  │  ├─ calendar_black.svg
│  │  │  ├─ delete_red.svg
│  │  │  ├─ edit_cms.svg
│  │  │  ├─ home.svg
│  │  │  ├─ logo.svg
│  │  │  ├─ logout.svg
│  │  │  ├─ mobile.svg
│  │  │  ├─ pc.svg
│  │  │  ├─ siteBuilder.svg
│  │  │  ├─ suspended.svg
│  │  │  ├─ tablet.svg
│  │  │  ├─ tool.svg
│  │  │  ├─ tool_gray.svg
│  │  │  ├─ update.svg
│  │  │  ├─ visibility.svg
│  │  │  └─ visibility_off.svg
│  │  └─ svgo.yml
│  ├─ layout
│  │  ├─ component
│  │  │  └─ sidebar
│  │  │     ├─ index.vue
│  │  │     ├─ logoUser.vue
│  │  │     ├─ menuItem.vue
│  │  │     └─ subMenuItem.vue
│  │  └─ index.vue
│  ├─ main.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ permission.ts
│  ├─ store
│  │  ├─ index.ts
│  │  ├─ modules
│  │  │  └─ user.ts
│  │  ├─ pageconfig
│  │  │  └─ index.ts
│  │  └─ roleStore
│  │     ├─ basic.ts
│  │     └─ index.ts
│  ├─ styles
│  │  ├─ common.less
│  │  ├─ element-ui.scss
│  │  ├─ index.scss
│  │  ├─ mixin.scss
│  │  ├─ sidebar.scss
│  │  ├─ tfr.scss
│  │  ├─ transition.scss
│  │  └─ variables.scss
│  ├─ utils
│  │  ├─ cookies.ts
│  │  └─ validate.ts
│  └─ views
│     ├─ error
│     │  └─ index.vue
│     ├─ home
│     │  └─ index.vue
│     ├─ login
│     │  └─ index.vue
│     └─ pagecontent
│        ├─ components
│        │  ├─ AddModule.vue
│        │  ├─ Banner.vue
│        │  ├─ FootContent.vue
│        │  └─ Pagetop.vue
│        └─ index.vue
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock

```
```
tfr-platform-cms
├─ .env
├─ .env.dev
├─ .eslintrc.js
├─ .eslintrcignore
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ dev
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ dev
│  │           └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ c463021137b9ed331c25aa7d150b9b6d26f0f4
│  │  ├─ 01
│  │  │  ├─ 4fa55a526d4c46556500af227c83eeafcb923d
│  │  │  └─ fbd9d9ff092312e08312c90698806734155f3f
│  │  ├─ 02
│  │  │  ├─ 2dd6389b850e3659b6a6adb72aa1a390ec046b
│  │  │  ├─ 896f78f50363aea6a12b6c7ba7e1e36722d510
│  │  │  ├─ 98cfe8aacbe06ee23127ab3a3834f72c265372
│  │  │  └─ cdc4309d1bfe9fb7dc4f022079883b901400b3
│  │  ├─ 03
│  │  │  ├─ 001a20fcad215911c1fc28460108f0217e663f
│  │  │  └─ 1ccff93d43c758ab878a35678e9e0b8aa597b7
│  │  ├─ 04
│  │  │  ├─ 62a36f3a7d4f674c5ecea5846f02f4a082b318
│  │  │  ├─ b82100fc4c949c5dfe93bedadf9cb1849dc6af
│  │  │  └─ d8f579d3dfeced96b36e55ebb106c9cf5c4382
│  │  ├─ 05
│  │  │  └─ 2a4e345088670f7a9cf23605d9a8b88c45a442
│  │  ├─ 06
│  │  │  └─ abbb0460ef0122dba85a17ec917d951b9ed2d9
│  │  ├─ 07
│  │  │  ├─ 535375d6b5e68aba8d97d015a06f14602ef0f7
│  │  │  └─ a864bd755998fdd5dc9f4165cc54641a03e3d6
│  │  ├─ 08
│  │  │  └─ c53694a832a2c53a7b8b82bcca2b2f6c5aa58a
│  │  ├─ 0a
│  │  │  ├─ 1f7fdc0c0edbec3c81f59fc78d119a6eecb901
│  │  │  ├─ 47531dc2c001c3422de43be54681a8a1f61248
│  │  │  ├─ b8342303eaf6ae7effd910601627e1fa826bbc
│  │  │  └─ e6b60beaa9777d12ddab66bdd147ac4140395d
│  │  ├─ 0b
│  │  │  ├─ 04c754f8eac506a4e33634924b28d639052c6a
│  │  │  ├─ 16e8345f3e987eed55c1429779a67c5b121633
│  │  │  └─ 72da13a7439885f505e46734f6cd0729f5037e
│  │  ├─ 0c
│  │  │  ├─ 065b924bb5fa4111890dc78b76d68cc1d6d403
│  │  │  └─ b97d11fdc58be62f2291e99b5609ca56659451
│  │  ├─ 0e
│  │  │  └─ 6ec79587c177420b5a3e0cecf2530c5a7ee90b
│  │  ├─ 0f
│  │  │  └─ 211226d8b0a7f8611c3c5f8867102a66d3e677
│  │  ├─ 10
│  │  │  ├─ dd502b3e39e3f996d104314cd28c9d99bae914
│  │  │  └─ f6304673724e7c9c581884cee484ba708a676c
│  │  ├─ 11
│  │  │  └─ ebeac6cf52bc1be685c9ee8438e5337af437e8
│  │  ├─ 14
│  │  │  ├─ 1b60ed6d3aa5f77cf900c9d8cc62e83f5b0980
│  │  │  ├─ 62056461944bf474c71a7162d77df123b7c181
│  │  │  └─ 8c3cc98aa897501639e986881e40b0a19b1e56
│  │  ├─ 16
│  │  │  └─ 6725cdf65f6f0085724cb056995a0b72a5313f
│  │  ├─ 17
│  │  │  ├─ 41cb2c951906544aa3f0b1db2eaa1748540e7b
│  │  │  └─ 6147346663d10b514e1a931606d07b7b20981c
│  │  ├─ 18
│  │  │  ├─ 1797f1e2d8aa02f9c72ea189b985fe0e798aa1
│  │  │  └─ 6b076c88811c602639ef9eaf1a7e4e46fe0be5
│  │  ├─ 19
│  │  │  ├─ 26c60236da8c3dfb0e50bc759ffd937c2f4fe4
│  │  │  ├─ 5485d4b2d0423e56297e924a74a40f4c22f2a7
│  │  │  └─ 83693b11f87a59a02dba004e64cdc317ac0a6a
│  │  ├─ 1a
│  │  │  └─ a8829d1858e9c714e407867c3aea6d877f54d8
│  │  ├─ 1b
│  │  │  ├─ 81d18ff83b4edd947a17905bd4d56134843afa
│  │  │  └─ cbf236e469b87bcfb3cb3714f9e472da5c54a7
│  │  ├─ 1c
│  │  │  ├─ 9032d8a59fe8cdcba29a9e579a7f0253ec420a
│  │  │  └─ f25ba978aedb53ba022cc76b8399d6977a69fa
│  │  ├─ 1e
│  │  │  ├─ 65b4b8239ad6eac37555c52c25b4abb6c8c7e0
│  │  │  └─ a26e0dd12d7c37c5db5ae24dcb8b7d4b5b2a9b
│  │  ├─ 1f
│  │  │  ├─ 170f56d7831378c10797d2f4900f2c7eb94405
│  │  │  ├─ 391dd61440c6aaf1e32e76bb88a38052632406
│  │  │  └─ ce4256d955a4e87e432b06371cb3409dab9d02
│  │  ├─ 22
│  │  │  ├─ 8efe68dc25824ed7676c39298483532b72c167
│  │  │  └─ d4aa5a4360dece220b69f4c6a7af7d77efea16
│  │  ├─ 24
│  │  │  └─ ce49fed09ba986e5b67dca5a93c2c30a7ebe3a
│  │  ├─ 25
│  │  │  ├─ 263d94af07cca0a478373cb09815565d762905
│  │  │  └─ f6f63273413af5e243aae8d49de39e29dd575f
│  │  ├─ 27
│  │  │  └─ 0784df5492f889677b441d98b7289ce92bc716
│  │  ├─ 28
│  │  │  ├─ 0a7adda1e47c0253eb4eb0a643c1e14a15787b
│  │  │  ├─ 52848de2b8d0302fff332618bc7f2a33941643
│  │  │  └─ 66fdb601a006cb1bb5d78d2a40d194608da1c7
│  │  ├─ 29
│  │  │  ├─ 1ce3f0a5dabf7959f29e3738b8d5418a35b9ce
│  │  │  └─ d4d1d95db99e144fdde38af0dcad8774a03e65
│  │  ├─ 2a
│  │  │  ├─ 23423a9588d94b6c509b05322504694332263a
│  │  │  ├─ 6d34164d5bd1f60934582943887088a6bee8aa
│  │  │  ├─ 6d363e2661f04398c3a98514bf5f1d61e9385b
│  │  │  ├─ 74d84a3dd2a9606eacd4ed511f1707f34d3558
│  │  │  ├─ c89fb33e1dc3bd6f6f11cc35c30cef0abe87dd
│  │  │  └─ f1e7439c44af68ae59a42d5ca5351350a8e57c
│  │  ├─ 2d
│  │  │  ├─ dc3e2e970d69df382b7577752c0cde079a002e
│  │  │  └─ e298d675d77f76f9e690f95a87ed4e030aff35
│  │  ├─ 2e
│  │  │  ├─ 890fa319cee5aa3b47f731a9a70ccec2f500af
│  │  │  └─ dff78486cd6043dac6121247bee88dd2f7b7e0
│  │  ├─ 2f
│  │  │  └─ 1fb59d92c2468c626452e76da726c243da4eaf
│  │  ├─ 30
│  │  │  ├─ 1dd5236e5b120ae3d3101fadfa617a1b0581de
│  │  │  ├─ a1e52e18d8d80300f83bafd4178f23c6bacea6
│  │  │  ├─ b15e215a24b78043970d820dd5dd5d2e6a3863
│  │  │  └─ dbd837d8c4f351042d728390ff4c38b86108d6
│  │  ├─ 31
│  │  │  ├─ 4683857bb5f55e6a9ae7f7fc6283c513837d2a
│  │  │  └─ 9e7b0a29c72874214c648772bcd2ad980b6cea
│  │  ├─ 32
│  │  │  └─ 8f6ac2e6c4689d2aee3868a1363da9e80b5052
│  │  ├─ 34
│  │  │  ├─ cdd2afba56b9dd3c7f0e3b758069a92db6b7bf
│  │  │  └─ d1d305ed915224e310bda9e08e41c2aa30fd8a
│  │  ├─ 35
│  │  │  └─ f8c2ba34bfb1ac13c9dacb8242525dd975ce81
│  │  ├─ 36
│  │  │  └─ b74bbd995e7cc5c6baab1ce6808ecfda8c27ae
│  │  ├─ 37
│  │  │  ├─ 79f3e4369be525107a6b8c5b9eea0f451fe855
│  │  │  └─ 87552d002886797e80c869132fdb2697b7c709
│  │  ├─ 38
│  │  │  ├─ 439b419c2e3fb6025617b8e27b4fe30031b71f
│  │  │  ├─ 78f749d9ecf37f6ad683d63360dbde5ece2b12
│  │  │  └─ dae70739a15aafd1a462e55b214a27f5a304c3
│  │  ├─ 39
│  │  │  └─ 5ab433bb827bd356297eb395e4c8524d169760
│  │  ├─ 3c
│  │  │  ├─ 50b186c916de79d5ec93ba3798640829a22f35
│  │  │  └─ 610d5bd5898eb187e15b3472fa5aacc2d9291f
│  │  ├─ 3d
│  │  │  └─ 13fb0da5c2221ad3d95a14cf10d28a74c4ffae
│  │  ├─ 3e
│  │  │  └─ e7c7da39b28b962781ca25b2077678b6b71dd3
│  │  ├─ 3f
│  │  │  ├─ c6b94cf05e763cf4d2b30e966101178483dbe1
│  │  │  └─ d661d369df0cca252ef1f73db2721382bd0b55
│  │  ├─ 40
│  │  │  ├─ 5f61073e63417f668acb8590042dc42a0427e0
│  │  │  ├─ 71dfede2a0be1f1c999499fd5329a3cfe34e91
│  │  │  ├─ 753f0e29b0a17dacd25131dcc172970e7ae966
│  │  │  ├─ 7bc4ba16e01e354ec85f6d670e24be08ba95ce
│  │  │  ├─ f1b352bfacdf45d36981df60e29ec2ed809f59
│  │  │  ├─ f2063bbafed7ae041198da4a580774f5d4ecea
│  │  │  └─ fa85a18853e4cafe8357f798b45bdd833013fd
│  │  ├─ 45
│  │  │  ├─ 554b9967da80313c55e0c37c26e475c7475304
│  │  │  └─ f699603a8fa6e9910adbe823df0bb85fc1f472
│  │  ├─ 46
│  │  │  └─ e91cc5043799cb99b029fc06bf2c862fa7b893
│  │  ├─ 47
│  │  │  └─ e62e2324726f536f7b22c295f9a71237ab8754
│  │  ├─ 48
│  │  │  └─ a3e37ad43964273a21485c9866fd4f32dcce2c
│  │  ├─ 49
│  │  │  ├─ 0a57576dae9980bd1483a28f5998f0a83a1e24
│  │  │  └─ a75ec35308ecda1ff9b761eb8963f18936a9af
│  │  ├─ 4a
│  │  │  ├─ 50e066ba0287acd9ac13ba39dc59231b06f485
│  │  │  └─ 96619f98bf0e028c345660deb3e02538009a07
│  │  ├─ 4b
│  │  │  └─ e281d79a3828f35f3260a9eb55816c6e787952
│  │  ├─ 4c
│  │  │  ├─ 32e8530907fb0d6d463b52b71e3adbbcb41baa
│  │  │  ├─ b27cc811e28605bb6d0657a6257f0c901f6809
│  │  │  ├─ e59c4db9d4e0fee1e17d09d39b6d7207958ad9
│  │  │  └─ ec15e0927683d68e440bcef661952adbc9220d
│  │  ├─ 50
│  │  │  └─ a03a45a1c316f6ba6520cd357b4457afc5e622
│  │  ├─ 52
│  │  │  ├─ 20f461a2d785818114c25637eb4593318c6b31
│  │  │  ├─ 67ef8e7325577ba9d0aaaed76a6d2a4a852729
│  │  │  ├─ 7d11e20af16c68fe70e0ec14e23905c59f261f
│  │  │  ├─ d3f87194a2334ffe0a219aa31d039e7fbb7719
│  │  │  └─ d51647b5aa090aba0646b24ef3eb736eb501a8
│  │  ├─ 54
│  │  │  ├─ 5bc2e544c84258e08ed00d562c1c102147841e
│  │  │  ├─ db4380256be9f186a1b17edc6fbd6d581b2031
│  │  │  └─ de5f781cee405af77fe5420a535f1e587377c7
│  │  ├─ 55
│  │  │  ├─ 061428d3240bfdb8c3754f97d32cf886427f94
│  │  │  └─ d1ab84e4a5b78d56d4e29a89bd8ace89457f50
│  │  ├─ 57
│  │  │  ├─ 6c6eec88beb9f5ead6963c542c16712baf1bff
│  │  │  ├─ a0fbcea0a71c29c212416d2b570644c451520d
│  │  │  └─ bb490df37f9fa7b03dd230f33d04ec34b12f8b
│  │  ├─ 58
│  │  │  ├─ 162da1b9ce65c0ecbb5fa4374ed9a19594ce4f
│  │  │  └─ 599870745eba388fc97d64b5824085feb3c321
│  │  ├─ 59
│  │  │  ├─ 0753d65c18e7b58c92cd98751afd114f62632b
│  │  │  ├─ 1ebfcaa77b51f009f07440f57bfffa19c68a4c
│  │  │  └─ 5eac44cfec353da351205d208610d80575c555
│  │  ├─ 5a
│  │  │  └─ 2bd4a4b05545f3046a93e2a3d7e4d2dca2fdc5
│  │  ├─ 5b
│  │  │  └─ 6d0dd1da4710e9455476246b6236717bdbb496
│  │  ├─ 5c
│  │  │  ├─ c739e6e9aa326be704c5bad51c1a5af3a44ceb
│  │  │  └─ d6bb50f8290068dfa70a7ef53e9c6f09533936
│  │  ├─ 5d
│  │  │  ├─ 08be4e68b04b36bfba096c66eb752c4e0ce03b
│  │  │  ├─ 5e274413719cb186ab3629a37f354ae7d21f7a
│  │  │  └─ bb227772d15e6a6214b02def2ec7bffadb20e8
│  │  ├─ 5e
│  │  │  ├─ 073f1fc0759622df2567b32aedf0c638682a3c
│  │  │  ├─ 9414246411c5134f1643af9209fc3507d091c5
│  │  │  └─ c6ae341674413a9ba13502e6c9476f82aa17cb
│  │  ├─ 5f
│  │  │  ├─ 6af85091a687cb59d0b81889195375878425c6
│  │  │  └─ e2e218655a71e17ab21e15737b141f01103c1d
│  │  ├─ 60
│  │  │  ├─ 7f02b27effc4181d977d0d8241368de1fa8af4
│  │  │  └─ 945e8b70ad31f2a4cff5e8fc116c0d85225d3d
│  │  ├─ 61
│  │  │  └─ 1b0cfe1ae8609189bfa012cd242dfb7c505dd7
│  │  ├─ 62
│  │  │  ├─ 327d7f1007af751ad22123beb00d36b702aa31
│  │  │  └─ 3bd4b2ede2d23ff87d01aa371de94833d9ec7e
│  │  ├─ 63
│  │  │  └─ 551e3a6b613db0a733fb37d8fa02a18a9b5ad1
│  │  ├─ 64
│  │  │  └─ d70334cc1b95a0b3c3b6d2230a6e4af29c5a05
│  │  ├─ 65
│  │  │  ├─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  │  ├─ 373efc2ee0833472417385c75a8a7d1ce84149
│  │  │  └─ 857dd9ae4cda223ad02f52d5f8f1c41e504544
│  │  ├─ 67
│  │  │  ├─ 54e846c498638ea1cc7ff58bcab1ffccf84638
│  │  │  └─ bb2b81af87b2c3a1f823e7a2d6a0e3448dc377
│  │  ├─ 68
│  │  │  ├─ 08682e9c402383d69d303f3a71442beb080ed8
│  │  │  └─ aaca32a158c604360b5a46132807a3b7dc7adb
│  │  ├─ 6a
│  │  │  └─ 2c343940a887650db77eadf832922af96edd4e
│  │  ├─ 6b
│  │  │  └─ f04d7f4400b4e3a8d6971486c54c85cb7a265b
│  │  ├─ 6c
│  │  │  └─ a209bbb9416ece7685efb07c323c4f9a34cee0
│  │  ├─ 6d
│  │  │  └─ f50190aab43bd3a727b580fe2699ba36a4712c
│  │  ├─ 6f
│  │  │  └─ 5ae2f0657115f849eb4146beea38e1204877d2
│  │  ├─ 70
│  │  │  ├─ 1e207d4aff89e1e6118850d675d901447f085a
│  │  │  ├─ 395ba7a39833233aa6191635e63f336120dac2
│  │  │  ├─ 7d0e381e29545b6a7129819b37033eae3954e9
│  │  │  ├─ db6608458399c55593b636dfab253844010c67
│  │  │  └─ f1937f903b497ef9f9a38bfbabc5edc5667e7d
│  │  ├─ 71
│  │  │  └─ 8809925f2de27220e04095da134be547688802
│  │  ├─ 72
│  │  │  ├─ 8a01c3c2d52d39392f8240f18655ab22f30bd8
│  │  │  └─ e8b7aa6017e4a73134b499a4e77b72f5676471
│  │  ├─ 73
│  │  │  ├─ 709719fca5fa02f3e43b7956ff9a66efd38540
│  │  │  └─ ca45d049d490f545db70ee5597378b7c766763
│  │  ├─ 74
│  │  │  ├─ 564aad827d5cfb0c779098cfeb801754d5604a
│  │  │  └─ f832e063afbd70e75490acc585b11d0c59911f
│  │  ├─ 75
│  │  │  └─ 96c042770713bf8728c032223a52484e902aaa
│  │  ├─ 76
│  │  │  ├─ b60797c8a8b551d288b585483422527a16de44
│  │  │  └─ bc807d8da29ec100b04697125a5ad14287e508
│  │  ├─ 78
│  │  │  ├─ 7a3de22826bf88f09a656b87c577ce0b512d61
│  │  │  └─ e2869fcdce277649b77fc1c88ee04576a6b713
│  │  ├─ 79
│  │  │  └─ 26dd7ab3bf5c190178c80845cba5cd09d3659b
│  │  ├─ 7a
│  │  │  ├─ 8b8cbe5697a7c8a24eee2e2c4b2f1d12c76130
│  │  │  └─ 95bc30119e143be2c1cee4503ede6c4b4260a7
│  │  ├─ 7b
│  │  │  └─ 5ad8e50a342a1cefbffca23c9c273221e0587a
│  │  ├─ 7c
│  │  │  ├─ 1e9d25ceda82e702ccb2329063acc4a56cbf31
│  │  │  └─ 279b8175da086d333e24725093321c1e3ac098
│  │  ├─ 7d
│  │  │  └─ b4362cf7f11f5e248162696869ea38a86248e4
│  │  ├─ 7e
│  │  │  └─ d81a88c8ce6e264c1f651859fc9d822c335aab
│  │  ├─ 7f
│  │  │  ├─ 4af58a1110bd430b0c103224098a8fdde57f04
│  │  │  └─ 61f98a94f161ba7427fb739756a2cc2628a45b
│  │  ├─ 80
│  │  │  ├─ 4268dd2e3259e5396ce0ef8814dde55f8db6a4
│  │  │  └─ 9f8335880dbbe1a366621b70dd6b26964dfe9a
│  │  ├─ 81
│  │  │  ├─ 37ec3d95936d9ca0b70fb36a182b650e60d6b9
│  │  │  ├─ bd4ba473dd3500a7e6fd062959865e8d8de455
│  │  │  └─ ed6f43619e3091201873f0bee786e945d39061
│  │  ├─ 83
│  │  │  ├─ 1533d71037a1ef81faf8c551c136cefd082047
│  │  │  ├─ 8592ddc0e2370b1d1807a140bcb63eca695b24
│  │  │  ├─ e3b185caeb4d301640e44599963fc57e900bde
│  │  │  └─ f7b41384135978c2adbe07c3361a88784273a6
│  │  ├─ 86
│  │  │  └─ 240e598fd0596f5323546bad19f85589132b65
│  │  ├─ 87
│  │  │  ├─ 7566dde4703e8a0cf911e7a27ee5b910261567
│  │  │  └─ d6eba4bcd0280737fb0a22c6247951eea62c99
│  │  ├─ 88
│  │  │  ├─ 6bacf9e3f522042602a16f85368119f498b195
│  │  │  └─ c3b0ae4162bc2647d8b4497e5fa2201335d069
│  │  ├─ 89
│  │  │  ├─ 010de4a5dd3798a298af12b03a3f334920798e
│  │  │  ├─ 02432ee6b7696bc469ae0e400f0b61821a01c2
│  │  │  └─ 4efe3ceed25c7db8b9ce1d3e787a86850f892f
│  │  ├─ 8a
│  │  │  ├─ 426a4d789cdfc27e87f1b9a84e61d920d130dc
│  │  │  └─ dd4f0ebc2f21f4d0179994c4d74a4201ffc886
│  │  ├─ 8b
│  │  │  └─ 28ee087ef73ce3db5d5cbae1979acf05c36cdb
│  │  ├─ 8c
│  │  │  └─ ad4026553da51fca3150b8c202cf1a0fdde1fe
│  │  ├─ 8d
│  │  │  ├─ 5a5b4e934d9c0c58f94d9262eba85f145564a8
│  │  │  └─ da3d7782cf9abd10acab6fdb1ea18c6fd08435
│  │  ├─ 8e
│  │  │  ├─ 37a2a50f7c5ced1bab44ca2476bb3431626587
│  │  │  └─ fe06bae20f226b1aa3573c1d8f74a164327a86
│  │  ├─ 8f
│  │  │  └─ 866a2ecb469fd6ee1ada194b877ab57a52580b
│  │  ├─ 90
│  │  │  └─ 2c0458141dace70bd553f8899136ee2d15b9b2
│  │  ├─ 91
│  │  │  ├─ 0ac243e26d52909a8f0f04525ca93e7dec6a1f
│  │  │  ├─ 1996a78ac18a96cb94fc694000a020cedbd5d1
│  │  │  └─ a7996609d893e785f0c27d0e2388981dd0fd34
│  │  ├─ 93
│  │  │  ├─ 80ee065fb214c1b6d9c59b8e01920ed8d6d419
│  │  │  └─ 823cec4bec63b0ff36fbe5845b17cb7590d2ae
│  │  ├─ 95
│  │  │  ├─ 2a9d12b591ea3c985dd31aa64ad49d92648fe9
│  │  │  └─ 8be04c8d54514d7b47d553f3571477710bbaef
│  │  ├─ 97
│  │  │  ├─ 0dbb40d40b8c9d81215c484c14da4cd4f91b53
│  │  │  ├─ 3200912b2457464341ed895e3e925a050d0460
│  │  │  └─ e0333afc1b02d343ed2809f917048bbfa06544
│  │  ├─ 98
│  │  │  └─ 82fbc72935e719540cb5e9f0b664d200df3a21
│  │  ├─ 99
│  │  │  └─ 9019611586a5ba8c9cb22e7009aa6a097336e6
│  │  ├─ 9c
│  │  │  ├─ 0af464cd65fa8510e6140ca47f42f36470e4b2
│  │  │  ├─ 2e07a5f54401a3fbfcc9d31540a409b926ddd2
│  │  │  └─ 6d742974332c59e97b853ee3d43336ad96eeae
│  │  ├─ 9d
│  │  │  ├─ 0895156c34911a16f4304081a178ac05deb614
│  │  │  ├─ 382212e6328cd5ab9eed09c44cf1c2872046c8
│  │  │  ├─ 4dab9cbe36b9107e4781aae2ade8d3c84808d9
│  │  │  └─ b0a84056c6f279b133e9dbfd67cd8594621ab7
│  │  ├─ 9e
│  │  │  ├─ 8422715f746f9815012a974d1991de1380bd21
│  │  │  └─ ba0a38dfb84683c33d5f7cc99df52873226340
│  │  ├─ 9f
│  │  │  ├─ 7bf544492b284b09aaff3eae8dc2f89b97b19d
│  │  │  └─ c04dca01782d8ad6642f4b568d30e1f381df90
│  │  ├─ a0
│  │  │  ├─ 37d57a679d6316736a74c86cbfc6f5fae57c6f
│  │  │  ├─ 5c41855f45c357e42990d3dacbb1c84dc9cacc
│  │  │  └─ 773da93dbd912f8e0e4c2650ed04a5f53951d1
│  │  ├─ a3
│  │  │  └─ b634b1456032ef847429f4a9fe6bb5197ce624
│  │  ├─ a4
│  │  │  ├─ 29b423fb5fd3ff339bbc772855dc08e57c2e0b
│  │  │  └─ 71af3ff879fef990db07781f34481bc129d4ea
│  │  ├─ a5
│  │  │  ├─ 19b9ffdb2768d11595ce40e5f26ff699a84ff6
│  │  │  ├─ 34941ac0a954282a422d9477f9fc190ba01d7b
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ b0545a805135f2ef793a079fedae085840b337
│  │  ├─ a7
│  │  │  ├─ a6b86390c2914ed72ba40aa689fdf4871cb3c1
│  │  │  ├─ cea0b0678120a1b590d1b6592c7318039b9179
│  │  │  └─ e015e14653b5ddcb9d8660cc07546a6616b384
│  │  ├─ a8
│  │  │  ├─ c082a0c256f69eca367cc702fa806bc63605d0
│  │  │  ├─ c3e81bb6b228533cff5e19266ef909c9872732
│  │  │  └─ e1eda21473e01b214bc6f9ae5b0e4de1aaa914
│  │  ├─ a9
│  │  │  └─ 816cbfef17c7362c408cb64e2a4e30b9f12f36
│  │  ├─ aa
│  │  │  ├─ b1b597b0af3d414c5538cfd416eab7ef6d8d72
│  │  │  └─ fef9509dd5c4364df3b0e29457a63e0c87011b
│  │  ├─ ac
│  │  │  ├─ 41f96d2b2b67484e13a5e90128b4f973a436ec
│  │  │  ├─ 574cfdd7bbbf880351932c4b902bbc5ee896ec
│  │  │  └─ 69eb9e9439cb07274a588265b5d3cc4c5b8946
│  │  ├─ ad
│  │  │  └─ 4ac85b5a20848aa89ecf04ed96cb6e7d00cc2a
│  │  ├─ ae
│  │  │  ├─ 55bf31a2d64909fbda26874dc57580e6a3af12
│  │  │  ├─ 80dc74d869305357db5ad39ac39ca3755c8d6b
│  │  │  └─ fd6d1de9e21d4eca521cd46c79c9e908a54ddd
│  │  ├─ af
│  │  │  ├─ 2dae8ffe71fae551ab166a29c03880d6d6fea2
│  │  │  └─ 2e7aac746be4577bf8a71af56276d9d7041843
│  │  ├─ b0
│  │  │  ├─ db7e73f809dcace0b93ff5fb62c1b6f7da9303
│  │  │  └─ f15e84dd7f1f3c2874d15f73fe3f073704e708
│  │  ├─ b1
│  │  │  └─ c6a8dbd5187c1db8acd2557037444bdcb962c7
│  │  ├─ b2
│  │  │  └─ b52705c4d7eddfee2367ec124f584ba220100f
│  │  ├─ b3
│  │  │  └─ 3cb1a1cabb4b8e1565a577fa60fe24f864e6f1
│  │  ├─ b4
│  │  │  └─ 25822683e1bb97c1a0c6c93a35f4cc76f34b34
│  │  ├─ b5
│  │  │  ├─ 0c71e31f1eebb6666403e96322f4b7f52237a5
│  │  │  ├─ 1848b4ef7621732e2af1d61207bccfb63d2139
│  │  │  ├─ 3285b208bc998f53393c4c958c17c16a53c665
│  │  │  ├─ 7918dfc05aed198723a6ec24e1b7c89a1503a4
│  │  │  └─ b5ba0cb405fa546229a7b0cd2721acc31d03de
│  │  ├─ b6
│  │  │  ├─ 6e4ea29f33ffd2092105c08a53b6e57ef0becb
│  │  │  ├─ ae97aee345cfd900f70e84aa87fcfd586ea89e
│  │  │  └─ c880b517a0dc4b4fac9d466d506d46f3a59224
│  │  ├─ b7
│  │  │  └─ 64a00a5b05e6716a33384536715522048971c6
│  │  ├─ b8
│  │  │  ├─ 6e383b49d33c9aad178c9ecc7f3f3c2331694f
│  │  │  ├─ 81c8913d177bedd12c5d3fa07e9b6967e1c910
│  │  │  └─ 838526f85688a7e992095e9a723a7f30f421db
│  │  ├─ bc
│  │  │  ├─ 0be75bffbdae561eaa93153721f199f0319981
│  │  │  └─ 0e0f65f0e6201d04f209b7a0ce2d23ea5e7005
│  │  ├─ be
│  │  │  ├─ b1136121a740151ae8783a4d6ca1a0b52c493a
│  │  │  └─ b8ecdeb35c9f20d36be0a8e1e9ebe629bc07c3
│  │  ├─ bf
│  │  │  ├─ cfc36100b92b10f3ca12583bb1313cbfad7845
│  │  │  └─ d7e29233bf58be43b818010ecac93c383ec398
│  │  ├─ c0
│  │  │  └─ 550dfb894e0c9425f7f5dbcb1125af25ae409d
│  │  ├─ c1
│  │  │  ├─ 34d322424020c03feaa0293280fabf59f6dada
│  │  │  ├─ ace90cea5e95cc85a908930de8b7c49c0a83e2
│  │  │  └─ f90d317b929a74ef250b2761d8b554e6e8633d
│  │  ├─ c2
│  │  │  ├─ d15195629f16f45c67e37b9bd7555d3a88458e
│  │  │  └─ e23dc4d90c1ea7c06f09d4e594c37f28e0f43d
│  │  ├─ c4
│  │  │  └─ 85b1f214c8c7b55d8a5181fdcac563c02af39e
│  │  ├─ c5
│  │  │  ├─ a6d039741214363d07956abc4a6b9dec35c9b4
│  │  │  └─ d40bbd7064e766aad406d1a2e039de79f2904f
│  │  ├─ c8
│  │  │  └─ 9ce17cf384774a9923b1d77545e471394ab0f0
│  │  ├─ c9
│  │  │  └─ d4226ecc153076728eea5b71ebc8ac9f05b41e
│  │  ├─ ca
│  │  │  ├─ 31ac8e9e8e069ddae39aca94d49621156f6188
│  │  │  ├─ 462d63c937b1e06be6c36ed6b0652447144fd0
│  │  │  ├─ d7382b17169626b07793627c5c1903d6c4fcc3
│  │  │  └─ e9f4d8411cd3567659095aa670033fb85fee58
│  │  ├─ cb
│  │  │  └─ f87782373be5f9656a001912da00ffd28e17be
│  │  ├─ cc
│  │  │  └─ 23cd6962431e9804c9350249ced3330145b9f1
│  │  ├─ cd
│  │  │  ├─ 0a31ecc1e28816d84b7a23f16470106bb408d9
│  │  │  └─ 51d69db209de8035f10641171aa4d2ce88896c
│  │  ├─ ce
│  │  │  ├─ 0314ba7ebc79b2e05eab9e896a178d3a370ec2
│  │  │  ├─ bab07b7711aca49e2d03e152ea09024bafd36f
│  │  │  └─ e3fdbce612ad0ece6debcf9bb8be8d1063d424
│  │  ├─ d0
│  │  │  ├─ 205d6d9ce8c20fc1d9989a01d4519e653fd828
│  │  │  ├─ 4b0438686e80479226abb56bc2a5ce8c05fb46
│  │  │  ├─ 552e4b033b71ecc66b7ab43b119aa4b4c2aeed
│  │  │  ├─ 7cb9ae1e516f30376192ff58bfa4484b6f6c95
│  │  │  └─ 8e6e29828d9b9f42ee39c364e4a6dec77456c8
│  │  ├─ d1
│  │  │  ├─ 15ba41289a1113c70e9da5c92d562cc41528f1
│  │  │  └─ 1906aec26dd14372dd1b298f72270c38cce1b7
│  │  ├─ d2
│  │  │  └─ 61b40268579d86f2c43522e4c991d2c52b6bb4
│  │  ├─ d3
│  │  │  └─ 93132cabcb33d41a0efb593a53263a6097e170
│  │  ├─ d4
│  │  │  └─ 4eb05e4d3a0c211a2a50f7a2dbddedbe9d26d5
│  │  ├─ d5
│  │  │  └─ c8554327b382b87e59b23af14b409413df6cf6
│  │  ├─ d6
│  │  │  └─ c071dd0231b55d4b6a2a2a9accfc0d3ef6d5fd
│  │  ├─ d7
│  │  │  ├─ 95dd3c61b1c6ae86f965404e78641b79a256c9
│  │  │  └─ a29ac311b8db602d93aa85d6839f5ee11c9092
│  │  ├─ d9
│  │  │  └─ 69dccb6c83ebbc3bfd6789b1faad88b77efeb4
│  │  ├─ da
│  │  │  ├─ 175699e1ae257a98ffa5efb706f42f58517dfb
│  │  │  ├─ 48fee597a1df875f49c5dddd367e3f153245bb
│  │  │  ├─ 72f0cf44cfe773c41a0c3067d7c6bca04b9c40
│  │  │  └─ a279bfd9bf19d590d055f9feaaf9b76223187c
│  │  ├─ dd
│  │  │  ├─ a0430396cbdcb2031c992a8233f385e095e39b
│  │  │  └─ a7d65e3d7b7af4072031f07189a3da0ef3a14f
│  │  ├─ de
│  │  │  └─ 3595048aabdb05eb0d75b29f11b938e8b922f8
│  │  ├─ df
│  │  │  ├─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  │  ├─ 7a36a2171fdc0801714415997a6ea1c952025a
│  │  │  └─ e87e4ca81bb8bcf9931f5aedfd0a454d4bbf90
│  │  ├─ e1
│  │  │  ├─ 153fe08200d7001c278f0746acf231ed2fb33a
│  │  │  └─ 63e50b2d0deeb219ac5df44ba51993dfbb7af6
│  │  ├─ e2
│  │  │  ├─ 142211eee9e1a2c436517586e6eadcb77d66b8
│  │  │  └─ d1de936ff050724e96947c29086e686ffe9254
│  │  ├─ e3
│  │  │  └─ 99c4a8ddf1886593ac9727bcf0bfa9f7d08254
│  │  ├─ e4
│  │  │  └─ 658a53dd0a67b1879c9edbb4416bbe66c4f704
│  │  ├─ e5
│  │  │  ├─ 06039cf7ad2803a9a1f64ba50a824c7649b03b
│  │  │  ├─ 16621da9e0ffae7479106deed61b7e216150af
│  │  │  ├─ 3f0c5090162881d330cb40a9edb5f85fbe73a0
│  │  │  ├─ b962fa64cf861638400f238b76674e32bd1d35
│  │  │  └─ cc6904f8d015a92f6016a4ba8bded433176279
│  │  ├─ e6
│  │  │  ├─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  │  └─ c6aa85a34e188c4381e2a086c79aa289b18289
│  │  ├─ e9
│  │  │  └─ 93792cb12c9d8223f5a731f2d662ab553180f2
│  │  ├─ eb
│  │  │  ├─ c31c717c6bf994ee856f80788a1a32f52871ef
│  │  │  └─ cc411b927ad6e6a076107b776835a51f6b92aa
│  │  ├─ ec
│  │  │  └─ c0bf2b9b1cd11214312f0c91169f5a81501588
│  │  ├─ ed
│  │  │  ├─ 692a78fd13087d266aff6c9f428f67762c73b1
│  │  │  └─ 836520f5d451c2bc814599cde8e4434105b0b4
│  │  ├─ ef
│  │  │  ├─ 16e69abe5d1250280e496c7498297c8985e80e
│  │  │  └─ 988193feb011257af75bc435a78e627e5c9bd4
│  │  ├─ f0
│  │  │  └─ d5fb0ce8b6faafe9dcd9ce10f7bb4260a6f09d
│  │  ├─ f1
│  │  │  ├─ 219a1d8605d2e635df86818e84cb83b0f50444
│  │  │  └─ 56d84fe7a08ac06584f6c12d8cb5de6b3fd098
│  │  ├─ f2
│  │  │  ├─ 21a02f69530551118b38cd8f8b33154df9a4f1
│  │  │  ├─ 7274d28b95e7237d752e33a444e2c51d2d0cc5
│  │  │  └─ 8b8bcc89b42205be9d6e75cea4b631e92a6ab0
│  │  ├─ f3
│  │  │  ├─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  │  └─ ddc88757af19cebe5fda7be529c073fbfd3aaa
│  │  ├─ f4
│  │  │  ├─ 1d2ad4f9937177853aeb636db325b2389dcf36
│  │  │  └─ ada1144ab4a48e66f5cc27524b04f9d8b8fca5
│  │  ├─ f5
│  │  │  ├─ b32c10e5449c66b349ff00ab26b87fadbcb5b1
│  │  │  ├─ b4881ee2761f3e4ccf156be0fc831e34349771
│  │  │  └─ ce0bb90ab40856e6b33f68ae2304b95a6b835c
│  │  ├─ fa
│  │  │  └─ 69b461bb6333acc77ffa62db29dc7070897e13
│  │  ├─ fb
│  │  │  ├─ 28324b52faeccee39953518f49874af299eac6
│  │  │  ├─ 2cd095a5aa5ac2810115b57f538789b1505e03
│  │  │  └─ c7b9ac3e9c31aba66cd84c11feb5c84cd7a035
│  │  ├─ fc
│  │  │  ├─ 22dc00c75f955d2cc455fe1f3ec78ba337cc0d
│  │  │  ├─ 4be983bbda8b7f2f04c9140eebe47f278c8957
│  │  │  └─ a651fa9e00ea2c3fcafcecf8cc1e0a4e2c9ece
│  │  ├─ fd
│  │  │  ├─ cf621e0e99cbc2fcdd296a7c1f0ff51534656d
│  │  │  └─ dc8f5ea5384177b12e068bcb5eb81cb3935f3b
│  │  ├─ fe
│  │  │  ├─ 7956cf430d2c24e3aa04c0427e5082bbafb565
│  │  │  ├─ a283c4ab44010bafa4d14d61cfe8a5a52ae7d2
│  │  │  └─ c386cb2a99888eb6d83cd83dec4beb22cbb351
│  │  ├─ ff
│  │  │  └─ 46b1fc13b441a46787421a14111edc87bf3dc8
│  │  ├─ info
│  │  └─ pack
│  ├─ refs
│  │  ├─ heads
│  │  │  ├─ dev
│  │  │  └─ master
│  │  ├─ remotes
│  │  │  └─ origin
│  │  │     ├─ dev
│  │  │     └─ master
│  │  └─ tags
│  └─ sourcetreeconfig
├─ .gitignore
├─ .prettierrc.json
├─ README.md
├─ auto-imports.d.ts
├─ components.d.ts
├─ env.config.ts
├─ env.d.ts
├─ index.html
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ favicon.jpg
├─ src
│  ├─ App.vue
│  ├─ api
│  │  ├─ request
│  │  │  ├─ index.ts
│  │  │  ├─ request.ts
│  │  │  └─ types.ts
│  │  └─ test.ts
│  ├─ assets
│  │  ├─ font
│  │  │  └─ SF-Pro-Text-Regular.otf
│  │  └─ image
│  │     └─ top.png
│  ├─ components
│  │  ├─ CmsEdit
│  │  │  └─ index.vue
│  │  ├─ HelloWorld.vue
│  │  ├─ PlatformControl
│  │  │  └─ index.vue
│  │  ├─ SecondSide
│  │  │  ├─ MenuItem.vue
│  │  │  ├─ SideMenu.vue
│  │  │  └─ index.vue
│  │  ├─ SvgIcon
│  │  │  └─ index.vue
│  │  ├─ TfrButton
│  │  │  └─ index.vue
│  │  ├─ TfrCheckbox
│  │  │  └─ index.vue
│  │  ├─ TfrInput
│  │  │  └─ index.vue
│  │  └─ TfrLogo
│  │     └─ index.vue
│  ├─ config.ts
│  ├─ env.d.ts
│  ├─ icons
│  │  ├─ material
│  │  │  ├─ flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2
│  │  │  └─ materialIcons.css
│  │  ├─ svg
│  │  │  ├─ 404.svg
│  │  │  ├─ add_black.svg
│  │  │  ├─ add_white.svg
│  │  │  ├─ analytics.svg
│  │  │  ├─ back.svg
│  │  │  ├─ calendar_black.svg
│  │  │  ├─ delete_red.svg
│  │  │  ├─ edit_cms.svg
│  │  │  ├─ home.svg
│  │  │  ├─ logo.svg
│  │  │  ├─ logout.svg
│  │  │  ├─ mobile.svg
│  │  │  ├─ pc.svg
│  │  │  ├─ siteBuilder.svg
│  │  │  ├─ suspended.svg
│  │  │  ├─ tablet.svg
│  │  │  ├─ tool.svg
│  │  │  ├─ tool_gray.svg
│  │  │  ├─ update.svg
│  │  │  ├─ visibility.svg
│  │  │  └─ visibility_off.svg
│  │  └─ svgo.yml
│  ├─ layout
│  │  ├─ component
│  │  │  └─ sidebar
│  │  │     ├─ index.vue
│  │  │     ├─ logoUser.vue
│  │  │     ├─ menuItem.vue
│  │  │     └─ subMenuItem.vue
│  │  └─ index.vue
│  ├─ main.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ permission.ts
│  ├─ store
│  │  ├─ index.ts
│  │  ├─ modules
│  │  │  └─ user.ts
│  │  ├─ pageconfig
│  │  │  └─ index.ts
│  │  └─ roleStore
│  │     ├─ basic.ts
│  │     └─ index.ts
│  ├─ styles
│  │  ├─ common.less
│  │  ├─ element-ui.scss
│  │  ├─ index.scss
│  │  ├─ mixin.scss
│  │  ├─ sidebar.scss
│  │  ├─ tfr.scss
│  │  ├─ transition.scss
│  │  └─ variables.scss
│  ├─ utils
│  │  ├─ cookies.ts
│  │  └─ validate.ts
│  └─ views
│     ├─ error
│     │  └─ index.vue
│     ├─ home
│     │  └─ index.vue
│     ├─ login
│     │  └─ index.vue
│     └─ pagecontent
│        ├─ components
│        │  ├─ AddModule.vue
│        │  ├─ Banner.vue
│        │  ├─ FootContent.vue
│        │  └─ Pagetop.vue
│        └─ index.vue
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock

```
```
tfr-platform-cms
├─ .env
├─ .env.dev
├─ .eslintrc.js
├─ .eslintrcignore
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ dev
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ dev
│  │           └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ c463021137b9ed331c25aa7d150b9b6d26f0f4
│  │  ├─ 01
│  │  │  ├─ 4fa55a526d4c46556500af227c83eeafcb923d
│  │  │  └─ fbd9d9ff092312e08312c90698806734155f3f
│  │  ├─ 02
│  │  │  ├─ 2dd6389b850e3659b6a6adb72aa1a390ec046b
│  │  │  ├─ 896f78f50363aea6a12b6c7ba7e1e36722d510
│  │  │  ├─ 98cfe8aacbe06ee23127ab3a3834f72c265372
│  │  │  └─ cdc4309d1bfe9fb7dc4f022079883b901400b3
│  │  ├─ 03
│  │  │  ├─ 001a20fcad215911c1fc28460108f0217e663f
│  │  │  └─ 1ccff93d43c758ab878a35678e9e0b8aa597b7
│  │  ├─ 04
│  │  │  ├─ 62a36f3a7d4f674c5ecea5846f02f4a082b318
│  │  │  ├─ b82100fc4c949c5dfe93bedadf9cb1849dc6af
│  │  │  └─ d8f579d3dfeced96b36e55ebb106c9cf5c4382
│  │  ├─ 05
│  │  │  └─ 2a4e345088670f7a9cf23605d9a8b88c45a442
│  │  ├─ 06
│  │  │  └─ abbb0460ef0122dba85a17ec917d951b9ed2d9
│  │  ├─ 07
│  │  │  ├─ 535375d6b5e68aba8d97d015a06f14602ef0f7
│  │  │  └─ a864bd755998fdd5dc9f4165cc54641a03e3d6
│  │  ├─ 08
│  │  │  └─ c53694a832a2c53a7b8b82bcca2b2f6c5aa58a
│  │  ├─ 0a
│  │  │  ├─ 1f7fdc0c0edbec3c81f59fc78d119a6eecb901
│  │  │  ├─ 47531dc2c001c3422de43be54681a8a1f61248
│  │  │  ├─ b8342303eaf6ae7effd910601627e1fa826bbc
│  │  │  └─ e6b60beaa9777d12ddab66bdd147ac4140395d
│  │  ├─ 0b
│  │  │  ├─ 04c754f8eac506a4e33634924b28d639052c6a
│  │  │  ├─ 16e8345f3e987eed55c1429779a67c5b121633
│  │  │  └─ 72da13a7439885f505e46734f6cd0729f5037e
│  │  ├─ 0c
│  │  │  ├─ 065b924bb5fa4111890dc78b76d68cc1d6d403
│  │  │  └─ b97d11fdc58be62f2291e99b5609ca56659451
│  │  ├─ 0e
│  │  │  └─ 6ec79587c177420b5a3e0cecf2530c5a7ee90b
│  │  ├─ 0f
│  │  │  └─ 211226d8b0a7f8611c3c5f8867102a66d3e677
│  │  ├─ 10
│  │  │  ├─ dd502b3e39e3f996d104314cd28c9d99bae914
│  │  │  └─ f6304673724e7c9c581884cee484ba708a676c
│  │  ├─ 11
│  │  │  └─ ebeac6cf52bc1be685c9ee8438e5337af437e8
│  │  ├─ 14
│  │  │  ├─ 1b60ed6d3aa5f77cf900c9d8cc62e83f5b0980
│  │  │  ├─ 62056461944bf474c71a7162d77df123b7c181
│  │  │  └─ 8c3cc98aa897501639e986881e40b0a19b1e56
│  │  ├─ 16
│  │  │  └─ 6725cdf65f6f0085724cb056995a0b72a5313f
│  │  ├─ 17
│  │  │  ├─ 41cb2c951906544aa3f0b1db2eaa1748540e7b
│  │  │  └─ 6147346663d10b514e1a931606d07b7b20981c
│  │  ├─ 18
│  │  │  ├─ 1797f1e2d8aa02f9c72ea189b985fe0e798aa1
│  │  │  └─ 6b076c88811c602639ef9eaf1a7e4e46fe0be5
│  │  ├─ 19
│  │  │  ├─ 26c60236da8c3dfb0e50bc759ffd937c2f4fe4
│  │  │  ├─ 5485d4b2d0423e56297e924a74a40f4c22f2a7
│  │  │  └─ 83693b11f87a59a02dba004e64cdc317ac0a6a
│  │  ├─ 1a
│  │  │  └─ a8829d1858e9c714e407867c3aea6d877f54d8
│  │  ├─ 1b
│  │  │  ├─ 81d18ff83b4edd947a17905bd4d56134843afa
│  │  │  └─ cbf236e469b87bcfb3cb3714f9e472da5c54a7
│  │  ├─ 1c
│  │  │  ├─ 9032d8a59fe8cdcba29a9e579a7f0253ec420a
│  │  │  └─ f25ba978aedb53ba022cc76b8399d6977a69fa
│  │  ├─ 1e
│  │  │  ├─ 65b4b8239ad6eac37555c52c25b4abb6c8c7e0
│  │  │  └─ a26e0dd12d7c37c5db5ae24dcb8b7d4b5b2a9b
│  │  ├─ 1f
│  │  │  ├─ 170f56d7831378c10797d2f4900f2c7eb94405
│  │  │  ├─ 391dd61440c6aaf1e32e76bb88a38052632406
│  │  │  └─ ce4256d955a4e87e432b06371cb3409dab9d02
│  │  ├─ 22
│  │  │  ├─ 8efe68dc25824ed7676c39298483532b72c167
│  │  │  └─ d4aa5a4360dece220b69f4c6a7af7d77efea16
│  │  ├─ 24
│  │  │  └─ ce49fed09ba986e5b67dca5a93c2c30a7ebe3a
│  │  ├─ 25
│  │  │  ├─ 263d94af07cca0a478373cb09815565d762905
│  │  │  └─ f6f63273413af5e243aae8d49de39e29dd575f
│  │  ├─ 27
│  │  │  └─ 0784df5492f889677b441d98b7289ce92bc716
│  │  ├─ 28
│  │  │  ├─ 0a7adda1e47c0253eb4eb0a643c1e14a15787b
│  │  │  ├─ 52848de2b8d0302fff332618bc7f2a33941643
│  │  │  └─ 66fdb601a006cb1bb5d78d2a40d194608da1c7
│  │  ├─ 29
│  │  │  ├─ 1ce3f0a5dabf7959f29e3738b8d5418a35b9ce
│  │  │  └─ d4d1d95db99e144fdde38af0dcad8774a03e65
│  │  ├─ 2a
│  │  │  ├─ 23423a9588d94b6c509b05322504694332263a
│  │  │  ├─ 6d34164d5bd1f60934582943887088a6bee8aa
│  │  │  ├─ 6d363e2661f04398c3a98514bf5f1d61e9385b
│  │  │  ├─ 74d84a3dd2a9606eacd4ed511f1707f34d3558
│  │  │  ├─ c89fb33e1dc3bd6f6f11cc35c30cef0abe87dd
│  │  │  └─ f1e7439c44af68ae59a42d5ca5351350a8e57c
│  │  ├─ 2d
│  │  │  ├─ dc3e2e970d69df382b7577752c0cde079a002e
│  │  │  └─ e298d675d77f76f9e690f95a87ed4e030aff35
│  │  ├─ 2e
│  │  │  ├─ 890fa319cee5aa3b47f731a9a70ccec2f500af
│  │  │  └─ dff78486cd6043dac6121247bee88dd2f7b7e0
│  │  ├─ 2f
│  │  │  └─ 1fb59d92c2468c626452e76da726c243da4eaf
│  │  ├─ 30
│  │  │  ├─ 1dd5236e5b120ae3d3101fadfa617a1b0581de
│  │  │  ├─ a1e52e18d8d80300f83bafd4178f23c6bacea6
│  │  │  ├─ b15e215a24b78043970d820dd5dd5d2e6a3863
│  │  │  └─ dbd837d8c4f351042d728390ff4c38b86108d6
│  │  ├─ 31
│  │  │  ├─ 4683857bb5f55e6a9ae7f7fc6283c513837d2a
│  │  │  └─ 9e7b0a29c72874214c648772bcd2ad980b6cea
│  │  ├─ 32
│  │  │  └─ 8f6ac2e6c4689d2aee3868a1363da9e80b5052
│  │  ├─ 34
│  │  │  ├─ cdd2afba56b9dd3c7f0e3b758069a92db6b7bf
│  │  │  └─ d1d305ed915224e310bda9e08e41c2aa30fd8a
│  │  ├─ 35
│  │  │  └─ f8c2ba34bfb1ac13c9dacb8242525dd975ce81
│  │  ├─ 36
│  │  │  └─ b74bbd995e7cc5c6baab1ce6808ecfda8c27ae
│  │  ├─ 37
│  │  │  ├─ 79f3e4369be525107a6b8c5b9eea0f451fe855
│  │  │  └─ 87552d002886797e80c869132fdb2697b7c709
│  │  ├─ 38
│  │  │  ├─ 439b419c2e3fb6025617b8e27b4fe30031b71f
│  │  │  ├─ 78f749d9ecf37f6ad683d63360dbde5ece2b12
│  │  │  └─ dae70739a15aafd1a462e55b214a27f5a304c3
│  │  ├─ 39
│  │  │  └─ 5ab433bb827bd356297eb395e4c8524d169760
│  │  ├─ 3c
│  │  │  ├─ 50b186c916de79d5ec93ba3798640829a22f35
│  │  │  └─ 610d5bd5898eb187e15b3472fa5aacc2d9291f
│  │  ├─ 3d
│  │  │  └─ 13fb0da5c2221ad3d95a14cf10d28a74c4ffae
│  │  ├─ 3e
│  │  │  └─ e7c7da39b28b962781ca25b2077678b6b71dd3
│  │  ├─ 3f
│  │  │  ├─ c6b94cf05e763cf4d2b30e966101178483dbe1
│  │  │  └─ d661d369df0cca252ef1f73db2721382bd0b55
│  │  ├─ 40
│  │  │  ├─ 5f61073e63417f668acb8590042dc42a0427e0
│  │  │  ├─ 71dfede2a0be1f1c999499fd5329a3cfe34e91
│  │  │  ├─ 753f0e29b0a17dacd25131dcc172970e7ae966
│  │  │  ├─ 7bc4ba16e01e354ec85f6d670e24be08ba95ce
│  │  │  ├─ f1b352bfacdf45d36981df60e29ec2ed809f59
│  │  │  ├─ f2063bbafed7ae041198da4a580774f5d4ecea
│  │  │  └─ fa85a18853e4cafe8357f798b45bdd833013fd
│  │  ├─ 45
│  │  │  ├─ 554b9967da80313c55e0c37c26e475c7475304
│  │  │  └─ f699603a8fa6e9910adbe823df0bb85fc1f472
│  │  ├─ 46
│  │  │  └─ e91cc5043799cb99b029fc06bf2c862fa7b893
│  │  ├─ 47
│  │  │  └─ e62e2324726f536f7b22c295f9a71237ab8754
│  │  ├─ 48
│  │  │  └─ a3e37ad43964273a21485c9866fd4f32dcce2c
│  │  ├─ 49
│  │  │  ├─ 0a57576dae9980bd1483a28f5998f0a83a1e24
│  │  │  └─ a75ec35308ecda1ff9b761eb8963f18936a9af
│  │  ├─ 4a
│  │  │  ├─ 50e066ba0287acd9ac13ba39dc59231b06f485
│  │  │  └─ 96619f98bf0e028c345660deb3e02538009a07
│  │  ├─ 4b
│  │  │  └─ e281d79a3828f35f3260a9eb55816c6e787952
│  │  ├─ 4c
│  │  │  ├─ 32e8530907fb0d6d463b52b71e3adbbcb41baa
│  │  │  ├─ b27cc811e28605bb6d0657a6257f0c901f6809
│  │  │  ├─ e59c4db9d4e0fee1e17d09d39b6d7207958ad9
│  │  │  └─ ec15e0927683d68e440bcef661952adbc9220d
│  │  ├─ 50
│  │  │  └─ a03a45a1c316f6ba6520cd357b4457afc5e622
│  │  ├─ 52
│  │  │  ├─ 20f461a2d785818114c25637eb4593318c6b31
│  │  │  ├─ 67ef8e7325577ba9d0aaaed76a6d2a4a852729
│  │  │  ├─ 7d11e20af16c68fe70e0ec14e23905c59f261f
│  │  │  ├─ d3f87194a2334ffe0a219aa31d039e7fbb7719
│  │  │  └─ d51647b5aa090aba0646b24ef3eb736eb501a8
│  │  ├─ 54
│  │  │  ├─ 5bc2e544c84258e08ed00d562c1c102147841e
│  │  │  ├─ db4380256be9f186a1b17edc6fbd6d581b2031
│  │  │  └─ de5f781cee405af77fe5420a535f1e587377c7
│  │  ├─ 55
│  │  │  ├─ 061428d3240bfdb8c3754f97d32cf886427f94
│  │  │  └─ d1ab84e4a5b78d56d4e29a89bd8ace89457f50
│  │  ├─ 57
│  │  │  ├─ 6c6eec88beb9f5ead6963c542c16712baf1bff
│  │  │  ├─ a0fbcea0a71c29c212416d2b570644c451520d
│  │  │  └─ bb490df37f9fa7b03dd230f33d04ec34b12f8b
│  │  ├─ 58
│  │  │  ├─ 162da1b9ce65c0ecbb5fa4374ed9a19594ce4f
│  │  │  └─ 599870745eba388fc97d64b5824085feb3c321
│  │  ├─ 59
│  │  │  ├─ 0753d65c18e7b58c92cd98751afd114f62632b
│  │  │  ├─ 1ebfcaa77b51f009f07440f57bfffa19c68a4c
│  │  │  └─ 5eac44cfec353da351205d208610d80575c555
│  │  ├─ 5a
│  │  │  └─ 2bd4a4b05545f3046a93e2a3d7e4d2dca2fdc5
│  │  ├─ 5b
│  │  │  └─ 6d0dd1da4710e9455476246b6236717bdbb496
│  │  ├─ 5c
│  │  │  ├─ c739e6e9aa326be704c5bad51c1a5af3a44ceb
│  │  │  └─ d6bb50f8290068dfa70a7ef53e9c6f09533936
│  │  ├─ 5d
│  │  │  ├─ 08be4e68b04b36bfba096c66eb752c4e0ce03b
│  │  │  ├─ 5e274413719cb186ab3629a37f354ae7d21f7a
│  │  │  └─ bb227772d15e6a6214b02def2ec7bffadb20e8
│  │  ├─ 5e
│  │  │  ├─ 073f1fc0759622df2567b32aedf0c638682a3c
│  │  │  ├─ 9414246411c5134f1643af9209fc3507d091c5
│  │  │  └─ c6ae341674413a9ba13502e6c9476f82aa17cb
│  │  ├─ 5f
│  │  │  ├─ 6af85091a687cb59d0b81889195375878425c6
│  │  │  └─ e2e218655a71e17ab21e15737b141f01103c1d
│  │  ├─ 60
│  │  │  ├─ 7f02b27effc4181d977d0d8241368de1fa8af4
│  │  │  └─ 945e8b70ad31f2a4cff5e8fc116c0d85225d3d
│  │  ├─ 61
│  │  │  └─ 1b0cfe1ae8609189bfa012cd242dfb7c505dd7
│  │  ├─ 62
│  │  │  ├─ 327d7f1007af751ad22123beb00d36b702aa31
│  │  │  └─ 3bd4b2ede2d23ff87d01aa371de94833d9ec7e
│  │  ├─ 63
│  │  │  └─ 551e3a6b613db0a733fb37d8fa02a18a9b5ad1
│  │  ├─ 64
│  │  │  └─ d70334cc1b95a0b3c3b6d2230a6e4af29c5a05
│  │  ├─ 65
│  │  │  ├─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  │  ├─ 373efc2ee0833472417385c75a8a7d1ce84149
│  │  │  └─ 857dd9ae4cda223ad02f52d5f8f1c41e504544
│  │  ├─ 67
│  │  │  ├─ 54e846c498638ea1cc7ff58bcab1ffccf84638
│  │  │  └─ bb2b81af87b2c3a1f823e7a2d6a0e3448dc377
│  │  ├─ 68
│  │  │  ├─ 08682e9c402383d69d303f3a71442beb080ed8
│  │  │  └─ aaca32a158c604360b5a46132807a3b7dc7adb
│  │  ├─ 6a
│  │  │  └─ 2c343940a887650db77eadf832922af96edd4e
│  │  ├─ 6b
│  │  │  └─ f04d7f4400b4e3a8d6971486c54c85cb7a265b
│  │  ├─ 6c
│  │  │  └─ a209bbb9416ece7685efb07c323c4f9a34cee0
│  │  ├─ 6d
│  │  │  └─ f50190aab43bd3a727b580fe2699ba36a4712c
│  │  ├─ 6f
│  │  │  └─ 5ae2f0657115f849eb4146beea38e1204877d2
│  │  ├─ 70
│  │  │  ├─ 1e207d4aff89e1e6118850d675d901447f085a
│  │  │  ├─ 395ba7a39833233aa6191635e63f336120dac2
│  │  │  ├─ 7d0e381e29545b6a7129819b37033eae3954e9
│  │  │  ├─ db6608458399c55593b636dfab253844010c67
│  │  │  └─ f1937f903b497ef9f9a38bfbabc5edc5667e7d
│  │  ├─ 71
│  │  │  └─ 8809925f2de27220e04095da134be547688802
│  │  ├─ 72
│  │  │  ├─ 8a01c3c2d52d39392f8240f18655ab22f30bd8
│  │  │  └─ e8b7aa6017e4a73134b499a4e77b72f5676471
│  │  ├─ 73
│  │  │  ├─ 709719fca5fa02f3e43b7956ff9a66efd38540
│  │  │  └─ ca45d049d490f545db70ee5597378b7c766763
│  │  ├─ 74
│  │  │  ├─ 564aad827d5cfb0c779098cfeb801754d5604a
│  │  │  └─ f832e063afbd70e75490acc585b11d0c59911f
│  │  ├─ 75
│  │  │  └─ 96c042770713bf8728c032223a52484e902aaa
│  │  ├─ 76
│  │  │  ├─ b60797c8a8b551d288b585483422527a16de44
│  │  │  └─ bc807d8da29ec100b04697125a5ad14287e508
│  │  ├─ 78
│  │  │  ├─ 7a3de22826bf88f09a656b87c577ce0b512d61
│  │  │  └─ e2869fcdce277649b77fc1c88ee04576a6b713
│  │  ├─ 79
│  │  │  └─ 26dd7ab3bf5c190178c80845cba5cd09d3659b
│  │  ├─ 7a
│  │  │  ├─ 8b8cbe5697a7c8a24eee2e2c4b2f1d12c76130
│  │  │  └─ 95bc30119e143be2c1cee4503ede6c4b4260a7
│  │  ├─ 7b
│  │  │  └─ 5ad8e50a342a1cefbffca23c9c273221e0587a
│  │  ├─ 7c
│  │  │  ├─ 1e9d25ceda82e702ccb2329063acc4a56cbf31
│  │  │  └─ 279b8175da086d333e24725093321c1e3ac098
│  │  ├─ 7d
│  │  │  └─ b4362cf7f11f5e248162696869ea38a86248e4
│  │  ├─ 7e
│  │  │  └─ d81a88c8ce6e264c1f651859fc9d822c335aab
│  │  ├─ 7f
│  │  │  ├─ 4af58a1110bd430b0c103224098a8fdde57f04
│  │  │  └─ 61f98a94f161ba7427fb739756a2cc2628a45b
│  │  ├─ 80
│  │  │  ├─ 4268dd2e3259e5396ce0ef8814dde55f8db6a4
│  │  │  └─ 9f8335880dbbe1a366621b70dd6b26964dfe9a
│  │  ├─ 81
│  │  │  ├─ 37ec3d95936d9ca0b70fb36a182b650e60d6b9
│  │  │  ├─ bd4ba473dd3500a7e6fd062959865e8d8de455
│  │  │  └─ ed6f43619e3091201873f0bee786e945d39061
│  │  ├─ 83
│  │  │  ├─ 1533d71037a1ef81faf8c551c136cefd082047
│  │  │  ├─ 8592ddc0e2370b1d1807a140bcb63eca695b24
│  │  │  ├─ e3b185caeb4d301640e44599963fc57e900bde
│  │  │  └─ f7b41384135978c2adbe07c3361a88784273a6
│  │  ├─ 86
│  │  │  └─ 240e598fd0596f5323546bad19f85589132b65
│  │  ├─ 87
│  │  │  ├─ 7566dde4703e8a0cf911e7a27ee5b910261567
│  │  │  └─ d6eba4bcd0280737fb0a22c6247951eea62c99
│  │  ├─ 88
│  │  │  ├─ 6bacf9e3f522042602a16f85368119f498b195
│  │  │  └─ c3b0ae4162bc2647d8b4497e5fa2201335d069
│  │  ├─ 89
│  │  │  ├─ 010de4a5dd3798a298af12b03a3f334920798e
│  │  │  ├─ 02432ee6b7696bc469ae0e400f0b61821a01c2
│  │  │  └─ 4efe3ceed25c7db8b9ce1d3e787a86850f892f
│  │  ├─ 8a
│  │  │  ├─ 426a4d789cdfc27e87f1b9a84e61d920d130dc
│  │  │  └─ dd4f0ebc2f21f4d0179994c4d74a4201ffc886
│  │  ├─ 8b
│  │  │  └─ 28ee087ef73ce3db5d5cbae1979acf05c36cdb
│  │  ├─ 8c
│  │  │  └─ ad4026553da51fca3150b8c202cf1a0fdde1fe
│  │  ├─ 8d
│  │  │  ├─ 5a5b4e934d9c0c58f94d9262eba85f145564a8
│  │  │  └─ da3d7782cf9abd10acab6fdb1ea18c6fd08435
│  │  ├─ 8e
│  │  │  ├─ 37a2a50f7c5ced1bab44ca2476bb3431626587
│  │  │  └─ fe06bae20f226b1aa3573c1d8f74a164327a86
│  │  ├─ 8f
│  │  │  └─ 866a2ecb469fd6ee1ada194b877ab57a52580b
│  │  ├─ 90
│  │  │  └─ 2c0458141dace70bd553f8899136ee2d15b9b2
│  │  ├─ 91
│  │  │  ├─ 0ac243e26d52909a8f0f04525ca93e7dec6a1f
│  │  │  ├─ 1996a78ac18a96cb94fc694000a020cedbd5d1
│  │  │  └─ a7996609d893e785f0c27d0e2388981dd0fd34
│  │  ├─ 93
│  │  │  ├─ 80ee065fb214c1b6d9c59b8e01920ed8d6d419
│  │  │  └─ 823cec4bec63b0ff36fbe5845b17cb7590d2ae
│  │  ├─ 95
│  │  │  ├─ 2a9d12b591ea3c985dd31aa64ad49d92648fe9
│  │  │  └─ 8be04c8d54514d7b47d553f3571477710bbaef
│  │  ├─ 97
│  │  │  ├─ 0dbb40d40b8c9d81215c484c14da4cd4f91b53
│  │  │  ├─ 3200912b2457464341ed895e3e925a050d0460
│  │  │  └─ e0333afc1b02d343ed2809f917048bbfa06544
│  │  ├─ 98
│  │  │  └─ 82fbc72935e719540cb5e9f0b664d200df3a21
│  │  ├─ 99
│  │  │  └─ 9019611586a5ba8c9cb22e7009aa6a097336e6
│  │  ├─ 9c
│  │  │  ├─ 0af464cd65fa8510e6140ca47f42f36470e4b2
│  │  │  ├─ 2e07a5f54401a3fbfcc9d31540a409b926ddd2
│  │  │  └─ 6d742974332c59e97b853ee3d43336ad96eeae
│  │  ├─ 9d
│  │  │  ├─ 0895156c34911a16f4304081a178ac05deb614
│  │  │  ├─ 382212e6328cd5ab9eed09c44cf1c2872046c8
│  │  │  ├─ 4dab9cbe36b9107e4781aae2ade8d3c84808d9
│  │  │  └─ b0a84056c6f279b133e9dbfd67cd8594621ab7
│  │  ├─ 9e
│  │  │  ├─ 8422715f746f9815012a974d1991de1380bd21
│  │  │  └─ ba0a38dfb84683c33d5f7cc99df52873226340
│  │  ├─ 9f
│  │  │  ├─ 7bf544492b284b09aaff3eae8dc2f89b97b19d
│  │  │  └─ c04dca01782d8ad6642f4b568d30e1f381df90
│  │  ├─ a0
│  │  │  ├─ 37d57a679d6316736a74c86cbfc6f5fae57c6f
│  │  │  ├─ 5c41855f45c357e42990d3dacbb1c84dc9cacc
│  │  │  └─ 773da93dbd912f8e0e4c2650ed04a5f53951d1
│  │  ├─ a3
│  │  │  └─ b634b1456032ef847429f4a9fe6bb5197ce624
│  │  ├─ a4
│  │  │  ├─ 29b423fb5fd3ff339bbc772855dc08e57c2e0b
│  │  │  └─ 71af3ff879fef990db07781f34481bc129d4ea
│  │  ├─ a5
│  │  │  ├─ 19b9ffdb2768d11595ce40e5f26ff699a84ff6
│  │  │  ├─ 34941ac0a954282a422d9477f9fc190ba01d7b
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ b0545a805135f2ef793a079fedae085840b337
│  │  ├─ a7
│  │  │  ├─ a6b86390c2914ed72ba40aa689fdf4871cb3c1
│  │  │  ├─ cea0b0678120a1b590d1b6592c7318039b9179
│  │  │  └─ e015e14653b5ddcb9d8660cc07546a6616b384
│  │  ├─ a8
│  │  │  ├─ c082a0c256f69eca367cc702fa806bc63605d0
│  │  │  ├─ c3e81bb6b228533cff5e19266ef909c9872732
│  │  │  └─ e1eda21473e01b214bc6f9ae5b0e4de1aaa914
│  │  ├─ a9
│  │  │  └─ 816cbfef17c7362c408cb64e2a4e30b9f12f36
│  │  ├─ aa
│  │  │  ├─ b1b597b0af3d414c5538cfd416eab7ef6d8d72
│  │  │  └─ fef9509dd5c4364df3b0e29457a63e0c87011b
│  │  ├─ ac
│  │  │  ├─ 41f96d2b2b67484e13a5e90128b4f973a436ec
│  │  │  ├─ 574cfdd7bbbf880351932c4b902bbc5ee896ec
│  │  │  └─ 69eb9e9439cb07274a588265b5d3cc4c5b8946
│  │  ├─ ad
│  │  │  └─ 4ac85b5a20848aa89ecf04ed96cb6e7d00cc2a
│  │  ├─ ae
│  │  │  ├─ 55bf31a2d64909fbda26874dc57580e6a3af12
│  │  │  ├─ 80dc74d869305357db5ad39ac39ca3755c8d6b
│  │  │  └─ fd6d1de9e21d4eca521cd46c79c9e908a54ddd
│  │  ├─ af
│  │  │  ├─ 2dae8ffe71fae551ab166a29c03880d6d6fea2
│  │  │  └─ 2e7aac746be4577bf8a71af56276d9d7041843
│  │  ├─ b0
│  │  │  ├─ db7e73f809dcace0b93ff5fb62c1b6f7da9303
│  │  │  └─ f15e84dd7f1f3c2874d15f73fe3f073704e708
│  │  ├─ b1
│  │  │  └─ c6a8dbd5187c1db8acd2557037444bdcb962c7
│  │  ├─ b2
│  │  │  └─ b52705c4d7eddfee2367ec124f584ba220100f
│  │  ├─ b3
│  │  │  └─ 3cb1a1cabb4b8e1565a577fa60fe24f864e6f1
│  │  ├─ b4
│  │  │  └─ 25822683e1bb97c1a0c6c93a35f4cc76f34b34
│  │  ├─ b5
│  │  │  ├─ 0c71e31f1eebb6666403e96322f4b7f52237a5
│  │  │  ├─ 1848b4ef7621732e2af1d61207bccfb63d2139
│  │  │  ├─ 3285b208bc998f53393c4c958c17c16a53c665
│  │  │  ├─ 7918dfc05aed198723a6ec24e1b7c89a1503a4
│  │  │  └─ b5ba0cb405fa546229a7b0cd2721acc31d03de
│  │  ├─ b6
│  │  │  ├─ 6e4ea29f33ffd2092105c08a53b6e57ef0becb
│  │  │  ├─ ae97aee345cfd900f70e84aa87fcfd586ea89e
│  │  │  └─ c880b517a0dc4b4fac9d466d506d46f3a59224
│  │  ├─ b7
│  │  │  └─ 64a00a5b05e6716a33384536715522048971c6
│  │  ├─ b8
│  │  │  ├─ 6e383b49d33c9aad178c9ecc7f3f3c2331694f
│  │  │  ├─ 81c8913d177bedd12c5d3fa07e9b6967e1c910
│  │  │  └─ 838526f85688a7e992095e9a723a7f30f421db
│  │  ├─ bc
│  │  │  ├─ 0be75bffbdae561eaa93153721f199f0319981
│  │  │  └─ 0e0f65f0e6201d04f209b7a0ce2d23ea5e7005
│  │  ├─ be
│  │  │  ├─ b1136121a740151ae8783a4d6ca1a0b52c493a
│  │  │  └─ b8ecdeb35c9f20d36be0a8e1e9ebe629bc07c3
│  │  ├─ bf
│  │  │  ├─ cfc36100b92b10f3ca12583bb1313cbfad7845
│  │  │  └─ d7e29233bf58be43b818010ecac93c383ec398
│  │  ├─ c0
│  │  │  └─ 550dfb894e0c9425f7f5dbcb1125af25ae409d
│  │  ├─ c1
│  │  │  ├─ 34d322424020c03feaa0293280fabf59f6dada
│  │  │  ├─ ace90cea5e95cc85a908930de8b7c49c0a83e2
│  │  │  └─ f90d317b929a74ef250b2761d8b554e6e8633d
│  │  ├─ c2
│  │  │  ├─ d15195629f16f45c67e37b9bd7555d3a88458e
│  │  │  └─ e23dc4d90c1ea7c06f09d4e594c37f28e0f43d
│  │  ├─ c4
│  │  │  └─ 85b1f214c8c7b55d8a5181fdcac563c02af39e
│  │  ├─ c5
│  │  │  ├─ a6d039741214363d07956abc4a6b9dec35c9b4
│  │  │  └─ d40bbd7064e766aad406d1a2e039de79f2904f
│  │  ├─ c8
│  │  │  └─ 9ce17cf384774a9923b1d77545e471394ab0f0
│  │  ├─ c9
│  │  │  └─ d4226ecc153076728eea5b71ebc8ac9f05b41e
│  │  ├─ ca
│  │  │  ├─ 31ac8e9e8e069ddae39aca94d49621156f6188
│  │  │  ├─ 462d63c937b1e06be6c36ed6b0652447144fd0
│  │  │  ├─ d7382b17169626b07793627c5c1903d6c4fcc3
│  │  │  └─ e9f4d8411cd3567659095aa670033fb85fee58
│  │  ├─ cb
│  │  │  └─ f87782373be5f9656a001912da00ffd28e17be
│  │  ├─ cc
│  │  │  └─ 23cd6962431e9804c9350249ced3330145b9f1
│  │  ├─ cd
│  │  │  ├─ 0a31ecc1e28816d84b7a23f16470106bb408d9
│  │  │  └─ 51d69db209de8035f10641171aa4d2ce88896c
│  │  ├─ ce
│  │  │  ├─ 0314ba7ebc79b2e05eab9e896a178d3a370ec2
│  │  │  ├─ bab07b7711aca49e2d03e152ea09024bafd36f
│  │  │  └─ e3fdbce612ad0ece6debcf9bb8be8d1063d424
│  │  ├─ d0
│  │  │  ├─ 205d6d9ce8c20fc1d9989a01d4519e653fd828
│  │  │  ├─ 4b0438686e80479226abb56bc2a5ce8c05fb46
│  │  │  ├─ 552e4b033b71ecc66b7ab43b119aa4b4c2aeed
│  │  │  ├─ 7cb9ae1e516f30376192ff58bfa4484b6f6c95
│  │  │  └─ 8e6e29828d9b9f42ee39c364e4a6dec77456c8
│  │  ├─ d1
│  │  │  ├─ 15ba41289a1113c70e9da5c92d562cc41528f1
│  │  │  └─ 1906aec26dd14372dd1b298f72270c38cce1b7
│  │  ├─ d2
│  │  │  └─ 61b40268579d86f2c43522e4c991d2c52b6bb4
│  │  ├─ d3
│  │  │  └─ 93132cabcb33d41a0efb593a53263a6097e170
│  │  ├─ d4
│  │  │  └─ 4eb05e4d3a0c211a2a50f7a2dbddedbe9d26d5
│  │  ├─ d5
│  │  │  └─ c8554327b382b87e59b23af14b409413df6cf6
│  │  ├─ d6
│  │  │  └─ c071dd0231b55d4b6a2a2a9accfc0d3ef6d5fd
│  │  ├─ d7
│  │  │  ├─ 95dd3c61b1c6ae86f965404e78641b79a256c9
│  │  │  └─ a29ac311b8db602d93aa85d6839f5ee11c9092
│  │  ├─ d9
│  │  │  └─ 69dccb6c83ebbc3bfd6789b1faad88b77efeb4
│  │  ├─ da
│  │  │  ├─ 175699e1ae257a98ffa5efb706f42f58517dfb
│  │  │  ├─ 48fee597a1df875f49c5dddd367e3f153245bb
│  │  │  ├─ 72f0cf44cfe773c41a0c3067d7c6bca04b9c40
│  │  │  └─ a279bfd9bf19d590d055f9feaaf9b76223187c
│  │  ├─ dd
│  │  │  ├─ a0430396cbdcb2031c992a8233f385e095e39b
│  │  │  └─ a7d65e3d7b7af4072031f07189a3da0ef3a14f
│  │  ├─ de
│  │  │  └─ 3595048aabdb05eb0d75b29f11b938e8b922f8
│  │  ├─ df
│  │  │  ├─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  │  ├─ 7a36a2171fdc0801714415997a6ea1c952025a
│  │  │  └─ e87e4ca81bb8bcf9931f5aedfd0a454d4bbf90
│  │  ├─ e1
│  │  │  ├─ 153fe08200d7001c278f0746acf231ed2fb33a
│  │  │  └─ 63e50b2d0deeb219ac5df44ba51993dfbb7af6
│  │  ├─ e2
│  │  │  ├─ 142211eee9e1a2c436517586e6eadcb77d66b8
│  │  │  └─ d1de936ff050724e96947c29086e686ffe9254
│  │  ├─ e3
│  │  │  └─ 99c4a8ddf1886593ac9727bcf0bfa9f7d08254
│  │  ├─ e4
│  │  │  └─ 658a53dd0a67b1879c9edbb4416bbe66c4f704
│  │  ├─ e5
│  │  │  ├─ 06039cf7ad2803a9a1f64ba50a824c7649b03b
│  │  │  ├─ 16621da9e0ffae7479106deed61b7e216150af
│  │  │  ├─ 3f0c5090162881d330cb40a9edb5f85fbe73a0
│  │  │  ├─ b962fa64cf861638400f238b76674e32bd1d35
│  │  │  └─ cc6904f8d015a92f6016a4ba8bded433176279
│  │  ├─ e6
│  │  │  ├─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  │  └─ c6aa85a34e188c4381e2a086c79aa289b18289
│  │  ├─ e9
│  │  │  └─ 93792cb12c9d8223f5a731f2d662ab553180f2
│  │  ├─ eb
│  │  │  ├─ c31c717c6bf994ee856f80788a1a32f52871ef
│  │  │  └─ cc411b927ad6e6a076107b776835a51f6b92aa
│  │  ├─ ec
│  │  │  └─ c0bf2b9b1cd11214312f0c91169f5a81501588
│  │  ├─ ed
│  │  │  ├─ 692a78fd13087d266aff6c9f428f67762c73b1
│  │  │  └─ 836520f5d451c2bc814599cde8e4434105b0b4
│  │  ├─ ef
│  │  │  ├─ 16e69abe5d1250280e496c7498297c8985e80e
│  │  │  └─ 988193feb011257af75bc435a78e627e5c9bd4
│  │  ├─ f0
│  │  │  └─ d5fb0ce8b6faafe9dcd9ce10f7bb4260a6f09d
│  │  ├─ f1
│  │  │  ├─ 219a1d8605d2e635df86818e84cb83b0f50444
│  │  │  └─ 56d84fe7a08ac06584f6c12d8cb5de6b3fd098
│  │  ├─ f2
│  │  │  ├─ 21a02f69530551118b38cd8f8b33154df9a4f1
│  │  │  ├─ 7274d28b95e7237d752e33a444e2c51d2d0cc5
│  │  │  └─ 8b8bcc89b42205be9d6e75cea4b631e92a6ab0
│  │  ├─ f3
│  │  │  ├─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  │  └─ ddc88757af19cebe5fda7be529c073fbfd3aaa
│  │  ├─ f4
│  │  │  ├─ 1d2ad4f9937177853aeb636db325b2389dcf36
│  │  │  └─ ada1144ab4a48e66f5cc27524b04f9d8b8fca5
│  │  ├─ f5
│  │  │  ├─ b32c10e5449c66b349ff00ab26b87fadbcb5b1
│  │  │  ├─ b4881ee2761f3e4ccf156be0fc831e34349771
│  │  │  └─ ce0bb90ab40856e6b33f68ae2304b95a6b835c
│  │  ├─ fa
│  │  │  └─ 69b461bb6333acc77ffa62db29dc7070897e13
│  │  ├─ fb
│  │  │  ├─ 28324b52faeccee39953518f49874af299eac6
│  │  │  ├─ 2cd095a5aa5ac2810115b57f538789b1505e03
│  │  │  └─ c7b9ac3e9c31aba66cd84c11feb5c84cd7a035
│  │  ├─ fc
│  │  │  ├─ 22dc00c75f955d2cc455fe1f3ec78ba337cc0d
│  │  │  ├─ 4be983bbda8b7f2f04c9140eebe47f278c8957
│  │  │  └─ a651fa9e00ea2c3fcafcecf8cc1e0a4e2c9ece
│  │  ├─ fd
│  │  │  ├─ cf621e0e99cbc2fcdd296a7c1f0ff51534656d
│  │  │  └─ dc8f5ea5384177b12e068bcb5eb81cb3935f3b
│  │  ├─ fe
│  │  │  ├─ 7956cf430d2c24e3aa04c0427e5082bbafb565
│  │  │  ├─ a283c4ab44010bafa4d14d61cfe8a5a52ae7d2
│  │  │  └─ c386cb2a99888eb6d83cd83dec4beb22cbb351
│  │  ├─ ff
│  │  │  └─ 46b1fc13b441a46787421a14111edc87bf3dc8
│  │  ├─ info
│  │  └─ pack
│  ├─ refs
│  │  ├─ heads
│  │  │  ├─ dev
│  │  │  └─ master
│  │  ├─ remotes
│  │  │  └─ origin
│  │  │     ├─ dev
│  │  │     └─ master
│  │  └─ tags
│  └─ sourcetreeconfig
├─ .gitignore
├─ .prettierrc.json
├─ README.md
├─ auto-imports.d.ts
├─ components.d.ts
├─ env.config.ts
├─ env.d.ts
├─ index.html
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ favicon.jpg
├─ src
│  ├─ App.vue
│  ├─ api
│  │  ├─ request
│  │  │  ├─ index.ts
│  │  │  ├─ request.ts
│  │  │  └─ types.ts
│  │  └─ test.ts
│  ├─ assets
│  │  ├─ font
│  │  │  └─ SF-Pro-Text-Regular.otf
│  │  └─ image
│  │     └─ top.png
│  ├─ components
│  │  ├─ CmsEdit
│  │  │  └─ index.vue
│  │  ├─ HelloWorld.vue
│  │  ├─ PlatformControl
│  │  │  └─ index.vue
│  │  ├─ SecondSide
│  │  │  ├─ MenuItem.vue
│  │  │  ├─ SideMenu.vue
│  │  │  └─ index.vue
│  │  ├─ SvgIcon
│  │  │  └─ index.vue
│  │  ├─ TfrButton
│  │  │  └─ index.vue
│  │  ├─ TfrCheckbox
│  │  │  └─ index.vue
│  │  ├─ TfrInput
│  │  │  └─ index.vue
│  │  └─ TfrLogo
│  │     └─ index.vue
│  ├─ config.ts
│  ├─ env.d.ts
│  ├─ icons
│  │  ├─ material
│  │  │  ├─ flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2
│  │  │  └─ materialIcons.css
│  │  ├─ svg
│  │  │  ├─ 404.svg
│  │  │  ├─ add_black.svg
│  │  │  ├─ add_white.svg
│  │  │  ├─ analytics.svg
│  │  │  ├─ back.svg
│  │  │  ├─ calendar_black.svg
│  │  │  ├─ delete_red.svg
│  │  │  ├─ edit_cms.svg
│  │  │  ├─ home.svg
│  │  │  ├─ logo.svg
│  │  │  ├─ logout.svg
│  │  │  ├─ mobile.svg
│  │  │  ├─ pc.svg
│  │  │  ├─ siteBuilder.svg
│  │  │  ├─ suspended.svg
│  │  │  ├─ tablet.svg
│  │  │  ├─ tool.svg
│  │  │  ├─ tool_gray.svg
│  │  │  ├─ update.svg
│  │  │  ├─ visibility.svg
│  │  │  └─ visibility_off.svg
│  │  └─ svgo.yml
│  ├─ layout
│  │  ├─ component
│  │  │  └─ sidebar
│  │  │     ├─ index.vue
│  │  │     ├─ logoUser.vue
│  │  │     ├─ menuItem.vue
│  │  │     └─ subMenuItem.vue
│  │  └─ index.vue
│  ├─ main.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ permission.ts
│  ├─ store
│  │  ├─ index.ts
│  │  ├─ modules
│  │  │  └─ user.ts
│  │  ├─ pageconfig
│  │  │  └─ index.ts
│  │  └─ roleStore
│  │     ├─ basic.ts
│  │     └─ index.ts
│  ├─ styles
│  │  ├─ common.less
│  │  ├─ element-ui.scss
│  │  ├─ index.scss
│  │  ├─ mixin.scss
│  │  ├─ sidebar.scss
│  │  ├─ tfr.scss
│  │  ├─ transition.scss
│  │  └─ variables.scss
│  ├─ utils
│  │  ├─ cookies.ts
│  │  └─ validate.ts
│  └─ views
│     ├─ error
│     │  └─ index.vue
│     ├─ home
│     │  └─ index.vue
│     ├─ login
│     │  └─ index.vue
│     └─ pagecontent
│        ├─ components
│        │  ├─ AddModule.vue
│        │  ├─ Banner.vue
│        │  ├─ FootContent.vue
│        │  └─ Pagetop.vue
│        └─ index.vue
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock

```