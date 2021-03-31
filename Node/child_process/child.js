process.on('message', msg => {
  console.log('child:', msg)
  process.send('form child')
})