var fs = require('fs')
var path = require('path')

var mainDir = path.join(__dirname, '../../main')

var errorsDir = path.join(mainDir, 'src/jshint/errors')
var fixedDir = path.join(mainDir, 'src/jshint/fixed')
var options = require(path.join(mainDir, 'src/jshint/options.js'))

function makeTasks(dir, type) {
  var tasks = {}
  var files = fs.readdirSync(dir)

  files.forEach(function (file) {
    var params = file.split('\.')
    var index = params[0]
    var optionName = params[1]

    tasks[optionName + '_' + type] = {
      index: index,
      type: type,
      options: options[optionName].both ?
        options[optionName].both :
        options[optionName][type],
      files: {
        src: ['main/src/jshint', type, file].join('/')
      }
    }
  })

  return tasks
}

var jshintConfig = {}
var errors = makeTasks(errorsDir, 'errors')
var fixed = makeTasks(fixedDir, 'fixed')

jshintConfig.tasks = Object.assign(errors, fixed)

fs.writeFileSync(path.join(__dirname, 'log/tasks.json'), JSON.stringify(jshintConfig, null, 2), {
  encoding: 'utf-8',
  flag: 'w'
}, function (error) {
  if (error) throw error
  console.log('Saved jshint tasks config!')
})

module.exports = jshintConfig