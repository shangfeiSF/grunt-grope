/*
 * shadow
 * http://jshint.com/docs/options/#shadow
 * This option suppresses warnings about variable shadowing.
 * i.e. declaring a variable that had been already declared somewhere in the outer scope.
 * It can assume one of the following values:
 * 'inner' ---- only check for variables defined in the same scope
 * 'outer' ---- all check for variables defined in outer scopes and in the same scope
 * false ---- same as inner
 * true ---- allow variable shadowing
 * */
function shadow_true() {
  if (Math.random() > 0.5) {
    var a = 'hello grunt!';
    var b = 'hello jshint';
  }
  console.log(b);
  return a;
}

shadow_true();