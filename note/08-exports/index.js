// 第一种方式
const data = require('./data')
console.log(data)

// 第二种方式
const info= require('./info')
console.log(info)

// 2种方式
// module.exports = data
// exports.age = 1818
// 前者公开了它指向的对象。 
// 后者公开了它指向的对象的属性。