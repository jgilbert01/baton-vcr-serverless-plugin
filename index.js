'use strict';

const aws = require('aws-sdk');

class ServerlessVcrReplay {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      'before:offline:start:init': this.initReplay.bind(this),
    };
  }

  initReplay() {
    const replay = require('baton-vcr-replay-for-aws-sdk');
    this.serverless.cli.log(`Replay mode = ${replay.mode}`);

    aws.config.update({
      region: this.options.region,
    });
  }
}

module.exports = ServerlessVcrReplay;


// TODO int mocks & adorn
