/*
 * es5
 * http://jshint.com/docs/options/#es5
 * This option enables syntax first defined in the ECMAScript 5.1 specification.
 * */
function es5() {
  const obj = {
    meeting: 'hello world'
  };

  let indexs = [1, 2, 3];
  var {meeting} = obj;

  return indexs.map((index)=>(
    `${meeting} at times ${index}`
  ));
}

es5();