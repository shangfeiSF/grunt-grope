module.exports = {
  demo: {
    both: {
      unused: true, // 不允许出现未使的情况

      asi: false, // 不可以缺省语句结尾的分号

      forin: true, // for-in中要hasOwnProperty过滤掉继承来的属性
    }
  },
  camelcase: {
    both: {
      camelcase: true, // 要求驼峰式命名
    }
  },
  strict: {
    both: {
      strict: true // 要求全部函数都使用ES5的strict mode
    }
  },
  globals: {
    errors: {
      devel: true, // 允许出现console, alert等

      undef: true, // 不允许出现未定义的情况

      globals: {
        someVar: false // 不可以自定义全局变量
      }
    },
    fixed: {
      devel: true, // 允许出现console, alert等

      undef: true, // 不允许出现未定义的情况

      globals: {
        someVar: true // 可以自定义全局变量
      }
    }
  },
  unused: {
    both: {
      unused: true, // 不允许出现未使的情况
    }
  },
  undef: {
    both: {
      undef: true // 不允许出现未定义的情况
    }
  },
  bitwise: {
    both: {
      bitwise: true // 禁止使用位【运算符】
    }
  },
  curly: {
    both: {
      curly: true, // 块级代码必须放在{}中
    }
  },
  eqeqeq: {
    both: {
      eqeqeq: true // 禁止Js的强制类型转换, 使用===和！==
    }
  },
  esversion: {
    errors: {
      // esversion: 5, // 按照指定的ES标准检查代码(3, 5, 6)
      es5: true // Use esversion: 5 instead.
    },
    fixed: {
      //esversion: 6, // 按照指定的ES标准检查代码(3, 5, 6)
      esnext: true // Use esversion: 6 instead.
    }
  },
  forin: {
    both: {
      forin: true // for-in中要hasOwnProperty过滤掉继承来的属性
    }
  },
  asi: {
    both: {
      asi: false // 不可以缺省语句结尾的分号
    }
  },
  freeze: {
    errors: {
      freeze: true, // 不允许扩展内置的对象原型
    },
    fixed: {
      freeze: false, // 允许扩展内置的对象原型
    }
  },
  immed: {
    both: {
      immed: true
    }
  },
  indent: {
    both: {
      indent: 4
    }
  },
  latedef: {
    both: {
      latedef: true // 禁止函数调用先于函数声明: true | false | 'nofunc'
    }
  },
  newcap: {
    both: {
      newcap: true // 不仅要求声明构造函数时使用首大写, 而且调用构造函数时不可以缺省new
    }
  },
  noarg: {
    both: {
      noarg: true // 禁止使用arguments.callee 和 arguments.caller
    }
  },
  noempty: {
    both: {
      noempty: true, // 禁止出现空块{}, 但是空函数是没有问题的!
    }
  },
  nonbsp: {
    both: {
      nonbsp: true // 警告非换行的空格
    }
  },
  nonew: {
    both: {
      nonew: true // 禁止调用构造函数时不返回实例
    }
  },
  plusplus: {
    both: {
      plusplus: true // 禁止使用自增和自减运算符
    }
  },
  quotmark: {
    errors: {
      quotmark: 'single', // 强制引号的类型：单引号
    },
    fixed: {
      quotmark: 'double', // 强制引号的类型：双引号
    }
  },
  maxparams: {
    both: {
      maxparams: 2, // 函数参数的最大数目
    }
  },
  maxdepth: {
    both: {
      maxdepth: 2, // 最大的嵌套层数
    }
  },
  maxstatements: {
    both: {
      maxstatements: 4 // 每个函数的最大状态数
    }
  },
  maxcomplexity: {
    both: {
      maxcomplexity: 2 // 最大的圈复杂度
    }
  },
  maxlen: {
    errors: {
      maxlen: 57 // 一行的最大长度
    },
    fixed: {
      maxlen: 58 // 一行的最大长度
    }
  },

  boss: false, // 不允许在if() / for() / while()中的条件位置使用赋值语句

  debug: true, // 允许debugger出现

  eqnull: true, // 允许使用 == null 但是同时要求eqeqeq: false

  evil: true, // 允许使用eval

  expr: false, // ？允许应该出现赋值或函数调用的地方使用表达式？

  funcscope: true, // 允许在控制体内定义变量而在外部使用

  globalstrict: false, // 不允许全局严格模式

  iterator: true, // ？允许iterator？

  lastsemic: true, // 允许单行控制块省略分号

  laxcomma: true, // 允许comma-first coding style

  laxbreak: false, // ？允许不安全的行中断？

  loopfunc: true, // 允许循环中定义函数, 但是一般会带来一些问题，不过可以使用闭包来解决

  maxerr: 5, // jshint中断扫描前允许的最大错误数, 默认值是50

  multistr: true, // 允许多行字符串, / 后面的空格仍会引起警告 !

  notypeof: true, // 允许无效的typeof操作值

  proto: true, // 允许使用__proto__

  scripturl: false, // ？suppresses warnings about the use of script-targeted URLs, such as javascript:....？

  shadow: true, // declaring a variable that had been already declared somewhere in the outer scope is ok

  sub: true, // using [] notation when it can be expressed in dot notation is accepted

  supernew: true,  // 允许 new function() {...} 和 new Object;

  validthis: true, // 允许严格模式下, 在非构造函数中使用this

  noyield: false, // 不允许发生器中没有yield语句

  browser: true,  //  defines globals exposed by modern browsers: all the way from good old document and navigator to the HTML5 FileReader, and other new developments in the browser world. Note: This option doesn't expose variables like alert or console

  devel: true,  // defines globals that are usually used for logging poor-man's debugging: console, alert, etc.

  jquery: true, // defines globals exposed by the jQuery JavaScript library

  node: true, //  defines globals available program is running inside of the Node runtime environment

  nonstandard: true //  defines non-standard but widely adopted globals such as escape and unescape

  // other Environments options let JSHint know about some pre-defined global variables.
  // couch / dojo / mootools / phantom / prototypejs / rhino / worker / wsh / yui
}