var config = require('./config')
var options = require('./options')

var uglifyConfig = {
  /* The common options of all the tasks belongs to grunt-uglify */
  options: options
}

uglifyConfig.tasks = {
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
        src: config.compress.src + '/*.js',
        dest: [config.compress.dest, config.compress.filename].join('/')
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
        src: config.beautify.src + '/*.js',
        dest: [config.beautify.dest, config.beautify.filename].join('/')
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

        cwd: 'main/src/',

        src: config.remain.src + '/*.js',

        dest: config.remain.dest
      }
    ]
  }
}

module.exports = uglifyConfig