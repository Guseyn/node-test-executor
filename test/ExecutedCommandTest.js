'use strict'

const { StrictEqualAssertion } = require('@cuties/assert')
const ExecutedCommand = require('./../src/ExecutedCommand')
const ExecutionTime = require('./../src/ExecutionTime');

new StrictEqualAssertion(
	new ExecutedCommand('node ./example/test/test', new ExecutionTime()),
	1
).call()
