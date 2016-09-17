/*
 * elision
 * http://jshint.com/docs/options/#elision
 * This option tells JSHint that your code uses ES3 array elision elements, or empty elements.
 * */
function elision() {
  var a = [1, , , 4, , , 7];

  return a;
}

elision();