var fs = require('fs')
var path = require('path')

var nopt = require('nopt')
var colors = require('colors')

var nopt_options = nopt({
  'log': Boolean,
}, {
  'l': ['--log', 'true'],
  'nl': ['--log', 'false']
}, process.argv, 2)

var mainDir = path.join(__dirname, '../../main')

var errorsDir = path.join(mainDir, 'src/jshint/errors')
var fixedDir = path.join(mainDir, 'src/jshint/fixed')

var logger = {}

function makeTasks(configs) {
  var tasks = {}

  configs.forEach(function (config) {
    var dir = config.dir
    var type = config.type

    fs.readdirSync(dir).forEach(function (categoryDir) {
      if (!logger[categoryDir]) {
        logger[categoryDir] = {}
      }

      var options = require(path.join(mainDir, 'src/jshint/options', categoryDir, 'combine.js'))

      fs.readdirSync(path.join(dir, categoryDir)).forEach(function (file) {
        var params = file.split('\.')

        var index = params[0]
        var optionName = params[1]

        tasks[optionName + '--' + type] = {
          index: index,
          type: type,
          options: options[optionName].both ?
            options[optionName].both :
            options[optionName][type],
          files: {
            src: ['main/src/jshint', type, categoryDir, file].join('/')
          }
        }

        if (!logger[categoryDir][optionName]) {
          logger[categoryDir][optionName] = {
            index: index
          }
        }

        logger[categoryDir][optionName][type] = options[optionName].both ?
          options[optionName].both :
          options[optionName][type]
      })
    })
  })

  return tasks
}

var jshintConfig = {}

jshintConfig.tasks = makeTasks([
  {
    dir: errorsDir,
    type: 'errors'
  },
  {
    dir: fixedDir,
    type: 'fixed'
  }
])

if (nopt_options.log) {
  fs.writeFileSync(path.join(__dirname, 'log/tasks.json'), JSON.stringify(logger, null, 2), {
    encoding: 'utf-8',
    flag: 'w'
  })
  console.log('Saved jshint tasks config!\n'.magenta)
}

module.exports = jshintConfig