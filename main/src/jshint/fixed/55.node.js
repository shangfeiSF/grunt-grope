/*
 * node
 * http://jshint.com/docs/options/#node
 * This option defines globals available when your code is running inside of the Node runtime environment.
 * */
function node() {
  var fs = require('fs');
  var path = require('path');

  var files = fs.readdir(path.join(__dirname, 'main'));

  console.log(files);
}

node();