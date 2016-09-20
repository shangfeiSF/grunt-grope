/*
 * eqeqeq
 * http://jshint.com/docs/options/#eqeqeq
 * This options prohibits the use of == and != in favor of === and !==.
 * */
function eqeqeq() {
  var thirdNumber = 3;
  var thirdString = '3';

  if (thirdNumber === 3) {
    console.log('equal');
  }

  if (thirdNumber !== thirdString) {
    console.log('not equal');
  }
}

eqeqeq();