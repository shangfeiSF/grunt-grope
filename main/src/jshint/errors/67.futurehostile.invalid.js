/*
 * futurehostile
 * http://jshint.com/docs/options/#futurehostile
 * This option enables warnings about the use of identifiers which are defined in future versions of JavaScript.
 * */
function futurehostile() {
  var super = 'test';

  return super;
}

futurehostile();