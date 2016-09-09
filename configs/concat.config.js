var grunt = require('grunt')

var pkg = grunt.file.readJSON('package.json')

var _ = {
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

var concatConfig = {
  options: {
    /* The separator used in index.concat.js */
    separator: '\n/* this is separator */\n'
  }
}

concatConfig.tasks = {
  /* Concat all the .js in first and second */
  all: {
    src: [_.src.first + '/*.js', _.src.second + '/*.js'],

    dest: [_.dest, 'all', _.filename + '.js'].join('/')
  },

  /* Concat all the .js only in first */
  first: {
    src: _.src.first + '/*.js',

    dest: [_.dest, 'first', _.filename + '.js'].join('/')
  },

  /* Concat all the .js only in second */
  second: {
    src: _.src.second + '/*.js',

    dest: [_.dest, 'second', _.filename + '.js'].join('/')
  }
}

module.exports = concatConfig