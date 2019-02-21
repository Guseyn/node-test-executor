'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const ExecutedCommand = require('./ExecutedCommand')
const FinalMessage = require('./FinalMessage')

class CallbackForFinalMessage extends AsyncObject {
  constructor (callback, finalMessage) {
    super(callback, finalMessage)
  }

  syncCall () {
    return (callback, finalMessage) => {
      callback(finalMessage)
      return callback
    }
  }
}

// Represented result is final message
class ExecutedScripts extends AsyncObject {
  constructor (scripts, executedTime) {
    super(scripts, executedTime)
  }

  asyncCall () {
    return (scripts, executedTime, callback) => {
      let commands = []
      scripts.forEach(script => {
        commands.push(new ExecutedCommand(script, executedTime))
      })
      new CallbackForFinalMessage(
        callback,
        new FinalMessage(executedTime, ...commands)
      ).call()
    }
  }

  callbackWithError () {
    return false
  }
}

module.exports = ExecutedScripts
