var number = 123;
var number = 456;

var empty = {};

for (var i in empty) {
  if (empty.hasOwnProperty(i)) {
    console.log(number);
  }
}