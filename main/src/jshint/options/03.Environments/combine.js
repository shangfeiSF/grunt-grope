module.exports = {
  browser: {
    errors: {
      undef: true, // 不允许出现未定义的情况
      browser: false, // 不允许出现现代浏览器中的全部变量
      devel: false // 不允许出现console, alert等
    },
    fixed: {
      undef: true, // 不允许出现未定义的情况
      browser: true, // 允许出现现代浏览器中的全部变量
      devel: true // 允许出现console, alert等
    }
  },
  browserify: {
    errors: {
      undef: true, // 不允许出现未定义的情况
      browserify: false, // 不允许出现browserify的变量
      devel: false // 不允许出现console, alert等
    },
    fixed: {
      undef: true, // 不允许出现未定义的情况
      browserify: true, // 允许出现browserify的变量
      devel: true // 允许出现console, alert等
    }
  },
  couch: {},
  devel: {
    errors: {
      undef: true, // 不允许出现未定义的情况
      devel: false // 不允许出现console, alert等
    },
    fixed: {
      undef: true, // 不允许出现未定义的情况
      devel: true // 允许出现console, alert等
    }
  },
  dojo: {},
  jasmine: {},
  jquery: {
    errors: {
      undef: true, // 不允许出现未定义的情况
      jquery: false, // 不允许jQuery中的变量
      devel: false // 不允许出现console, alert等
    },
    fixed: {
      undef: true, // 不允许出现未定义的情况
      jquery: true, // 允许jQuery中的变量
      devel: true // 允许出现console, alert等
    }
  },
  mocha: {
    errors: {
      undef: true, // 不允许出现未定义的情况
      node: true, // 允许出现require
      mocha: false, // 不允许出现mocha的变量
      devel: false // 不允许出现console, alert等
    },
    fixed: {
      undef: true, // 不允许出现未定义的情况
      node: true, // 允许出现require
      mocha: true, // 允许出现mocha的变量
      devel: true // 允许出现console, alert等
    }
  },
  module: {
    errors: {
      undef: true, // 不允许出现未定义的情况
      node: true, // 允许出现require
      esnext: true,
      module: false, // 不允许使用 ECMAScript 6 module
      devel: false // 不允许出现console, alert等
    },
    fixed: {
      undef: true, // 不允许出现未定义的情况
      node: true, // 允许出现require
      esnext: true,
      module: true, // 允许使用 ECMAScript 6 module
      devel: true // 允许出现console, alert等
    }
  },
  mootools: {},
  node: {
    errors: {
      undef: true, // 不允许出现未定义的情况
      node: false, // 不允许出现nodejs的变量
      devel: false // 不允许出现console, alert等
    },
    fixed: {
      undef: true, // 不允许出现未定义的情况
      node: true, // 允许出现nodejs的变量
      devel: true // 允许出现console, alert等
    }
  },
  nonstandard: {
    errors: {
      undef: true, // 不允许出现未定义的情况
      nonstandard: false, // 不允许出现非标准的变量(escape, unescape)
      devel: false // 不允许出现console, alert等
    },
    fixed: {
      undef: true, // 不允许出现未定义的情况
      nonstandard: true, // 允许出现非标准的变量(escape, unescape)
      devel: true // 允许出现console, alert等
    }
  },
  phantom: {},
  prototypejs: {},
  qunit: {
    errors: {
      undef: true, // 不允许出现未定义的情况
      qunit: false, // 不允许使用Quint的变量
      devel: false // 不允许出现console, alert等
    },
    fixed: {
      undef: true, // 不允许出现未定义的情况
      qunit: true, // 允许使用Quint的变量
      devel: true // 允许出现console, alert等
    }
  },
  rhino: {},
  shelljs: {},
  typed: {},
  worker: {},
  wsh: {},
  yui: {}
}