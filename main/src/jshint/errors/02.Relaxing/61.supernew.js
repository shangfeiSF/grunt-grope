/*
 * supernew
 * http://jshint.com/docs/options/#supernew
 * This option suppresses warnings about "weird" constructions like `new function () { ... }` and `new Object`
 * */
function supernew() {
  var fn = new function () {
    this.a = new Object();
    this.a.version = '1.0';
    this.b = function () {
    };
  }();
  fn.b();
}

supernew();