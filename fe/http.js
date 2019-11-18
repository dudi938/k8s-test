const http = require('http')

exports.httpRequest = function(type, url, port,  path) {

    const options = {
        hostname: url,
        port: port,
        path: path,
        method: type
      }
      return new Promise((reslove, reject) => {
        const req = http.get(options, res => {
            console.log(`statusCode: ${res.statusCode}`)
          
            res.on('data', d => {
              process.stdout.write(d)
              req.end()
              reslove(d)
            })
          })
          
          req.on('error', error => {
            req.end()
            reject(error)
          })
      })  
}


