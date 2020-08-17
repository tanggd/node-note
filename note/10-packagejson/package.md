# package.json

各属性的信息注释说明

```json
{
  // 项目的名称
  // 名称必须少于 214 个字符，且不能包含空格，只能包含小写字母、连字符（-）或下划线（_）
  "name": "vue_demo",
  // 项目当前的版本
  // 版本始终以 3 个数字表示：x.x.x
  // 第一个数字是主版本号，第二个数字是次版本号，第三个数字是补丁版本号
  "version": "1.0.0",
  // 项目描述
  "description": "vue demo",
  // 项目的入口文件
  "main": "./src/main.js",
  // 设置true，则可以防止项目被意外地发布到 npm 上去
  "private": true,
  // 定义了一组可以运行的 node 脚本
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  // 项目依赖安装的 npm 软件包的列表
  "dependencies": {
    "vue": "^2.5.2"
  },
  // 项目开发依赖安装的 npm 软件包的列表
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-jest": "^21.0.2",
    "babel-loader": "^7.1.1",
    "babel-plugin-dynamic-import-node": "^1.2.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "eslint": "^4.15.0",
    "eslint-config-airbnb-base": "^11.3.0",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-import-resolver-webpack": "^0.8.3",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-vue": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.0.4",
    "jest-serializer-vue": "^0.3.0",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-jest": "^1.0.2",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  // 设置项目运行环境（node、npm版本）
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  // 用于告知要支持哪些浏览器（及其版本）
  // Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器
  // 下面的设置的意思是：需要支持使用率超过 1％（来自 CanIUse.com 的统计信息）的所有浏览器的最新的 2 个主版本，但不含 IE8 及更低的版本。
  // 更多配置见 https://www.npmjs.com/package/browserslist
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"],
  // 项目仓库位置
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tanggd/node-note.git"
  },
  // 作者
  "author": "tang tang@163.com",
  // 贡献者
  "contributors": ["tang tang@163.com https://github.com/tang", "tang2 tang2@163.com https://github.com/tang2"],
  // 项目的许可证
  "license": "MIT",
  // bug地址，一般使用issues
  "bugs": {
    "url": "https://github.com/tanggd/node-note/issues"
  },
  // 项目首页
  "homepage": "https://github.com/tanggd/node-note#readme",
  // 项目关键字数组
  "keywords": [
    "email",
    "machine learning",
    "ai"
  ]
}
```

包版本控制

```json
// 包版本控制
// 版本都有 3 个数字，第一个是主版本，第二个是次版本，第三个是补丁版本
// 各符号的含义说明
"dependencies": {
  // 只更新补丁版本：即 2.5.3 可以，但 2.6.2 不可以
  "vue": "~2.5.2",
  // 更新补丁版本和次版本
  "vue": "^2.5.2",
  // 接受所有的更新，包括主版本升级
  "vue": "*2.5.2",
  // 接受高于指定版本的任何版本
  "vue": ">2.5.2",
  // 接受等于或高于指定版本的任何版本
  "vue": ">=2.5.2",
  // 接受等于或低于指定版本的任何版本
  "vue": "<=2.5.2",
  // 接受低于指定版本的任何版本
  "vue": "<2.5.2",
  // 仅接受指定的特定版本
  "vue": "=2.5.2",
  // 仅接受指定的特定版本
  "vue": "2.5.2",
  // 使用可用的最新版本
  "vue": "latest2.5.2",
  // 使用 2.5.2 或 2.6.2的版本
  "vue": "2.5.2 || 2.6.2",
  // 使用 2.5.2 或从 2.6.2 开始但低于 2.7.2 的版本
  "vue": "2.5.2 || >=2.6.2 <2.7.2",
  // 使用 2.5.2 至 2.6.2 范围的版本
  "vue": "2.5.2 - 2.6.2",
}
```

package-lock.json 会固化当前安装的每个软件包的版本，当运行 npm install时，npm 会使用这些确切的版本。保证了各个开发者使用的软件包版本一致。

当运行 npm update 时，package-lock.json 文件中的依赖的版本会被更新

查看所有已安装的 npm 软件包（包括它们的依赖包）的最新版本，命令：npm list

npm list -g，查看全局的软件包的最新版本

npm list 操作可以看见包最新版本，以及其依赖包及其版本，

npm list --depth=0 操作只能看见顶层的包（没有它们的依赖包）

npm list -g --depth=0

npm list <package-name>，查看指定包的版本（包括它们的依赖包）

npm view <package-name> version，查看包在npm上最新的可用版本

npm view <package-name> versions，查看包在npm上全部可用版本

npm login
npm publish

npm info
