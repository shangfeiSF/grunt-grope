/*
 * nocomma
 * http://jshint.com/docs/options/#nocomma
 * This option prohibits the use of the comma operator.
 * */
function nocomma() {
  var a, b = 1, c;

  return a + b + c;
}

nocomma();