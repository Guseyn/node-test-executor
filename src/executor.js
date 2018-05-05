const { ReadFilesOfDirectoryRecursively } = require('@guseyn/cutie-fs');
const ReadFilesOfDirectories = require('./ReadFilesOfDirectories');
const PreparedScripts = require('./PreparedScripts');
const ExecutedScripts = require('./ExecutedScripts');

module.exports = (...dirs) => {
  let filesFromDirs = [];
  dirs.forEach(dir => {
    filesFromDirs.push(new ReadFilesOfDirectoryRecursively(dir));
  });
  new ExecutedScripts(
    new PreparedScripts(
      new ReadFilesOfDirectories(...filesFromDirs)
    )
  ).call();
}
