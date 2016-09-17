/*
 * mocha
 * http://jshint.com/docs/options/#mocha
 * This option defines globals exposed by the "BDD" and "TDD" UIs of the Mocha unit testing framework.
 * */
function mocha() {
  var assert = require('assert');

  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal(-1, [1, 2, 3].indexOf(4));
      });
    });
  });
}

mocha();