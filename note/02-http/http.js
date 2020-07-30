const http = require('http')

const hostname = '127.0.0.1', port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello Node.js')
})

server.listen(port, hostname, () => {
  console.log(`服务运行在 http://${hostname}:${port}/`)
})

