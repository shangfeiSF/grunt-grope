/*
 * proto
 * http://jshint.com/docs/options/#proto
 * This option suppresses warnings about the __proto__ property.
 * */
function proto() {
  var a = (String.__proto__ === Function.prototype);

  String.__proto__ = function (name) {
    return 'hello ' + name;
  };

  return a;
}

proto();