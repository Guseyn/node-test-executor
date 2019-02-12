# node-test-executor

[![NPM Version][npm-image]][npm-url]

Executes test scripts and directories of test scripts.

# How to use

npm: npm i test-executor

```js
const { ExecutedTests } = require('test-executor')

new ExecutedTests(
	'./test/test.js', './test/dir1', './test/dir2'
).call() // or just new ExecutedTests('./test').call()


```
Output will be smth like this (example of case when one of the tests fails):

![gaa1](https://github.com/Guseyn/node-test-executor/blob/master/screen.png)

[npm-image]: https://img.shields.io/npm/v/test-executor.svg
[npm-url]: https://npmjs.org/package/test-executor
