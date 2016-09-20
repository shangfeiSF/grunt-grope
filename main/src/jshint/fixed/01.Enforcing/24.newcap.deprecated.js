/*
 * newcap
 * http://jshint.com/docs/options/#newcap
 * This option requires you to capitalize names of constructor functions.
 * */
function newcap() {
  function Greeting(name) {
    this.name = name;
  }

  var greetingTom = new Greeting('Tom');
  console.log(greetingTom instanceof greeting);

  function Goodbye(name) {
    this.name = name;
  }

  var goodbyeTom = new Goodbye('Tom');
  console.log(goodbyeTom instanceof Goodbye);
}

newcap();