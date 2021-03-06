'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class ReadFilesOfDirectories extends AsyncObject {
  constructor (...filesFromDirs) {
    super(...filesFromDirs)
  }

  syncCall () {
    return (...filesFromDirs) => {
      let files = [].concat(...filesFromDirs)
      return files
    }
  }
}

module.exports = ReadFilesOfDirectories
