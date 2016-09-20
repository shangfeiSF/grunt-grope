/*
 * scripturl
 * http://jshint.com/docs/options/#scripturl
 * This option suppresses warnings about the use of script-targeted URLs—such as `javascript: ... ...`
 * */
function scripturl() {
  var a = 'javascript:http://jshint.com/docs/options/#scripturl';

  return a;
}

scripturl();