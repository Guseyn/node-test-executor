'use strict'

const DeepStrictEqualAssertion = require('./../assert/DeepStrictEqualAssertion')
const ExecutedScripts = require('./../src/ExecutedScripts')
const ExecutionTime = require('./../src/ExecutionTime')

new DeepStrictEqualAssertion(
  new ExecutedScripts(['node ./example/test/test'], new ExecutionTime()),
  [ 1 ]
).call()
