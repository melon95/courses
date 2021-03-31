const cluster = require('cluster')
console.log()
if (cluster.isMaster) {
  for (let i = 0, len = require('os').cpus().length; i < len / 2; i++) {
    cluster.fork()
  }
} else {
  require('./app')
}



