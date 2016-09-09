var grunt = require('grunt')
var concatConfig = require('./configs/concat.config')

var gruntConfig = {}

gruntConfig.concat = {
  options: concatConfig.options,

  all: concatConfig.tasks.all,

  first: concatConfig.tasks.first,

  second: concatConfig.tasks.second
}

gruntConfig.uglify = {}

gruntConfig.jshint = {}

module.exports = function (grunt) {
  grunt.initConfig({
    /* The tasks of grunt-uglify */
    uglify: {
      /* The common options of all the tasks belongs to grunt-uglify */
      options: {
        report: 'min',

        banner: '/* This is a banner added by grunt-uglify */\n',

        footer: '\n/* This is a footer added by grunt-uglify  */\n',

        mangle: true, // 局部变量名压缩

        compress: { // 代码压缩
          drop_console: true, // 去掉console.*

          drop_debugger: true, // 去掉debuuger语句

          properties: false, // 将访问对象属性的方式obj['pro_name']变成obj.pro_name, 但是对于动态属性名的访问方式var name='pro_name;'obj[name]不会改变为.方式

          booleans: false, // 优化boolean表达式

          unused: true, // 未使用的var剔除, have a try to change true

          join_vars: false, // 合并var声明, have a try to change true

          sequences: false, // 使用逗号分隔连续的状态,have a try to change true

          dead_code: false, // 清除不能达到的代码段, 例如, return后的语句 (have a try to change true, alse set unused to true, that ensure clean all)

          hoist_funs: true, // 将函数声明提升

          hoist_vars: false, // 将var声明提升, default is false

          global_defs: {DEBUG: 'global_defs'}, // 用于替换宏变量

          evaluate: true, // 计算常量表达式  'hello' + ' world'  --> 'hello world'

          conditionals: false, // 优化if-else结构

          loops: false, // 优化循环, while(……){……}  --> for(……){……}

          comparisons: true // 优化比较表达式
        },

        beautify: {
          indent_start: 2, // 每行的起始缩进数

          indent_level: 2, // 换行的缩进数

          quote_keys: true, // 将对象属性用'来包裹

          space_colon: true, // 冒号之后添加空格

          comments: false, // 是否保留comments

          beautify: false
        },

        sourceMap: true,

        wrap: 'exports', // wrap and export can make expoose these logic

        exportAll: true
      },

      compress: {
        /* These options will rewrite the options in uglify.options */
        options: {
          banner: '/* TimeStamp: <%= grunt.template.today("dd-mm-yyyy") %> */\n',

          sourceMap: false,

          wrap: '',

          exportAll: false
        },

        files: [
          {
            src: '<%= uglify_configs.compress.src %>/*.js',
            dest: '<%= uglify_configs.compress.dest %>/compress/<%= uglify_configs.compress.filename %>.js'
          }
        ]
      },

      beautify: {
        /* These options will rewrite the options in uglify.options */
        options: {
          beautify: {
            beautify: true
          }
        },

        files: [
          {
            src: '<%= uglify_configs.beautify.src %>',
            dest: '<%= uglify_configs.beautify.dest %>/beautify/<%= uglify_configs.beautify.filename %>.js'
          }
        ]
      },

      remain: {
        /* These options will rewrite the options in uglify.options */
        options: {
          sourceMap: false,

          wrap: '',

          exportAll: false
        },

        files: [
          {
            expand: true,

            cwd: 'src/',

            src: '<%= uglify_configs.remain.src %>/*.js',

            dest: '<%= uglify_configs.remain.dest %>/remain/'
          }
        ]
      }
    },


    jshint: {
      check: {
        options: {
          strict: false, // 不要求全部函数都使用ES5的strict mode

          globals: {
            xiaoshao: true // 可以自定义全局变量
          },

          bitwise: true, // 禁止使用位【运算符】

          camelcase: true, // 要求命名符合【驼峰式】

          undef: true, // 不允许出现【未定义】的情况

          unused: true, // 不允许出现【未使用】的情况

          curly: true,  // 块级代码要放在{}中

          eqeqeq: true, // 禁止Js的强制类型转换, 使用===和！==

          es3: true, // 按照ES3的标准检查代码: 保留字不能用于命名

          forin: true, // for-in中要hasOwnProperty过滤掉继承来的属性

          asi: false, // 不可以缺省语句结尾的分号

          freeze: false, // 允许扩展内置的对象原型

          immed: true, // ？匿名函数的调用格式？

          indent: 2, // ？设置特定的tab宽度？

          latedef: true, // 禁止函数调用先于函数声明: true | false | 'nofunc'

          newcap: true, // 要求声明构造函数: 使用首大写; 调用构造函数: 不可以缺省new operator

          noarg: true, // 禁止使用arguments.callee 和 arguments.caller

          noempty: true, // 禁止出现空块{}, 但是空函数是没有问题的!

          nonbsp: true, // ？warns about 'non-breaking whitespace' characters？

          nonew: true, // prohibits the use of constructor functions for side-effects : 'var some = new Some()'  is right !

          plusplus: true, // prohibits the use of unary increment and decrement operators

          quotmark: 'single', // 强制引号的类型

          maxparams: 3, // 函数参数的最大数目

          maxdepth: 2, // 最大的嵌套层数

          maxstatements: 500, // 每个函数的最大状态数

          maxcomplexity: 10, // 最大的圈复杂度

          maxlen: 1000, // 一行的最大长度

          boss: false, // 不允许在if() / for() / while()中的条件位置使用赋值语句

          debug: true, // 允许debugger出现

          eqnull: true, // 允许使用 == null 但是同时要求eqeqeq: false

          esnext: true, // 使用ES6的特殊语法

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
        },

        files: {
          src: 'src/jshint/*.js'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')

  grunt.registerTask('merge', [
    'concat:all',
    'concat:first',
    'concat:second'
  ])
  grunt.registerTask('compress', [
    'uglify:compress'
  ])
  grunt.registerTask('beautify', [
    'uglify:beautify'
  ])
  grunt.registerTask('remain', [
    'uglify:remain'
  ])
  grunt.registerTask('check', [
    'jshint:check'
  ])
  grunt.registerTask('mytask', 'A sample user defined task.', function (stratTime, endTime) {
    // Define a user defined task, and execute by `grunt mytask:2016-9-9:2016-10-10`
    // Use `:` to pass arguments to grunt task
    if (arguments.length === 0) {
      grunt.log.writeln(this.name + ' need startTime and endTime !')
    } else {
      grunt.log.writeln(this.name + ': stratTime=' + stratTime + 'endTime = ' + endTime)
    }
  })
}