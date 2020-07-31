const readlineSync = require('readline-sync')

const userName = readlineSync.question('用户名? ', {
  encoding: 'utf8',
  defaultInput: 'xiaoming',
  // trueValue: ['1', '2'],
  // falseValue: ['no', 'nah', 'nope']
})
console.log(userName)

const pw = readlineSync.question('密码? ', {
  encoding: 'utf8',
  hideEchoBack: true, // The typed text on screen is hidden by `*` (default).
  limit(input) {
    return input.length >= 6 && input.length <= 8
  },
  limitMessage: '密码要求6-8位数字'
})
console.log(pw)

// 使用时遇到的问题记录
// cmd 运行改js
// 中文出现乱码
// 解决：把cmd的unicode改成utf8
// cmd 命令chcp，输出 936
// chcp 65001，即可改成utf8
// 退出cmd后，就又变成936了
