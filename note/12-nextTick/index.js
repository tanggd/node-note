console.log(123)

setImmediate(() => {
  console.log('setImmediate')
})

// 疑问
// node环境
// setTimeout 正常打印是 'setTimeout-0' 然后 'setTimeout-2'
// 但是，在时间间隔极短的条件下（大概是小于3时），有时先打印'setTimeout-2'后打印'setTimeout-0'
setTimeout(() => {
  console.log('setTimeout-2')
}, 2.9)

setTimeout(() => {
  console.log('setTimeout-0')
}, 0)



process.nextTick(() => {
  console.log('nextTick')
})

function f() {
  return new Promise((resolve, reject) => {
    console.log('f')
    resolve(222)
  })
}

f().then(res => {
  console.log(res)
})

