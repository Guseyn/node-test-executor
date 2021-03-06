'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class FinalMessage extends AsyncObject {
  constructor (executedTime, ...results) {
    super(executedTime, ...results)
  }

  syncCall () {
    return (executedTime, ...results) => {
      let successNumber = results.filter(result => {
        return result === 1
      }).length
      let failNumber = results.length - successNumber
      console.log('\n')
      if (successNumber !== 0) {
        console.log('\x1b[32m%s\x1b[0m', `${successNumber} test(s) ha(s|ve) passed successfully`)
      }
      if (failNumber !== 0) {
        console.log('\x1b[31m%s\x1b[0m', `${failNumber} test(s) ha(s|ve) failed`)
        console.log('\x1b[31m%s\x1b[0m', 'Process exited with code 1')
        process.exit(1)
      }
      executedTime.log('execution time: %d ms')
      return results
    }
  }
}

module.exports = FinalMessage
