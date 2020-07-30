// Node.js 的 process 核心模块提供了 env 属性，
// 该属性承载了在启动进程时设置的所有环境变量。

// 设置环境变量
process.env.NODE_ENV = 'development'
// process.env.NODE_ENV = 'production'

console.log(process.env.NODE_ENV)