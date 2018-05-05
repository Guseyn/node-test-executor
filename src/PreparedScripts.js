'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class PreparedScripts extends AsyncObject {

  constructor(files) {
    super(files);
  }

  definedSyncCall() {
    return (files) => {
      let scripts = [];
      files.forEach(file => {
        scripts.push(`node ${file}`);
      });
      return scripts;
    }
  }

}

module.exports = PreparedScripts;
