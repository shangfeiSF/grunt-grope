/*
 * globals
 * http://jshint.com/docs/options/#globals
 * This option can be used to specify a white list of global variables that are not formally defined in the source code.
 * This is most useful when combined with the undef option in order to suppress warnings for project-specific global variables.
 * (1) Setting an entry to true enables reading and writing to that variable.
 * (2) Setting it to false will trigger JSHint to consider that variable read-only.
 * */
function globals() {
  someVar = 1;
  var test = someVar + 1;
  console.log(someVar);
  console.log(test);
}

globals();
