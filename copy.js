const fs = require('fs-extra')

// With a callback:
fs.copy('../../.vimrc', './.vimrc', err => {
  if (err) return console.error(err)
  console.log('success!')
}) // copies file

