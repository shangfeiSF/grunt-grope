/*
 * evil
 * http://jshint.com/docs/options/#evil
 * This option suppresses warnings about the use of eval.
 * */
function evil() {
  eval("console.log('use eval !')");
}

evil();