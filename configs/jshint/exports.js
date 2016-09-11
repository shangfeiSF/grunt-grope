var config = require('./config')
var options = require('./options')

var jshintCOnfig = {
  /* The common options of all the tasks belongs to grunt-jshint */
  options: options
}

jshintCOnfig.tasks = {
  check: {
    files: {
      src: config.src,
    }
  }
}

module.exports = jshintCOnfig