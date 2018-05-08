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

  onErrorAndResult(error, stdout, stderr) {
    let result = 1;
    if (!stderr) {
      console.log('\x1b[32m%s\x1b[0m', `${this.script.split('node ')[1]} has passed...`);
    }
    if (stdout.length !== 0) {
      console.log(stdout);
    }
    if (!error.isNull) {
      result = 0;
      console.log('\x1b[31m%s\x1b[0m', `${this.script.split('node ')[1]} has failed...`);
      console.log('\x1b[31m%s\x1b[0m', error);
    }
    return result;
  }

  continueAfterFail() {
    return true;
  }

}

module.exports = ExecutedCommand;
