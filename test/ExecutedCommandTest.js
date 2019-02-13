'use strict'

const StrictEqualAssertion = require('./../assert/StrictEqualAssertion')
const ExecutedCommand = require('./../src/ExecutedCommand')
const ExecutionTime = require('./../src/ExecutionTime')

new StrictEqualAssertion(
  new ExecutedCommand('node ./example/test/test', new ExecutionTime()),
  1
).call()

new StrictEqualAssertion(
  new ExecutedCommand('node example/test/dir1/dir2/test123', new ExecutionTime()),
  0
).call()
