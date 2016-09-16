/*
 * sub
 * http://jshint.com/docs/options/#sub
 * This option suppresses warnings about using [] notation when it can be expressed in dot notation.
 * */
function sub() {
  var obj = {
    a: 'hello world!',
    b: 2016
  };
  console.log(obj['a']);
  console.log(obj.b);
}

sub();