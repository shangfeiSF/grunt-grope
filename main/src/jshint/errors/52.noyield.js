/*
 * noyield
 * http://jshint.com/docs/options/#noyield
 * This option suppresses warnings about generator functions with no `yield` statement in them.
 * */
function noyield() {
  function* test() {
    return 1;
  }
  var numbers = new test();
  var num1 = numbers.next();
  var num2 = numbers.next();
  var num3 = numbers.next();
  console.log(num1, num2, num3);
}

noyield();