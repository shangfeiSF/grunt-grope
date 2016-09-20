/*
 * plusplus
 * http://jshint.com/docs/options/#plusplus
 * This option prohibits the use of unary increment and decrement operators.
 * */
function plusplus() {
  var counter = 1;
  counter += 1;
  counter -= 1;

  return counter;
}

plusplus();