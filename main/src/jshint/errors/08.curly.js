/*
 * curly
 * http://jshint.com/docs/options/#curly
 * This option requires you to always put curly braces around blocks in loops and conditionals.
 * */
function curly() {
  var condition = Math.random();

  if (condition > 0.5)
    console.log('hello world!');
}

curly();