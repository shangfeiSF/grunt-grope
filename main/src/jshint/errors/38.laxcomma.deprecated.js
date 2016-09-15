/*
 * laxcomma
 * http://jshint.com/docs/options/#laxcomma
 * This option suppresses warnings about comma-first coding style
 * */
function laxcomma() {
  var a = {
    'msg': 'hello world!'
    , 'count': 18
    , 'timestamp': '2016'
  };
  console.log(a);
}

laxcomma();