/*
 * laxbreak
 * http://jshint.com/docs/options/#laxbreak
 * This option suppresses most of the warnings about possibly unsafe line breakings in your code.
 * It doesn't suppress warnings about comma-first coding style.
 * To suppress those you have to use laxcomma.
 * */
function laxbreak() {
  var a = {
    'msg': 'hello world!'
    , 'count': 18
    , 'timestamp': '2016'
  };
  console.log(a);

  var b = 'hello'
    + ' world';
  console.log(b);
}

laxbreak();