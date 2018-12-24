'use strict'

const spawn = require('child_process').spawn

// represents 1 if it's ok or 0 if it fails
module.exports = (script, executedTime, callback) => {
  const node = spawn('node', [script], {
    stdio: [process.stdin, process.stdout, process.stderr]
  })
  node.on('close', (code) => {
    executedTime.update();
    if (code === 0) {
      console.log('\x1b[32m%s\x1b[0m', `${script} has passed...`);
      callback(1)
    } else {
      console.log('\x1b[31m%s\x1b[0m', `${script} has failed...`);
      callback(0)
    }
  })
}
