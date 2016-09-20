/*
 * funcscope
 * http://jshint.com/docs/options/#funcscope
 * This option suppresses warnings about declaring variables inside of control structures while accessing them later from the outside.
 * */
function funcscope() {
  var condition = 1;

  if (condition > 0.5) {
    var x = 0;
  }

  var y = x + 1;

  return y;
}

funcscope();