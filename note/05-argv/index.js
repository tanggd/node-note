// node index.js
console.log(process.argv)
// 打印出一个数组，有2项
// 分别是：node.exe路径、index.js文件路径

// node index.js aaa bbb ccc=123
// 说明：
// 第一个参数，node命令
// 第二个参数，文件路径
// 第三个参数以及后面的参数，就是我们可以传入的参数
// 用途：写不同的命令，传不同参数，做对应的事情
// 参数在 process.argv 数组中解析

// node index.js name=tang age=18 666
process.argv.slice(2).forEach((item, index) => {
  console.log(item, index)
})