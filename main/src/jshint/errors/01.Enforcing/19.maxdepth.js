/*
 * maxdepth
 * http://jshint.com/docs/options/#maxdepth
 * This option lets you control how nested do you want your blocks to be.
 * */
function maxdepth(arg1, arg2) {
  if (arg1) {
    while (arg2 > 0) {
      var random = Math.random();

      if (random > 0.5) {
        return Math.random();
      } else {
        return null;
      }
    }
  }
}

maxdepth();