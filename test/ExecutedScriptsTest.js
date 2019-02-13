'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const ExecutedScripts = require('./../src/ExecutedScripts')
const ExecutionTime = require('./../src/ExecutionTime');

new DeepStrictEqualAssertion(
	new ExecutedScripts(['node ./example/test/test'], new ExecutionTime()),
	['node ./example/test/test']
).call()
