/*
 * expr
 * http://jshint.com/docs/options/#expr
 * This option suppresses warnings about the use of expressions where normally you would expect to see assignments or function calls.
 * */
function expr() {
  function test() {
    return 1;
  }

  test ? 1 : 0;
}

expr();