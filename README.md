# node-test-executor

[![NPM Version][npm-image]][npm-url]

Executes test scripts in the specified dirs.

# How to use

npm: npm i test-executor

```js
const executor = require('test-executor');

executor('./test/dir1', './test/dir2'); // or just executor('./test')

```
Output will be smth like this (example of case when one of the tests fail):

![gaa1](https://github.com/Guseyn/node-test-executor/blob/master/Screen%20Shot%202018-05-05%20at%2021.41.10.png)

[npm-image]: https://img.shields.io/npm/v/test-executor.svg
[npm-url]: https://npmjs.org/package/test-executor
