/*
 * withstmt
 * http://jshint.com/docs/options/#withstmt
 * This option suppresses warnings about the use of the with statement.
 * */
function withstmt() {
  var a = {
    version: {}
  };

  a.version.first = 1;
  a.version.second = 2;

  var b = a.version;

  b.first = 'hello';
  b.second = 'world';
}

withstmt();