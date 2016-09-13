/*
 * maxcomplexity
 * http://jshint.com/docs/options/#maxcomplexity
 * This option lets you control cyclomatic complexity throughout your code.
 * Cyclomatic complexity measures the number of linearly independent paths through a program's source code.
 * https://en.wikipedia.org/wiki/Cyclomatic_complexity
 * */
function maxcomplexity() {
  function c1() {
    return Math.random();
  }

  function c2() {
    return Math.random();
  }

  function fn1() {
    return 1;
  }

  function fn2() {
    return 2;
  }

  function fn3() {
    return 3;
  }

  function fn4() {
    return 4;
  }

  var r1 = 0, r2 = 0;

  if (c1() > 0.5) {
    r1 = fn1();
  }
  else {
    r1 = fn2();
  }

  if (c2() < 0.5) {
    r2 = fn3();
  }
  else {
    r2 = fn4();
  }

  return r1 + r2;
}

maxcomplexity();