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
      return arguments.callee(max - 1);
    }
  }

  factorial(4);

  function test() {
    return arguments.caller;
  }

  function main() {
    return test();
  }

  main();
}

noarg();