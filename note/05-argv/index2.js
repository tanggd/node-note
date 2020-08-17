// 使用 minimist 库处理参数
// node index2.js --name=tang --age=18 --isDev
// 注意参数要带 -- 标识
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

// 执行上面的命令
// 输出 args
// { _: [], name: 'tang', age: 18, isDev: true }