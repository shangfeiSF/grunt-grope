/*
 * nocomma
 * http://jshint.com/docs/options/#nocomma
 * This option prohibits the use of the comma operator.
 * */
function nocomma() {
  var a;
  var b = 1;
  var c;

  return a + b + c;
}

nocomma();