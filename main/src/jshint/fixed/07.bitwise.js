/*
 * bitwise
 * http://jshint.com/docs/options/#bitwise
 * This option prohibits the use of bitwise operators such as ^ (XOR), | (OR) and others.
 * */
function bitwise() {
  var one = 1;
  var zero = 0;

  var OR = 1 - (1 - one) * (1 - zero);
  var AND = one * zero;
  var NOT = -(one + 1);
  var XOR = (one + zero) % 2;

  return OR + AND + NOT + XOR;
}

bitwise();