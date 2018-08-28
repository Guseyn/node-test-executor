'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const path = require('path');

class PreparedScripts extends AsyncObject {

  constructor(files) {
    super(files);
  }

  definedSyncCall() {
    return (files) => {
      let scripts = [];
      files.forEach(file => {
        if (path.extname(file).split('.')[1] === 'js') {
          scripts.push(`node ${file}`);
        }
      });
      return scripts;
    }
  }

}

module.exports = PreparedScripts;
