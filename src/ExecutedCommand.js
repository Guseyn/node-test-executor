'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const { exec } = require('child_process');

class ExecutedCommand extends AsyncObject {

  constructor(script) {
    super(script);
  }

  definedAsyncCall() {
    return (script, callback) => {
      this.script = script;
      exec(script, callback);
    }
  }

  onError(error) {
    console.log('\x1b[31m%s\x1b[0m', `${this.script.split('node ')[1]} has failed...`);
    console.log('\x1b[31m%s\x1b[0m', error);
    return 0;
  }

  onResult(stdout, stderr) {
    if (!stderr) {
      console.log('\x1b[32m%s\x1b[0m', `${this.script.split('node ')[1]} has passed...`);
    }
    return 1;
  }

  continueAfterFail() {
    return true;
  }

}

module.exports = ExecutedCommand;
