/*
 * shadow
 * http://jshint.com/docs/options/#shadow
 * This option suppresses warnings about variable shadowing.
 * i.e. declaring a variable that had been already declared somewhere in the outer scope.
 * It can assume one of the following values:
 * 'inner' ---- check for variables defined in the same scope only
 * 'outer' ---- check for variables defined in outer scopes as well
 * false ---- same as inner
 * true ---- allow variable shadowing
 * */
function shadow_outer() {
  var a = 'hello world!';
  if (Math.random() > 0.5) {
    a = 'hello grunt!';
    var b = 'hello jshint';
    console.log(b);
  }
  return a;
}

shadow_outer();