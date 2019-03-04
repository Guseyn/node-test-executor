# node-test-executor

<img src="https://github.com/Guseyn/logos/raw/master/test-executor.svg?sanitize=true">

[![NPM Version](https://img.shields.io/npm/v/test-executor.svg)](https://npmjs.org/package/test-executor)
[![Build Status](https://travis-ci.org/Guseyn/node-test-executor.svg?branch=master)](https://travis-ci.org/Guseyn/node-test-executor)
[![codecov](https://codecov.io/gh/Guseyn/node-test-executor/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/node-test-executor)

Executes test scripts and directories of test scripts. It's based on [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Install
`npm i test-executor`

## How to use

```js
const { ExecutedTests } = require('test-executor')

new ExecutedTests(
	'./test/test.js', './test/dir1', './test/dir2'
).call() // or just new ExecutedTests('./test').call()

```
Output will be smth like this (example of case when one of the tests fails):

![gaa1](https://github.com/Guseyn/node-test-executor/blob/master/screen.png)

## Test
`npm run test`

## Build
`npm run build`

## Run example
`npm run example`
