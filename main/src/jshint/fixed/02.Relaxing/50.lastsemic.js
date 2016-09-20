/*
 * lastsemic
 * http://jshint.com/docs/options/#lastsemic
 * This option suppresses warnings about missing semicolons, but only when the semicolon is omitted for the last statement in a one-line block
 * */
function lastsemic() {
  // one-line block as `var name = (function() { return 'hello world!' }());`
  var name = (function() { return 'hello world!' }());

  return name;
}

lastsemic();