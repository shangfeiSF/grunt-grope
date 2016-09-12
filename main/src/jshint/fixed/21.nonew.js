/*
 * nonew
 * http://jshint.com/docs/options/#nonew
 * This option prohibits the use of constructor functions for side-effects.
 * */
function nonew() {
  function Greeting(name) {
    this.name = name;
  }

  var greeting = new Greeting('Tom');

  return greeting;
}

nonew();