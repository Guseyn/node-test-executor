'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class FinalMessage extends AsyncObject {

  constructor(...results) {
    super(...results);
  }

  definedSyncCall() {
    return (...results) => {
      console.log('\x1b[32m%s\x1b[0m', `${results.length} tests have passed successfully\n SUCCESS`);
      return;
    }
  }

}

module.exports = FinalMessage;
