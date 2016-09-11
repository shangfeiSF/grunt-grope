module.exports = {
  report: 'min',

  banner: '/* This is a banner added by grunt-uglify */',

  footer: '\n/* This is a footer added by grunt-uglify */',

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
}