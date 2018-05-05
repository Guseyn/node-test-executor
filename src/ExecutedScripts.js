'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const ExecutedCommand = require('./ExecutedCommand');
const FinalMessage = require('./FinalMessage');

class ExecutedScripts extends AsyncObject {

  constructor(scripts) {
    super(scripts);
  }

  definedSyncCall() {
    return (scripts) => {
      let commands = [];
      scripts.forEach(script => {
        commands.push(new ExecutedCommand(script));
      });
      new FinalMessage(...commands).call();
      return scripts;
    }
  }

}

module.exports = ExecutedScripts;
