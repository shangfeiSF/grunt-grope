/*
 * es5
 * http://jshint.com/docs/options/#es5
 * This option enables syntax first defined in the ECMAScript 5.1 specification.
 * */
function es5() {
  var obj = {
    meeting: 'hello world'
  };

  var indexs = [1, 2, 3];
  var meeting = obj.meeting;

  return indexs.map(function (index) {
    return meeting + ' at times ' + index;
  });
}

es5();