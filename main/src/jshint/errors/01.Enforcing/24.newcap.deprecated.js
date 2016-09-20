/*
 * newcap
 * http://jshint.com/docs/options/#newcap
 * This option requires you to capitalize names of constructor functions.
 * */
function newcap() {
  // Warning: A constructor name should start with an uppercase letter if using 'greeting' rather than 'Greeting'
  function greeting(name) {
    this.name = name;
  }

  var greetingTom = new greeting('Tom');
  console.log(greetingTom instanceof greeting);

  function Goodbye(name) {
    this.name = name;
  }

  //Warning: Missing 'new' prefix when invoking a constructor if without new operator !
  var goodbyeTom = Goodbye('Tom');
  console.log(goodbyeTom instanceof Goodbye);
}

newcap();