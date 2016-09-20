/*
 * browserify
 * http://jshint.com/docs/options/#browserify
 * This option defines globals available when using the Browserify tool to build a project.
 * */
function browserify() {
  var _browserify = require('browserify');
  var b = _browserify();

  b.add('main.js');
  b.bundle().pipe(process.stdout);
}

browserify();