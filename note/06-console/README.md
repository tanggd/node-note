# 笔记

## 主要内容

### console 模块

基本与浏览器的 ``console`` 对象相同

console.log()
....等方法

```javascript
console.log('我的%s已经%d岁了', '拉布拉多', 2)
```

- ``%s`` 格式化变量为字符串
- ``%d`` 格式化变量为数字
- ``%i`` 格式化变量为其整数部分
- ``%o`` 格式化变量为对象

``console.clear()``，清空控制台。

``console.count()``，对打印的字符串次数进行统计计数，并在其旁边打印出计数。

```js
console.count('我是谁？')
console.count('我是谁？')
console.count('我是谁？')
console.count('我就是我')
```

``console.trace()``，打印堆栈踪迹

```js
const f1 = () => console.trace()
const f2 = () => f1()
f2()
```

``console.time()`` 和 ``console.timeEnd()``，计算耗时

```js
const measure = cb => {
  console.time('计数')
  cb()
  console.timeEnd('计数')
}
measure(() => {
  new Array(100).fill(1).forEach((item, index) => {
    console.log(index)
  })
})
```

发现在浏览器上运行的耗时明显比node REPL的耗时少，有趣的现象。

```js
// 可以使用转义序列在控制台中为文本的输出着色。 转义序列是一组标识颜色的字符。
// https://gist.github.com/iamnewton/8754917
console.log('\x1b[33m%s\x1b[0m', '你好')
// 打印出黄色的 你好

// 使用第三方库，chalk，就比较简单了
const chalk = require('chalk')
console.log(chalk.yellow('你好'))

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
```

总结下console的其他方法
