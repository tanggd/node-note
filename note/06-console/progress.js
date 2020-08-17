// 第三方库 progress
// 创建进度条
// 就像yarn install 时的进度条一样
// 更多用法见 npm
const ProgressBar = require('progress')

const total = 100
const bar = new ProgressBar('progress:[:bar]', {
  // complete: '$',
  // incomplete: ' ',
  total: total
})

const f = () => {
  const timer = setInterval(() => {
    bar.tick()
    // bar.tick(5) // 可传参数，直接跑5格
    if (bar.complete) {
      clearInterval(timer)
    }
  }, 500)
}

f()
