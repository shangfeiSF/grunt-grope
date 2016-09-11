/*
 * bitwise
 * http://jshint.com/docs/options/#bitwise
 * This option prohibits the use of bitwise operators such as ^ (XOR), | (OR) and others.
 * */
function bitwise() {
  var one = 1;
  var zero = 0;

  var OR = one | zero;
  var AND = one & zero;
  var NOT = ~one;
  var XOR = one ^ zero;

  return OR + AND + NOT + XOR;
}

bitwise();