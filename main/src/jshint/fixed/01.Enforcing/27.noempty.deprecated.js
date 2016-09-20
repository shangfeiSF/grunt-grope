/*
 * noempty
 * http://jshint.com/docs/options/#noempty
 * This option warns when you have an empty block in your code.
 * */
function noempty() {
  {
    console.log('hello world!');
  }
  function none() {

  }

  none();
}

noempty();