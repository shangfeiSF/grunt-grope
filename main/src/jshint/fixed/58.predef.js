/*
 * predef
 * http://jshint.com/docs/options/#predef
 * This option allows you to control which variables JSHint considers to be implicitly defined in the environment.
 * */
function predef() {
  var a = describe;
  var b = before;
  var c = after;

  return a + b + c;
}

predef();