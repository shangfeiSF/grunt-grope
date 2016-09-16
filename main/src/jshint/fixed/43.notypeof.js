/*
 * notypeof
 * http://jshint.com/docs/options/#notypeof
 * This option suppresses warnings about invalid typeof operator values.
 * */
function notypeof() {
  var a = function () {
    return 'hello wolrd!';
  };

  return typeof a === 'function';
}

notypeof();