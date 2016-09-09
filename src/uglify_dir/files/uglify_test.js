concat_test_1_1()
function concat_test_1_1 (arg_1, arg_2){
  // all console  will be dropped by option --- drop_console: true
  console.log("hello world")

  var obj_without_space_after_quote = {
    number_1:1024,
    number_2:2048,
    number_3:4096
  }
  var obj ={
    string_1:  "hello",
    string_2:  "world"
  }
  var pro_name = 'world'
  // obj['hello'] will be optimized by option --- properties: true
  // string_1 and string_2 is unused var, so there var will be optimized by option --- unused: true
  var string_1 = obj['hello']
  var string_2 = obj[pro_name]
  var string_3 = 'test'
  if(string_3 != 'test'){
    try{
      var cal_result_is = cal(10, 20, 2)
    }catch(e){
      throw new Error({
        message: e
      })
    }
  }
  // all comments will be dropped by option -- drop_debugger: true
  // DEBUG will replace by optiopn --- global_defs = {DEBUG: "global_defs"}
  if(DEBUG){
    var result = []
    for(var k = 0; k < 10; k ++){
      result.push(k)
    }
  }
  // constant expressions will be evaluated by option --- evaluate: true
  if(("hello"+" world").length > 10){
    result.pop()
  }
  // if-else if-else will be optimized by option --- conditionals: true
  if(result.length > 10){
    result.pop()
  }else if(result.length > 5){
    result.shift()
  }else{
    result= []
  }
  // while(……){……} will be optimized by option --- loops: true
  var count = 10
  while(count > 5){
    count --
  }
  // comparison expression will be optimized by option --- comparisons: true
  if( !(count < 10) < !(count > 5)){
    count = true
  }
  debugger
  // function declaration will be raised by option --- hoist_funs: true
  // var declaration will be raised by option --- hoist_vars: true
  function cal(arg1, agr2, arg3){
    return (arg1 + agr2) * arg3
  }
  if(obj_without_space_after_quote){
    return obj_without_space_after_quote
  }else if(obj){
    return obj
  }else{
    return undefined
  }
  // the code below is unreachable, so can be ignored by option --- dead_code: true
  var array = new Array()
  for(var i = 0; i < 10; i ++){
    array[i] = i % 2 == 0 ? 'odd':'even'
  }
}
