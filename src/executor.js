const ReadFilesOfDirectoryRecursively = require('./ReadFilesOfDirectoryRecursively');
const ReadFilesOfDirectories = require('./ReadFilesOfDirectories');
const PreparedScripts = require('./PreparedScripts');
const ExecutedScripts = require('./ExecutedScripts');
const ExecutionTime = require('./ExecutionTime');

module.exports = (...dirs) => {
  let filesFromDirs = [];
  dirs.forEach(dir => {
    filesFromDirs.push(
      new ReadFilesOfDirectoryRecursively(dir)
    );
  });
  new ExecutedScripts(
    new PreparedScripts(
      new ReadFilesOfDirectories(...filesFromDirs)
    ), new ExecutionTime()
  ).call();
}
