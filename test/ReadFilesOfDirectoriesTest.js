'use strict'

const { AsyncObject } = require('@cuties/cutie');
const { DeepStrictEqualAssertion } = require('@cuties/assert');
const ReadFilesOfDirectories = require('./../src/ReadFilesOfDirectories');

new DeepStrictEqualAssertion(
  new ReadFilesOfDirectories(
    'example/test/dir1/dir2/simple-file.txt',
    'example/test/dir1/dir2/test121.js',
    'example/test/dir1/dir2/test122.js',
    'example/test/dir1/dir2/test123.js',
    'example/test/dir1/simple-file.txt'
  ),
  [ 'example/test/dir1/dir2/simple-file.txt',
    'example/test/dir1/dir2/test121.js',
    'example/test/dir1/dir2/test122.js',
    'example/test/dir1/dir2/test123.js',
    'example/test/dir1/simple-file.txt' ]
).call();
