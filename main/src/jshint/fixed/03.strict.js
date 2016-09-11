/*
 * strict
 * http://jshint.com/docs/options/#strict
 * This option requires the code to run in ECMAScript 5's strict mode.
 * */
function strict(argA, ARG_B) {
  'use strict';

  console.log(argA);
  console.log(ARG_B);
}

strict('hello', 'world');