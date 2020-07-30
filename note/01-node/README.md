# 笔记

## 主要内容

### ``Node.js`` 是什么

借用官网的2句话：

> ``Node.js`` 是一个基于 ``Chrome V8`` 引擎的 ``JavaScript`` 运行时。
> 1

### ``Node.js`` 的特点

+ ``Node.js`` 应用程序运行于单个进程中，无需为每个请求创建新的线程。

### ``Node.js`` 的应用

+ npm
+ 前端工具：webpack
+ 等

### ``Node.js`` 的安装

官网：xxx

### ``Node.js`` 的管理

``nvm`` 可以轻松地切换 Node.js 版本，也可以安装新版本用以尝试并且当出现问题时轻松地回滚。

``nvm`` 地址：[https://github.com/creationix/nvm](https://github.com/creationix/nvm)

## Node.js 与浏览器的区别

+ 均使用 ``JavaScript`` 作为编程语言
+ ``Node.js`` 没有 ``window``、``document``等对象
+ ``Node.js`` 有一些模块系统，如file模块，浏览器是没有的
+ ``Node.js`` 使用的 ``CommonJS`` 模块系统，浏览器用的 ``ES`` 模块标准
