'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const ExecutionTime = require('./../src/ExecutionTime')
const FinalMessage = require('./../src/FinalMessage')

new DeepStrictEqualAssertion(
  new FinalMessage(
    new ExecutionTime(), 1, 1, 1
  ), [1, 1, 1]
).call()
