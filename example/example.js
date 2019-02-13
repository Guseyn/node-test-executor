const { ExecutedTests } = require('./../index')

new ExecutedTests(
	'./example/test/test.js', './example/test/dir1', './example/test/dir2'
).call() // or just new ExecutedTests('./example/test').call()
