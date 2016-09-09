module.exports = function (grunt) {

  grunt.initConfig({
    /* 读取 json 文件 package.json, 创建 pkg 对象 */
    pkg: grunt.file.readJSON('package.json'),

    /*  grunt-concat 的 config */
    concat_configs: {
      /* src 设置合并的源dirs */
      src: {
        dir_1: 'src/concat_dir_1',
        dir_2: 'src/concat_dir_2'
      },
      /* dest 设置合并的目标dir */
      dest: '<%= pkg.name %>/concat_build/<%= pkg.version %>',
      /* file_name 设置合并文件name */
      file_name: 'concat_file'
    },
    /* grunt-concat 的 merge_task：仅将两个目录下的全部 js 文件合并为一个 js 文件：没有压缩和美化 */
    concat: {
      options: {
        /* 合并文件时的分隔标识 */
        separator: '\n/* this is separator */\n'
      },
      merge_task: {
        src: [
          '<%= concat_configs.src.dir_1 %>/*.js',
          '<%= concat_configs.src.dir_2 %>/*.js'
        ],
        dest: '<%= concat_configs.dest %>/merge_task/<%= concat_configs.file_name %>.js'
      }
    },

    /*  grunt-concat 的 config */
    uglify_configs: {
      compress_task: {
        src: 'src/uglify_dir/**/',
        dest: '<%= pkg.name %>/uglify_build/<%= pkg.version %>/compress_task',
        file_name: 'uglify_file'
      },
      beautify_task: {
        src: '<%= concat.merge_task.dest %>',
        dest: '<%= pkg.name %>/uglify_build/<%= pkg.version %>/beautify_task/<%= concat_configs.file_name %>.min.js'
      },
      remain_dir_task :{
        src: 'uglify_dir/**/',
        dest: '<%= pkg.name %>/uglify_build/<%= pkg.version %>/remain_dir_task'
      }
    },
    /*
     * grunt-uglify 的 compress_task：将 uglify_dir 目录下的全部 js 文件【压缩】, 没有保持原有的目录层级结构
     * grunt-uglify 的 beautify_task：将 merge_task 合并后的 js 文件【压缩】【美化】
     * grunt-uglify 的 remain_dir_task：将 uglify_dir 目录下的全部 js 文件压缩和美化, 保持原有的目录层级结构
    */
    uglify: {
      options: {
        report: 'min',
        banner: '/* banner: 将 uglify/files 下的 js 文件压缩 and 美化 */\n',
        footer: '\n/* fotter: 将 uglify/files 下的 js 文件压缩 and 美化 */\n',
        // 局部变量名压缩
        mangle: true,
        // 代码压缩
        compress: {
          // 去掉console.*
          drop_console: true,
          // 去掉debuuger语句
          drop_debugger: true,
          // 将访问对象属性的方式obj['pro_name']变成obj.pro_name
          // 但是对于动态属性名的访问方式var name='pro_name;'obj[name]不会改变为.方式
          properties: false,
          // 优化boolean表达式
          booleans: false,
          // 未使用的var剔除, have a try to change true
          unused: true,
          // 合并var声明, have a try to change true
          join_vars: false,
          // 使用逗号分隔连续的状态,have a try to change true
          sequences: false,
          // 清除不能达到的代码段, 例如, return后的语句
          // have a try to change true, alse set unused to true, that ensure clean all
          dead_code: false,
          // 将函数声明提升
          hoist_funs: true,
          // 将var声明提升, default is false
          hoist_vars: false,
          // 用于替换宏变量
          global_defs: {DEBUG: "global_defs"},
          // 计算常量表达式  "hello" + " world"  --> "hello world"
          evaluate: true,
          // 优化if-else结构
          conditionals: false,
          // 优化循环, while(……){……}  --> for(……){……}
          loops: false,
          // 优化比较表达式
          comparisons: true
        },
        beautify: {
          // 每行的起始缩进数
          indent_start: 2,
          // 换行的缩进数
          indent_level: 2,
          // 将对象属性用"来包裹
          quote_keys: true,
          // 冒号之后添加空格
          space_colon: true,
          // 是否保留comments
          comments: false,
          beautify: false
        },
        sourceMap: true,
        // wrap and export can make expoose these logic
        wrap: "exports",
        exportAll: true
      },
      compress_task: {
        options: {
          banner: '/* compress_task exec at <%= grunt.template.today("dd-mm-yyyy") %> */\n',
          /* compress_task 的一下三项 options 和对应 uglify 的全局 options 是相反的 */
          sourceMap: false,
          wrap: '',
          exportAll: false
        },
        files: [
          {
            src: '<%= uglify_configs.compress_task.src %>/*.js',
            dest: '<%= uglify_configs.compress_task.dest %>/<%= uglify_configs.compress_task.file_name %>.js'
          }
        ]
      },
      beautify_task: {
        options: {
          banner: '/* banner: 将 <%= pkg.name %>/concat_build/<%= pkg.version %> 下的 concat_file.js 文件压缩 and 美化 */\n',
          footer: '\n/* footer: 将 <%= pkg.name %>/concat_build/<%= pkg.version %> 下的 concat_file.js 文件压缩 and 美化 */\n',
          beautify: {
            beautify: true
          }
        },
        files: [
          {
            src: '<%= uglify_configs.beautify_task.src %>',
            dest: '<%= uglify_configs.beautify_task.dest %>'
          }
        ]
      },
      remain_dir_task:{
        options: {
          banner: '/* remain_dir_task exec at <%= grunt.template.today("dd-mm-yyyy") %> */\n',
          /* remain_dir_task 的一下三项 options 和对应 uglify 的全局 options 是相反的 */
          sourceMap: false,
          wrap: '',
          exportAll: false
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: '<%= uglify_configs.remain_dir_task.src %>/*.js',
            dest: '<%= uglify_configs.remain_dir_task.dest %>'
          }
        ]
      }
    },

    jshint: {
      check: {
        options: {
          // 不要求全部函数都使用ES5的strict mode
          strict: false,
          // 可以自定义全局变量
          globals: {
            xiaoshao: true
          },
          // 禁止使用位【运算符】
          bitwise: true,
          // 要求命名符合【驼峰式】
          camelcase: true,
          // 不允许出现【未定义】的情况
          undef: true,
          // 不允许出现【未使用】的情况
          unused: true,
          // 块级代码要放在{}中
          curly: true,
          // 禁止Js的强制类型转换, 使用===和！==
          eqeqeq: true,
          // 按照ES3的标准检查代码: 保留字不能用于命名
          es3: true,
          // for-in中要hasOwnProperty过滤掉继承来的属性
          forin: true,
          // 不可以缺省语句结尾的分号
          asi: false,
          // 允许扩展内置的对象原型
          freeze: false,
          // ？匿名函数的调用格式？
          immed: true,
          // ？设置特定的tab宽度？
          indent: 2,
          //  禁止函数调用先于函数声明: true | false | 'nofunc'
          latedef: true,
          // 要求声明构造函数: 使用首大写; 调用构造函数: 不可以缺省new operator
          newcap: true,
          // 禁止使用arguments.callee 和 arguments.caller
          noarg: true,
          // 禁止出现空块{}, 但是空函数是没有问题的!
          noempty: true,
          // ？warns about "non-breaking whitespace" characters？
          nonbsp: true,
          // prohibits the use of constructor functions for side-effects : 'var some = new Some()'  is right !
          nonew: true,
          // prohibits the use of unary increment and decrement operators
          plusplus: true,
          // 强制引号的类型
          quotmark: 'single',
          // 函数参数的最大数目
          maxparams: 3,
          // 最大的嵌套层数
          maxdepth: 2,
          // 每个函数的最大状态数
          maxstatements: 500,
          // 最大的圈复杂度
          maxcomplexity: 10,
          // 一行的最大长度
          maxlen: 1000,
          // 不允许在if() / for() / while()中的条件位置使用赋值语句
          boss: false,
          // 允许debugger出现
          debug: true,
          // 允许使用 == null 但是同时要求eqeqeq: false
          eqnull: true,
          // 使用ES6的特殊语法
          esnext: true,
          // 允许使用eval
          evil: true,
          // ？允许应该出现赋值或函数调用的地方使用表达式？
          expr: false,
          // 允许在控制体内定义变量而在外部使用
          funcscope: true,
          // 不允许全局严格模式
          globalstrict: false,
          // ？允许iterator？
          iterator: true,
          // 允许单行控制块省略分号
          lastsemic: true,
          // 允许comma-first coding style
          laxcomma: true,
          // ？允许不安全的行中断？
          laxbreak: false,
          // 允许循环中定义函数, 但是一般会带来一些问题，不过可以使用闭包来解决
          loopfunc: true,
          // jshint中断扫描前允许的最大错误数, 默认值是50
          maxerr: 5,
          // 允许多行字符串, / 后面的空格仍会引起警告 !
          multistr: true,
          // 允许无效的typeof操作值
          notypeof: true,
          // 允许使用__proto__
          proto: true,
          //  ？suppresses warnings about the use of script-targeted URLs, such as javascript:....？
          scripturl: false,
          // declaring a variable that had been already declared somewhere in the outer scope is ok
          shadow: true,
          // using [] notation when it can be expressed in dot notation is accepted
          sub: true,
          // 允许 new function() {...} 和 new Object;
          supernew: true,
          // 允许严格模式下, 在非构造函数中使用this
          validthis: true,
          // 不允许发生器中没有yield语句
          noyield: false,
          //  defines globals exposed by modern browsers:
          // all the way from good old document and navigator to the HTML5 FileReader
          // and other new developments in the browser world.
          // Note: This option doesn't expose variables like alert or console
          browser: true,
          // defines globals that are usually used for logging poor-man's debugging:
          // console, alert, etc.
          devel: true,
          // defines globals exposed by the jQuery JavaScript library
          jquery: true,
          //  defines globals available program is running inside of the Node runtime environment
          node: true,
          //  defines non-standard but widely adopted globals such as escape and unescape
          nonstandard: true
          // other Environments options let JSHint know about some pre-defined global variables.
          // couch / dojo / mootools / phantom / prototypejs / rhino / worker / wsh / yui
        },
        files: {
          // jshint 的目标文件
          src: ['src/jshint_dir/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['concat:merge_task', 'uglify:compress_task'])
  grunt.registerTask('beautify', ['uglify:beautify_task'])
  grunt.registerTask('remain', ['uglify:remain_dir_task'])
  grunt.registerTask('check', ['jshint:check'])

  // grunt xiaoshao:bengin:end
  // 传递冒号分割的参数
  grunt.registerTask('xiaoshao', 'A sample xiaoshao-defined task.', function (arg1, arg2) {
    if (arguments.length === 0) {
      grunt.log.writeln(this.name + ", no args");
    } else {
      grunt.log.writeln("Tast(Target) " + this.name + ": arg1=" + arg1 + ", arg2=" + arg2);
    }
  });
};