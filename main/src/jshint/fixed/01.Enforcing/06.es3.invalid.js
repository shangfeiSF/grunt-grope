/*
 * es3
 * http://jshint.com/docs/options/#es3
 * This option tells JSHint that your code needs to adhere to ECMAScript 3 specification
 * */
function es3() {
  var array = [1, 2, 3];

  var result = [];

  for (var i = 0; i < array.length; i++) {
    result[i] = array[i] * 2;
  }

  return result;
}

es3();