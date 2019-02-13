'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const PreparedScripts = require('./../src/PreparedScripts')

new DeepStrictEqualAssertion(
  new PreparedScripts(['./example/test/test.js']),
  ['node ./example/test/test.js']
).call()
