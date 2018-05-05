'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class ReadFilesOfDirectories extends AsyncObject {

  constructor(...filesFromDirs) {
    super(...filesFromDirs);
  }

  definedSyncCall() {
    return (...filesFromDirs) => {
      let files = [].concat(...filesFromDirs);
      return files;
    }
  }

}

module.exports = ReadFilesOfDirectories;