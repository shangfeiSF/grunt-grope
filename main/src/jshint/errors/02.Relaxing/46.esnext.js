/*
 * esnext
 * http://jshint.com/docs/options/#esnext
 * This option is used to specify the ECMAScript version to which the code must adhere. It can assume one of the following values: 3, 5, 6
 * */
function esnext() {
  const obj = {
    meeting: 'hello world'
  };

  let indexs = [1, 2, 3];
  var {meeting} = obj;

  return indexs.map((index)=>(
    `${meeting} at times ${index}`
  ));
}

esnext();