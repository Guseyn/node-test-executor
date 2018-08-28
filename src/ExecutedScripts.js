'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const ExecutedCommand = require('./ExecutedCommand');
const FinalMessage = require('./FinalMessage');

class ExecutedScripts extends AsyncObject {

  constructor(scripts, executedTime) {
    super(scripts, executedTime);
  }

  definedSyncCall() {
    return (scripts, executedTime) => {
      let commands = [];
      scripts.forEach(script => {
        commands.push(new ExecutedCommand(script, executedTime));
      });
      new FinalMessage(executedTime, ...commands).call();
      return scripts;
    }
  }

}

module.exports = ExecutedScripts;
