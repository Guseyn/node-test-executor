'use strict'

const DeepStrictEqualAssertion = require('./../assert/DeepStrictEqualAssertion')
const PreparedScripts = require('./../src/PreparedScripts')

new DeepStrictEqualAssertion(
  new PreparedScripts(['./example/test/test.js', './example/test/test.txt']),
  ['node ./example/test/test.js']
).call()
