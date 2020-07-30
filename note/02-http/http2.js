const http = require('http')
const chalkAnimation = require('chalk-animation')

const hostname = '127.0.0.1', port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello Node.js')
})

server.listen(port, hostname, () => {
  // console.log(`服务运行在 http://${hostname}:${port}/`)
  
  chalkAnimation.rainbow(`服务运行在 http://${hostname}:${port}/`)
  // chalkAnimation.pulse(`服务运行在 http://${hostname}:${port}/`)
  // chalkAnimation.glitch(`服务运行在 http://${hostname}:${port}/`)
  // chalkAnimation.radar(`服务运行在 http://${hostname}:${port}/`)
  // chalkAnimation.neon(`服务运行在 http://${hostname}:${port}/`)
})