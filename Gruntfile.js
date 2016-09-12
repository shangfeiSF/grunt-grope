var concatConfig = require('./configs/concat/exports')
var uglifyConfig = require('./configs/uglify/exports')
var jshintConfig = require('./configs/jshint/exports')

var gruntConfig = {}

gruntConfig.concat = {
  options: concatConfig.options,

  all: concatConfig.tasks.all,

  first: concatConfig.tasks.first,

  second: concatConfig.tasks.second
}

gruntConfig.uglify = {
  options: uglifyConfig.options,

  compress: uglifyConfig.tasks.compress,

  beautify: uglifyConfig.tasks.beautify,

  remain: uglifyConfig.tasks.remain
}

gruntConfig.jshint = jshintConfig.tasks

module.exports = function (grunt) {
  grunt.initConfig(gruntConfig)

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')

  // grunt-concat-tasks
  grunt.registerTask('merge', [
    'concat:all',
    'concat:first',
    'concat:second'
  ])

  // grunt-uglify-tasks
  grunt.registerTask('compress', [
    'uglify:compress'
  ])
  grunt.registerTask('beautify', [
    'uglify:beautify'
  ])
  grunt.registerTask('remain', [
    'uglify:remain'
  ])
  grunt.registerTask('format', [
    'uglify:compress',
    'uglify:beautify',
    'uglify:remain'
  ])

  // grunt-jshint-tasks
  Object.keys(gruntConfig.jshint).forEach(function (key) {
    var task = gruntConfig.jshint[key]

    var taskName = task.index + (task.type === 'fixed' ? 'f' : 'e')

    grunt.registerTask(taskName, [
      'jshint:' + key
    ])
  })

  // user-defined-tasks
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