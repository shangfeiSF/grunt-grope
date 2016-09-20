/*
 * noarg
 * http://jshint.com/docs/options/#noarg
 * This option prohibits the use of arguments.caller and arguments.callee.
 * */
function noarg() {
  function factorial(max) {
    if (max === 0) {
      return 1;
    } else {
      return factorial(max - 1);
    }
  }

  factorial(4);

  function test() {
    return test.caller;
  }

  function main() {
    return test();
  }

  main();
}

noarg();