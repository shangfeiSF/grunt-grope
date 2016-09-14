/*
 * iterator
 * http://jshint.com/docs/options/#iterator
 * This option suppresses warnings about the __iterator__ property.
 * */
function iterator() {
  function Xrange(range) {
    this.lower = range.lower;
    this.upper = range.upper;
  }

  Xrange.prototype.__iterator__ = function () {
    return new Xrange(this);
  };
  
  console.log(new Xrange(3, 5));
}

iterator();