/*
 * qunit
 * http://jshint.com/docs/options/#qunit
 * This option defines globals exposed by the QUnit unit testing framework.
 * */
function qunit() {
  QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
  });
}

qunit();