// --globalstrict : using global strict mode is allowed when globalstrict is true
// 'use strict';
function main(argA, argB) {
  var t = 123;
  var t = 890;
  console.log(t);

  var obj = {}
  for (var y in obj) {
    console.log(t);
  }
  for (var y in obj) {
    console.log(t);
  }

  // --camelcase : if try to rename argA or argB using arg_a or arg_b, thus jshint will warn
  console.log(argA);
  console.log(argB);

  // --strict :  requires all functions to run in ECMAScript 5's strict mode
  // 'use strict';

  // --globals : some vars that are defined as global var
  console.log(someVar);

  // --unused & --undef : if commentize `var sum = cal(10, 20);`
  // thus `function cal(num1, num2){……}` will not be used and `sum` will be an undefined var
  function cal(num1, num2) {
    return num1 + num2;
  }

  var sum = cal(10, 20);
  console.log(sum);

  // --bitwise : boolean is the result of one XOR zero, so if use one ^ zero instead that boolean will not be effected
  // But bitwise: true means forbidden using bitwise operators, thus jshint will warn
  var one = 1;
  var zero = 0;
  var oneOrZero = (one + zero) % 2;
  // var boolean = one ^ zero;
  console.log(oneOrZero);

  // --curly : requires always put curly braces around blocks in loops and conditionals
  // otherwize jshint will warn when if(true) console.log('……')
  if (true) {
    console.log('put curly braces around blocks in loops and conditionals');
  } else {
    console.log('put curly braces around blocks in loops and conditionals');
  }

  // --eqeqeq : prohibits the use of == and != and in favor of === and !==
  // means type coercion in JavaScript is not support
  var third = 3;
  var thirdString = '3';
  if (third === thirdString) {
    console.log('use type coercion in JavaScript');
  }

  // --es3 : program need to adhere to ECMAScript 3 specification  when being executable in older browsers—such as Internet Explorer 6/7/8/9
  // if change booleanX to boolean with option es3 true, thus jshint will warn that boolean is a resserved word
  var booleanX = [1, 2, 3, 4, 5].join('|');
  console.log(booleanX);

  // --forin : requires all for-in loops to filter object's items, so generally safer to always filter inherited properties out
  // use hasOwnProperty to filter dog[key] belongs to the dog and was not inherited.
  var dog = {
    'name': 'lcuky',
    'age': 1
  };
  for (var key in dog) {
    if (dog.hasOwnProperty(key)) {
      console.log(key);
    }
  }

  // --asi : suppress warns about missing semicolons when option asi is true
  console.log('missing semicolon!');

  // --freeze : prohibits overwriting prototypes of native objects such as Array, Date and so on
  // Warning : Extending prototype of native object: 'Array' with freeze is true
  Array.prototype.count = function (value) {
    return this.length * value;
  };

  // --immed : prohibits the use of immediate function invocations without wrapping them in parentheses？
  // ( function(……){……} )(……) is ok!
  (function (data1, data2) {
    console.log(data1 + data2);
  })('hello', ' world');
  // ( function(……){……}(……)) is also ok!
  (function (data3, data4) {
    console.log(data3 + data4);
  }('hi', ' javascript'));

  // --indent : sets a specific tab width？
  // --latedef :  prohibits the use of a variable before it was defined
  // before();
  function before() {
    console.log('I like coding!');
  };
  before();

  // --newcap : requires  to capitalize names of constructor functions and the function should be used with  new operator !
  // Warning: A constructor name should start with an uppercase letter if using 'test' rather than 'Test'
  function Test(id, deps, factory) {
    this.id = id || null;
    this.deps = [].concat(deps);
    this.factory = factory || function () {
      };
    this.status = 0;
  }

  //Warning: Missing 'new' prefix when invoking a constructor if without new operator !
  var testObj = new Test('index', ['evnets', 'hight'], Array.prototype.sort);
  console.log(testObj instanceof Test);

  // -- noarg : prohibits the use of arguments.caller and arguments.callee
  function factorial(max) {
    if (max === 0) {
      return 1;
    } else {
      // return arguments.callee(max - 1);
      return factorial(max - 1);
    }
  }

  console.log(factorial(4));

  // --noempty :  warns when program has an empty block
  {
    console.log('noempty');
  }

  // --nonbsp : warns about 'non-breaking whitespace' characters？
  // --nonew : prohibits the use of constructor functions for side-effects.
  function Constor(id, deps) {
    this.id = id || 'index';
    this.deps = [].concat(deps);
  }

  // Warning: Do not use 'new' for side effects if without ' var constor = '
  var constor = new Constor('index', ['events', 'jquery']);
  console.log(constor);    // avoiding warning unused var


  // --plusplus : prohibits the use of unary increment and decrement operators
  // use ' counter ++ ' instead of ' counter += 1 ' will warn ' Unexpected use of '++' ' !
  var counter = 0;
  // console.log(counter ++);
  console.log(counter += 1);

  // --quotmark : true | single | double
  console.log('use single quotmark for test');
  // console.log("use double quotmark for test");

  // -- maxparams : set the max number of formal parameters allowed per function
  function paramsLength(arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
  }

  console.log(paramsLength(10, 20, 30));

  // --maxdepth : control how nested  blocks to be
  function outer() {
    if (Math.random() > 0.5) {       // nest 1
      if (Math.random() > 0.5) {     // nest 2
        console.log('lucky!');
        // if(Math.random() > 0.5){   // nest 3
        // console.log('so lucky!');
        // }
      }
    }
  }

  outer();

  // --maxstatements : set the max number of statements allowed per function
  function main() {
    // if set maxstatements to 2  will warning that main has too many statements
    var i = 1;
    var j = 2;
    return i + j;
  }

  console.log(main());

  // --maxcomplexity :  control cyclomatic complexity that measures the number of linearly independent paths through a program's source code.
  // change the value of maxcomplexity lower will get the warning of this jshint option

  // --maxlen : the maximum length of a line
  // change the value of maxlen lower will get the warning of this jshint option

  // --boss : using assignments where comparisons are expected in for / while / if is accepted

  // useage : for (var i = 0, len = people.length, person; person = people[i]; i += 1) { will warning
  // useage : (person = people[i]) will silence this error.
  var people = ['one', 'two', 'third'];
  for (var i = 0, len = people.length, person; (person = people[i]); i += 1) {
    console.log(person);
    console.log(len);
  }

  // --debug : if true means allow the debugger statements in program
  debugger;

  // --eqnull : if true means allow using '== null' comparisons
  var isnull = null;
  console.log(isnull == null);

  // --esnext : if true means allow using ECMAScript 6 specific syntax
  for (let p = 0; p < 2; p += 1) {
    console.log(p);
  }

  // --evil : The use of eval is discouraged but is allowed when evil is true
  eval(console.log('use eval !'));

  // --expr : use expressions where normally is expected to use assignments or function calls

  // --funcscope : the situation that declaring variables inside of control structures but accessing them later from the outside is allowed
  function func() {
    if (true) {
      var x = 0;
      console.log(x);
    }
    x = x + 1;
    console.log(x);
  }

  func();

  // --iterator : suppresses warnings about the __iterator__ property
  function Xrange(range) {
    this.lower = range.lower;
    this.upper = range.upper;
  }

  // if iterator is false then cli will console the warning below :
  // '__iterator__' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz)
  Xrange.prototype.__iterator__ = function () {
    return new Xrange(this);
  };
  console.log(new Xrange(3, 5));

  // --lastsemic : missing semicolons is ok only when it is omitted for the last statement in a one-line block
  // if lastsemic is fasle, program should use ' var name = 'Anton'; return name; ' to avoid warning, otherwise jshint will warning missing semicolons
  var cat = (function () {
    var name = 'Anton';
    return name
  }());
  console.log(cat);

  // --laxcomma : comma-first coding style is ok if laxcomma is true
  var master = {
    'name': 'wangwang'
    , 'age': 18
    , 'country': 'USA'
  };
  console.log(master);

  // --loopfunc : defining functions inside of loops will be allowed if loopfunc is true
  var orgArray = [];
  for (var g = 0; g < 10; g += 1) {
    orgArray[g] = function (m) {
      return g + m;
    };
  }
  console.log(orgArray[0](2));   // but all the function in orgArray is same because g is const 10 after executing for loop

  // --maxerr : set the maximum amount of warnings JSHint will produce before giving up and its default is 50
  // total warnings is 4: unused / missing semicolons / undef / plusplus
  // so if maxerr lower than 5, jshint will break off without giving all the warnings

  // --moz : useing Mozilla JavaScript extensions. Unless you develop specifically for the Firefox web browser you don't need this option.

  // --multistr : multi-line strings is allowed
  var text = 'Hello\
  World';
  console.log(text);

  // --notypeof : invalid typeof operator values is also ok which means right-side of ==/=== can not in the set of possible return values
  // Do not use this option unless you're absolutely sure you don't want these checks
  var fn = function () {
    console.log('this is a function!');
  };
  if (typeof fn === 'func') {
    console.log('this is a func?');
  }

  // --proto : suppresses warnings about the __proto__ property
  console.log(Number.__proto__ === Function.prototype);

  // --scripturl

  // --shadow : declaring a variable that had been already declared somewhere in the outer scope is ok
  function here() {
    var herex = 10;
    if (true) {
      var herex = 20;
    }
    return herex;
  };
  console.log(here());

  // --sub : using [] notation when it can be expressed in dot notation is accpeted
  var company = {
    'name': 'BABA',
    'size': 20000
  };
  console.log(company['name']);
  console.log(company.age);

  // -- supernew : suppresses warnings about "weird" constructions like new function () { ... } and new Object
  // Such constructions are sometimes used to produce singletons in JavaScript
  var singleton = new function () {
    var privateVar;
    this.set = function () {
      privateVar = 1;
      console.log('publicMethod');
    };
    this.get = function () {
      console.log('publicMethod2');
      console.log(privateVar);
    };
  };
  singleton.set();
  singleton.get();

  // --validthis : jshint will give a warning ' Possible strict violation. ' if validthis is false
  function strictFn(num) {
    'use strict';
    this.windowVar = num;
  };
  var testFn = strictFn(1024);
  console.log(testFn);

  // --noyield : generator functions with no yield statement is ok
  // function* and yield is available is ES6 or Mozilla JS extension, so should set esnext to true
  // if set noyield to false jshint will give a warning 'A generator function shall contain a yield statement.'
  function* TestYield() {
    console.log('TestYield');
    yield 1;
    yield 2;
  };
  var testYield = new TestYield();
  var test1 = testYield.next();
  var test2 = testYield.next();
  var test3 = testYield.next();
  console.log(test1, test2, test3);

  // --devel : defines globals that are usually used for logging poor-man's debugging: console, alert, etc

  // --browser : defines globals exposed by modern browsers
  console.log(document.getElementById);
  console.log(window.navigator);

  // --jquery : defines globals available program is running inside of the Node runtime environment
  var jq = $(document);
  console.log(jq);

  // --node : defines globals available program is running inside of the Node runtime environment
  var module = require('cluster');
  console.log(module);
  // --nonstandard : defines non-standard but widely adopted globals such as escape and unescape
  var url = 'www google com';
  var eurl = escape(url);
  console.log(unescape(eurl));
}

main('name', 'age')