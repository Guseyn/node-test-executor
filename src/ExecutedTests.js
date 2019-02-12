'use strict'

const ReadFilesOfDirectoryRecursively = require('./ReadFilesOfDirectoryRecursively');
const ReadFilesOfDirectories = require('./ReadFilesOfDirectories');
const PreparedScripts = require('./PreparedScripts');
const ExecutedScripts = require('./ExecutedScripts');
const ExecutionTime = require('./ExecutionTime');

class ExecutedTests {
  constructor(...dirs) {
    let filesFromDirs = [];
    dirs.forEach(dir => {
      filesFromDirs.push(
        new ReadFilesOfDirectoryRecursively(dir)
      );
    });
    return new ExecutedScripts(
      new PreparedScripts(
        new ReadFilesOfDirectories(...filesFromDirs)
      ), new ExecutionTime()
    );
  }
}

module.exports = ExecutedTests
