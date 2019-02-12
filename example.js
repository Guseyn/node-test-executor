const { ExecutedTests } = require('./index');

new ExecutedTests(
	'./test/test.js', './test/dir1', './test/dir2'
).call(); // or just new ExecutedTests('./test').call()
