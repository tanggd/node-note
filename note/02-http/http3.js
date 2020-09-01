const http = require('http')

const options = {
  hostname: '10.12.107.48',
  port: 9080,
  path: '/xscommand/commandEnum/getStreetList',
  methods: 'get',
  agent: false  // 仅为此一个请求创建一个新代理。
}

const req = http.request(options, res => {
  console.log(res.statusCode)
  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', err => {
  console.error(err)
})

req.end()