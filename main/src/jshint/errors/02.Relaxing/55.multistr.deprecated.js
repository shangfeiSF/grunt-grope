/*
 * multistr
 * http://jshint.com/docs/options/#multistr
 * This option suppresses warnings about multi-line strings.
 * Multi-line strings can be dangerous in JavaScript
 * because all hell breaks loose
 * if you accidentally put a whitespace in
 * between the escape character (\) and a new line.
 * */
function multistr() {
  var a = 'hello \
    world';

  var b = 'hello \        grunt';

  // add a few of space after `\`
  var c = 'hello \
    jshint';

  return a + b + c;
}

multistr();