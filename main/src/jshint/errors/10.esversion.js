/*
 * esversion
 * http://jshint.com/docs/options/#esversion
 * This option is used to specify the ECMAScript version to which the code must adhere. It can assume one of the following values: 3, 5, 6
 * */
/*
 * es3/es5/esnext
 * http://jshint.com/docs/options/#es3
 * http://jshint.com/docs/options/#es5
 * http://jshint.com/docs/options/#esnext
 * These options is the older options of esversion: 3/5/6, but no supported by grunt-contrib-jshint
 * */
function esversion() {
  const obj = {
    meeting: 'hello world'
  };

  let indexs = [1, 2, 3];
  var {meeting} = obj;

  return indexs.map((index)=>(
    `${meeting} at times ${index}`
  ));
}

esversion();