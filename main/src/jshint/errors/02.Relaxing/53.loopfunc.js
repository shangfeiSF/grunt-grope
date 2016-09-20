/*
 * loopfunc
 * http://jshint.com/docs/options/#loopfunc
 * This option suppresses warnings about functions inside of loops.
 * */
function loopfunc() {
  var funs = [];

  for (var index = 0; index < 10; index++) {
    funs[index] = function (extra) {
      return index + extra;
    };
  }

  funs[0](2); // Prints 12 instead of 2
}

loopfunc();