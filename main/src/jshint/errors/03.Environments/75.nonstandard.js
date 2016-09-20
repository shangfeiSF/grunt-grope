/*
 * nonstandard
 * http://jshint.com/docs/options/#nonstandard
 * This option defines non-standard but widely adopted globals such as `escape` and `unescape`.
 * */
function nonstandard() {
  var url = 'https://github.com/shangfeiSF';
  var eurl = escape(url);
  console.log(unescape(eurl));
}

nonstandard();