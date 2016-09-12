/*
 * freeze
 * http://jshint.com/docs/options/#freeze
 * This options prohibits overwriting prototypes of native objects such as Array, Date and so on.
 * */
function freeze() {
  Array.prototype.double = function () {
    return this.length * 2;
  };
  Date.prototype.hello = function () {
    return 'Hello Date ' + this.getDate();
  };
}

freeze();