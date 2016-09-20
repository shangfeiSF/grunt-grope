/*
 * boss
 * http://jshint.com/docs/options/#boss
 * This option suppresses warnings about the use of assignments in cases where comparisons are expected in for / while / if
 * */
function boss() {
  var a;
  // Silence this error on a per-use basis by surrounding the assignment with `(……)`
  while ((a = 10)) {
    if (Math.random() > 0.5) {
      continue;
    } else {
      console.log('hello world!');
    }
    a -= 1;
  }

  var b;
  // Silence this error on a per-use basis by surrounding the assignment with `(……)`
  if ((b = 10)) {
    console.log('hello world!');
  }

  var list = ['one', 'two', 'third'];
  // Silence this error on a per-use basis by surrounding the assignment with `(……)`
  for (var i = 0, len = list.length, item; (item = list[i]); i += 1) {
    console.log(item);
    console.log(len);
  }
}

boss();