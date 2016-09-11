/*
 * undef
 * http://jshint.com/docs/options/#undef
 * This option prohibits the use of explicitly undeclared variables.
 * */
function undef(argA, ARG_B) {
  var localB = 2;

  return argA + localB;
}

undef(1, 2);