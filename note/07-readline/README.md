# readline模块

## 主要内容

cli 基本都有命令行接受用户输入的功能，具有灵活的可交互性。

readline模块便可实现这样的功能

```js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`你叫什么名字?`, name => {
  console.log(`你好 ${name}!`)
  readline.close()
})
```

对于询问密码，为了安全性要求不显示用户输入的密码，而是直接显示 *
可以使用第三方库 [readline-sync](https://www.npmjs.com/package/readline-sync)
会出现乱码问题

第三方库 inquirer，提供了更完整、更抽象的解决方案，包括刚刚说的密码问题，没有出现乱码问题
