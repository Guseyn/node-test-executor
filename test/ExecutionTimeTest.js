'use strict'

const Assertion = require('./../assert/Assertion')
const ExecutionTime = require('./../src/ExecutionTime')

let executionTime = new ExecutionTime()
executionTime.update()

new Assertion(
  executionTime.delta >= 0
).call()

new Assertion(
  typeof executionTime.log('execution time: %d ms') === 'undefined'
).call()
