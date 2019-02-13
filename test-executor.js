const { ExecutedTests } = require('./index');

new ExecutedTests(
	'./test'
).call(); // or just new ExecutedTests('./example/test').call()
