module.exports = {
  asi: {
    both: {
      asi: false // 不可以缺省语句结尾的分号
    }
  },
  boss: {
    both: {
      boss: false // 不允许在if() / for() / while()中的条件位置使用赋值语句
    }
  },
  debug: {
    both: {
      debug: false // 不允许debugger出现
    }
  },
  elision: {
    errors: {
      elision: false // 不允许使用ES6数组省略式
    },
    fixed: {
      elision: true // 允许使用ES6数组省略式
    }
  },
  eqnull: {
    both: {
      eqnull: false, // 不允许使用==和!=比较null和undefined
      eqeqeq: false
    }
  },
  esnext: {
    errors: {
      // 按照ES-5的标准检查代码, 默认es5: true
    },
    fixed: {
      esnext: true // 按照ES-6的标准检查代码
    }
  },
  evil: {
    errors: {
      evil: false, // 不允许使用eval
    },
    fixed: {
      evil: true, // 允许使用eval
    }
  },
  expr: {
    both: {
      expr: false // 不允许应该出现赋值或函数调用的地方使用表达式
    }
  },
  globalstrict: {
    both: {
      globalstrict: false, // 不允许全局严格模式
    }
  },
  lastsemic: {
    errors: {
      lastsemic: false, // 不允许单行控制块省略分号
    },
    fixed: {
      lastsemic: true, // 允许单行控制块省略分号
    }
  },
  laxbreak: {
    errors: {
      laxcomma: true,
      laxbreak: false // 不允许不安全的换行中断
    },
    fixed: {
      laxcomma: true,
      laxbreak: false // 不允许不安全的换行中断
    }
  },
  laxcomma: {
    errors: {
      laxcomma: false // 不允许逗号前置
    },
    fixed: {
      laxcomma: true // 允许逗号前置
    }
  },
  loopfunc: {
    errors: {
      loopfunc: false, // 不允许循环中定义函数
    },
    fixed: {
      loopfunc: true,// 允许循环中定义函数, 但是一般会带来一些问题, 不过可以使用闭包来避免错误
    }
  },
  moz: {
    both: {}
  },
  multistr: {
    errors: {
      multistr: false // 不允许多行字符串
    },
    fixed: {
      multistr: true // 允许多行字符串, / 后面的空格仍会引起警告 !
    }
  },
  noyield: {
    both: {
      esnext: true,
      noyield: false // 不允许发生器中没有yield语句
    }
  },
  plusplus: {
    both: {
      plusplus: true // 禁止使用自增和自减运算符
    }
  },
  proto: {
    errors: {
      proto: false, // 不允许使用__proto__
    },
    fixed: {
      proto: true, // 允许使用__proto__
    }
  },
  scripturl: {
    errors: {
      scripturl: false // 不允许出现javascript: <URL>这样的脚本定向语句
    },
    fixed: {
      scripturl: true // 允许出现javascript: <URL>这样的脚本定向语句
    }
  },
  sub: {
    errors: {
      sub: false // 不允许使用[]配合表达式来访问属性
    },
    fixed: {
      sub: true // 允许使用[]配合表达式来访问属性
    }
  },
  supernew: {
    errors: {
      supernew: false // 不允许使用怪异的new
    },
    fixed: {
      supernew: true // 允许使用怪异的new
    }
  },
  validthis: {
    errors: {
      validthis: false // 严格模式下, 不允许在非构造函数中使用this
    },
    fixed: {
      validthis: true // 严格模式下, 允许在非构造函数中使用this
    }
  },
  withstmt: {
    both: {
      withstmt: false,
    }
  }
}