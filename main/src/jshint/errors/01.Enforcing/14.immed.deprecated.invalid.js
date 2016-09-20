/*
 * immed
 * http://jshint.com/docs/options/#immed
 * This option prohibits the use of immediate function invocations without wrapping them in parentheses.
 * */
function immed() {
  // ( function(……){……} )(……)
  (function (msg1, msg2) {
    console.log(msg1 + msg2);
  })('hello', ' world');
}

immed();