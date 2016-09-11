var config = require('./config')
var options = require('./options')

var concatConfig = {
  /* The common options of all the tasks belongs to grunt-concat */
  options: options
}

concatConfig.tasks = {
  /* Concat all the .js in first and second */
  all: {
    src: [config.src.first + '/*.js', config.src.second + '/*.js'],

    dest: [config.dest, 'all', config.filename].join('/')
  },

  /* Concat all the .js only in first */
  first: {
    src: config.src.first + '/*.js',

    dest: [config.dest, 'first', config.filename].join('/')
  },

  /* Concat all the .js only in second */
  second: {
    src: config.src.second + '/*.js',

    dest: [config.dest, 'second', config.filename].join('/')
  }
}

module.exports = concatConfig