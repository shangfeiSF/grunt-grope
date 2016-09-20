/*
 * validthis
 * http://jshint.com/docs/options/#validthis
 * This option suppresses warnings about possible strict violations
 * when the code is running in strict mode and you use this in a non-constructor function.
 * */
function validthis() {
  function strictFn(version) {
    'use strict';
    this.version = version;
  }

  var version = strictFn('1.0');

  console.log(version);
}

validthis();