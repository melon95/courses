const cp = require('child_process')

const child_process = cp.fork(__dirname + '/child.js')

child_process.on('message', msg => {
  console.log('parent:', msg)
})

child_process.send('form parent')