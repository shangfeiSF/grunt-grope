var grunt = require('grunt')
var pkg = grunt.file.readJSON('package.json')

var config = {
  /* Declare the source-directories */
  src: {
    first: 'main/src/concat/first',
    second: 'main/src/concat/second'
  },

  /* Declare the destination-directories */
  dest: ['main', 'build', pkg.name + '.concat', pkg.version].join('/'),

  /* Declare the name of concated file*/
  filename: 'index.concat'
}

module.exports = {
  options: {
    /* The separator used in index.concat.js */
    separator: '\n/* this is separator */\n'
  },

  tasks: {
    /* Concat all the .js in first and second */
    all: {
      src: [config.src.first + '/*.js', config.src.second + '/*.js'],

      dest: [config.dest, 'all', config.filename + '.js'].join('/')
    },

    /* Concat all the .js only in first */
    first: {
      src: config.src.first + '/*.js',

      dest: [config.dest, 'first', config.filename + '.js'].join('/')
    },

    /* Concat all the .js only in second */
    second: {
      src: config.src.second + '/*.js',

      dest: [config.dest, 'second', config.filename + '.js'].join('/')
    }
  }
}