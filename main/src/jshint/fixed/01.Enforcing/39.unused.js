/*
 * unused
 * http://jshint.com/docs/options/#unused
 * This option warns when you define and never use your variables.
 * */
function unused(argA, ARG_B) {
  var localA, localB = 2;

  return argA + localB + ARG_B + localA;
}

unused(1, 2);