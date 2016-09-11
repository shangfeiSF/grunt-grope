var grunt = require('grunt')
var pkg = grunt.file.readJSON('../../package.json')

var config = {
  /* Declare the source-directories */
  src: {
    first: 'main/src/concat/first',
    second: 'main/src/concat/second'
  },

  /* Declare the destination-directories */
  dest: ['main', 'build', pkg.name + '.concat', pkg.version].join('/'),

  /* Declare the name of concated file*/
  filename: 'index.concat.js'
}

module.exports = config