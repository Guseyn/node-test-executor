const { ExecutedTests } = require('./index')

new ExecutedTests(
  './example/test/test.js', './example/test/dir2'
).after(
  new ExecutedTests(
    './example/test/dir1'
  )
).call() // or just new ExecutedTests('./example/test').call()
