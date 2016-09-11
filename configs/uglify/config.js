var grunt = require('grunt')
var pkg = grunt.file.readJSON('package.json')

var concatConfig = require('../concat/exports')

var baseDest = ['main', 'build', 'uglify', pkg.name + '.' + pkg.version].join('/')

var config = {
  /* Compress all the files in  uglify, but not remain the nested structure of directory */
  compress: {
    src: 'main/src/uglify/**/',

    dest: baseDest + '/compress',

    filename: 'index.compress.js'
  },

  /* Compress and beautify the concated file outputed by the task of concat.all */
  beautify: {
    // This src is depends the concat.config.js
    src: concatConfig.tasks.all.dest,

    dest: baseDest + '/beautify',

    filename: 'index.beautify.js'
  },

  /* Compress all the files in  uglify, and also remain the nested structure of directory */
  remain: {
    cwd: 'main/src/uglify/',

    src: '**/',

    dest: baseDest + '/remain',
  }
}

module.exports = config