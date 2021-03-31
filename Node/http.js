const http = require('http')

http.createServer((req, res)   => {
  res.writeHead('200')
  res.end(`
  <!DOCTYPE html>
    <html lang="utf-8">
      <head></head>
      <body>
        <div>我家小仙女</div>
      </body>
    </html>
  `)
}).listen(3000)