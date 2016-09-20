module.exports = {
  demo: {
    both: {
      unused: true, // 不允许出现未使的情况

      asi: false, // 不可以缺省语句结尾的分号

      forin: true, // for-in中要hasOwnProperty过滤掉继承来的属性
    }
  },
  bitwise: {
    both: {
      bitwise: true // 禁止使用位【运算符】
    }
  },
  camelcase: {
    both: {
      camelcase: true, // 要求驼峰式命名
    }
  },
  curly: {
    both: {
      curly: true, // 块级代码必须放在{}中
    }
  },
  enforceall: {
    both: {}
    // deprecated
    // 启用所有的强制检查选项(enforcing-options)[http://jshint.com/docs/options/#enforcing-options]
    // 禁用所有的宽松检查选项(relaxing-options)[http://jshint.com/docs/options/#relaxing-options]
  },
  eqeqeq: {
    both: {
      eqeqeq: true // 禁止Js的强制类型转换, 使用===和！==
    }
  },
  es3: {
    both: {}
  },
  es5: {
    both: {}
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
  freeze: {
    errors: {
      freeze: true, // 不允许扩展内置的对象原型
    },
    fixed: {
      freeze: false, // 允许扩展内置的对象原型
    }
  },
  funcscope: {
    errors: {
      funcscope: false, // 不允许在控制体内定义变量而在外部使用
    },
    fixed: {
      funcscope: true, // 允许在控制体内定义变量而在外部使用
    }
  },
  futurehostile: {
    both: {
      futurehostile: true // 允许警告ECMAScript未来版本中的保留字
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
  iterator: {
    errors: {
      esnext: true, // Use esversion: 6
      iterator: false // 不允许使用ES6的__iterator__ 属性
    },
    fixed: {
      esnext: true, // Use esversion: 6
      iterator: true // 允许使用ES6的__iterator__ 属性
    }
  },
  latedef: {
    both: {
      latedef: true // 禁止函数调用先于函数声明: true | false | 'nofunc'
    }
  },
  maxcomplexity: {
    both: {
      maxcomplexity: 2 // 最大的圈复杂度
    }
  },
  maxdepth: {
    both: {
      maxdepth: 2, // 最大的嵌套层数
    }
  },
  maxerr: {
    errors: {
      unused: true,
      undef: true,
      maxerr: 3 // 设置Jshint中断扫描前允许的最大错误数为3, 默认值是50
    },
    fixed: {
      unused: true,
      undef: true,
      maxerr: 5 // 设置Jshint中断扫描前允许的最大错误数为4, 默认值是50
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
  maxparams: {
    both: {
      maxparams: 2, // 函数参数的最大数目
    }
  },
  maxstatements: {
    both: {
      maxstatements: 4 // 每个函数的最大状态数
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
  nocomma: {
    errors: {
      nocomma: true // 不允许使用逗号
    },
    fixed: {
      nocomma: false // 允许使用逗号
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
  notypeof: {
    both: {
      notypeof: false // 允许无效的typeof操作值
    }
  },
  predef: {
    errors: {
      undef: true, // 不允许出现未定义的情况
      predef: [] // 预定义的变量为空
    },

    fixed: {
      undef: true, // 不允许出现未定义的情况
      predef: ["describe", "before", "after"] // 预定义若干变量
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
  shadow_inner: {
    errors: {
      shadow: 'inner'  // 仅仅在作用域链内部检查变量声明
    },
    fixed: {
      shadow: 'inner'
    }
  },
  shadow_outer: {
    errors: {
      shadow: 'outer' // 不仅在作用域链内部，而且还在作用域链外部检查变量声明
    },
    fixed: {
      shadow: 'outer'
    }
  },
  shadow_true: {
    errors: {
      shadow: false // 与shadow: 'inner'相同
    },
    fixed: {
      shadow: true // 允许不在作用域链内部声明变量
    }
  },
  singleGroups: {
    both: {
      singleGroups: true // 检查不必要的括号
    }
  },
  strict: {
    both: {
      strict: true // 要求全部函数都使用ES5的strict mode
    }
  },
  undef: {
    both: {
      undef: true // 不允许出现未定义的情况
    }
  },
  unused: {
    both: {
      unused: true, // 不允许出现未使的情况
    }
  },
  varstmt: {
    both: {
      esnext: true,
      varstmt: true // 不允许使用var来声明变量
    }
  }
}