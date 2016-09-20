/*
 * maxdepth
 * http://jshint.com/docs/options/#maxdepth
 * This option lets you control how nested do you want your blocks to be.
 * */
function maxdepth(arg1, arg2) {
  if (arg1) {
    while (arg2 > 0) {
      var random = Math.random();
      
      return random > 0.5 ? Math.random() : null;
    }
  }
}

maxdepth();