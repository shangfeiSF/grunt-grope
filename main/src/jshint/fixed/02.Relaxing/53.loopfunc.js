/*
 * loopfunc
 * http://jshint.com/docs/options/#loopfunc
 * This option suppresses warnings about functions inside of loops.
 * */
function loopfunc() {
  var funs = [];

  for (var index = 0; index < 10; index++) {
    (function (index) {
      funs[index] = function (extra) {
        return index + extra;
      };
    }(index));
  }

  funs[0](2); // Prints 2 not 12 beacuse the closure of Javascript
}

loopfunc();