/*
 * browser
 * http://jshint.com/docs/options/#browser
 * This option defines globals exposed by modern browsers: all the way
 * from good old document and navigator
 * to the HTML5 FileReader
 * and other new developments in the browser world.
 * */
function browser() {
  var a = document.body;
  var b = window.navigator;
  var c = new FileReader();

  console.log('hello world!');

  return {
    a: a,
    b: b,
    c: c
  };
}

browser();