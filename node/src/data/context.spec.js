const assert = require('chai').assert;
const config = require('../config.js');
const context = require('./context.js');

describe("module: context", () => {
  describe("provides access to database crud operations;", () => {

    it("can get a connection to the database", (done) => {
      context.get(config).then((value) => {
        done();
      });  
    });
  });
});
