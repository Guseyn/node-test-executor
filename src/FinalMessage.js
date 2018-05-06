'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class FinalMessage extends AsyncObject {

  constructor(...results) {
    super(...results);
  }

  definedSyncCall() {
    return (...results) => {
      let successNumber = results.filter(result => {
        return result === 1
      }).length;
      let failNumber = results.length - successNumber;
      console.log('\n');
      if (successNumber !== 0) {
        console.log('\x1b[32m%s\x1b[0m', `${successNumber} test(s) ha(s|ve) passed successfully`);
      }
      if (failNumber !== 0) {
        console.log('\x1b[31m%s\x1b[0m', `${failNumber} test(s) ha(s|ve) failed`);
      }
      return results;
    }
  }

}

module.exports = FinalMessage;
