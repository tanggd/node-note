# npm

Node Package Manager

## 主要内容

``npm`` 是 ``Node.js`` 标准的软件包管理器。

安装了node就会有对应的npm

- npm -v 可以查看npm版本

- 更新npm
  - npm install npm@latest -g
  - npm install npm@4.4.1 -g

### 初始化

- npm init
  - 初始化 ``package.json`` 文件

- npm init --yes
  - 使用默认的配置来初始化 ``package.json`` 文件

在init前我们可以配置一些简单配置，下次 ``npm init`` 的时候，就会用上这些默认的配置信息

```bash
# 配置author邮箱
npm set init.author.email "xxx@163.com"
# 配置author name
npm set init.author.name "tang"
# 配置license
npm set init.license "MIT"
```

### 安装

- npm install
  - 安装 ``package.json`` 文件中的包
  - 简写：npm i

- npm install --production 
  - 安装 package.json 中dependencies 里面的包，不会安装devDependencies 里面的

- npm install <package-name> --save
  - 安装并添加包到 ``package.json`` 文件的 ``dependencies`` 中。
  - 简写：npm i <package-name> -S
  - npm install <package-name>，也可以，（在 npm 5 之前：必须手动指定 --save）

- npm install <package-name> --save-dev
  - 安装并添加包到 ``package.json`` 文件的 ``devDependencies`` 中。
  - 简写：npm i <package-name> -D

> ``devDependencies`` 开发依赖项，通常是开发的工具包（例如 ``webpack``、``Babel``），而 ``dependencies`` 则是与生产环境中的应用程序相关的包。

上面的方法都是安装包到本地文件夹下

- npm install -global <package-name>
  - 全局安装包。
  - 简写：npm i -g <package-name>

全局的位置到底在哪里？使用 ``npm root -g`` 命令会告知其在计算机上的确切位置。

安装指定版本的包

```bash
npm install <package-name>@<version>
npm install <package-name>@<version> --save
npm install <package-name>@<version> --save-dev
npm install <package-name>@<version> -g
```

```bash
# 指定下载express包的npm源
npm install express --registry https://registry.npm.taobao.org

# 配置 npm全局源
npm config set registry https://registry.npm.taobao.org
# 配置是否成功
npm config get registry

# 配置成功后，使用 cnpm 安装包
cnmp install <package-name>
```

全局安装和本地安装

通常，所有的软件包都应本地安装。本地每个项目都有自己的包依赖，（相同包不同版本等问题），如果全局安装包，那么所有项目都是使用的同一个版本的包，且全局的包会很多，更新包的时候就会影响其他项目包依赖。

但是某些软件包最好在全局安装，如：

- npm、yarn、cnpm、npm-check-updates
- vue-cli、create-react-app
- nrm、pm2
- mocha

### 更新

- npm update
 - 更新 ``package.json`` 文件中的包，package.json 包版本被改变，package-lock.json 文件会被新版本填充。
 - ``npm`` 会检查所有包是否有满足版本限制的更新版本

- npm update <package-name>
  - 更新指定包

- npm update -g

npm update，更新的是次版本、补丁版本，主版本是不会更新的

如果需要更新主版本，全局地安装 npm-check-updates 软件包

```bash
npm install -g npm-check-updates
# 下载成功后，运行
ncu -u
# 即可升级 package.json 文件的 dependencies 和 devDependencies 中的所有版本
# 此时只是升级了 package.json 文件中包的版本号而已
# 需要再次执行 npm update 来更新包
# 如果没有 node_modules，则需要再执行 npm install
```

## 卸载

```bash
# 既可以卸载dependencies中的包，也可以卸载devDependencies中的包
npm uninstall <package-name>

# 指定卸载dependencies中的包
npm uninstall --save <package-name>
npm uninstall -S <package-name>

# 指定卸载devDependencies中的包
npm uninstall --save-dev <package-name>
npm uninstall -D <package-name>

# 指定卸载全局包
npm uninstall --global <package-name>
npm uninstall -g <package-name>
```

## 运行任务

- npm run <task-name>

``package.json`` 文件中的 ``scripts``

```json
{
  "scripts": {
    "serve": "node src/index.js",
    "start": "webpack --progress --colors --config webpack.conf.js",
    "dev": "npm run start"
  }
}
```

这样做可以简化命令行任务。

使用 nvm 管理 Node.js 版本

如果 ``install`` 的包是可执行文件，可执行文件放到 ``node_modules/.bin/`` 中，我们要执行这个文件，使用命令 ``./node_modules/.bin/<package-name>``，更好的选择是使用npx执行，``npm``自5.2版本起就包含了 ``npx``，此时的命令 ``npx <package-name>``

================

使用语义版本控制作为版本编号，所有的版本都有 3 个数字：x.y.z，如 1.2.1

第一个数字是主版本。
第二个数字是次版本。
第三个数字是补丁版本。

当发布新的版本时，不能随心所欲地增加数字，还要遵循以下规则：

- 当进行不兼容的 API 更改时，则升级主版本。
- 当以向后兼容的方式添加功能时，则升级次版本。
- 当进行向后兼容的缺陷修复时，则升级补丁版本。

### Node.js 包运行器 npx

npx 是一个非常强大的命令，从 npm 的 5.2 版本（发布于 2017 年 7 月）开始可用。

npx 可以运行使用 Node.js 构建并通过 npm 仓库发布的代码。

运行 ``npx <commandname>`` 会自动地在项目的 node_modules 文件夹中找到命令的正确引用，而无需知道确切的路径，也不需要在全局和用户路径中安装软件包。

```bash
# 使用cowsay。执行该命令，会查找本地，然后再查找全局
npx cowsay "你好"

# 输出
 ______
< 你好 >
 ------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

npx node@10 -v #v10.18.1
npx node@12 -v #v12.14.1

npx 直接从 URL 运行任意代码片段
npx <url-xxxxx>
npx 
