/*
 * eqnull
 * http://jshint.com/docs/options/#eqnull
 * This option suppresses warnings about == null comparisons.
 * */
function eqnull() {
  var a = 1, b = null, c;

  if (a == null || c != undefined) {
    return 1;
  }

  if (b != null || c == undefined) {
    return 2;
  }
}

eqnull();