#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var cp = require('child_process')

var nopt = require('nopt')
var colors = require('colors')
var Promise = require('bluebird')

Promise.promisifyAll(fs)
var execAsync = Promise.promisify(cp.exec, {
  context: cp,
  multiArgs: true
})

var mainDir = path.join(process.cwd(), 'main')
var errorsDir = path.join(mainDir, 'src/jshint/errors')

var enforcingDir = path.join(errorsDir, '01.Enforcing')
var relaxingDir = path.join(errorsDir, '02.Relaxing')
var environmentsDir = path.join(errorsDir, '03.Environments')

var knowns = {
  'input': Array,
  'all': Boolean,
}
var shorts = (function (dirs) {
  var shorts = {
    'a': ['--all', 'true'],
    'i': ['--input']
  }

  dirs.forEach(function (dir) {
    fs.readdirSync(dir).sort().forEach(function (file) {
      var index = file.split('\.').shift()
      var cmd = 'i' + index
      shorts[cmd] = ['--input', index]
    })
  })

  return shorts
})([enforcingDir, relaxingDir, environmentsDir])
var options = nopt(knowns, shorts, process.argv, 2)

var tasksInfo = {}

var main = function (indexs) {
  console.log('Begin....'.magenta)

  var enforcingFiles = fs.readdirAsync(enforcingDir)
  var relaxingFiles = fs.readdirAsync(relaxingDir)
  var environmentsFiles = fs.readdirAsync(environmentsDir)

  Promise.join(enforcingFiles, relaxingFiles, environmentsFiles, function (enforcingFiles, relaxingFiles, environmentsFiles) {
      var enforcingFiles = enforcingFiles.map(function (file) {
        return {
          category: '01.Enforcing',
          name: file
        }
      })

      var relaxingFiles = relaxingFiles.map(function (file) {
        return {
          category: '02.Relaxing',
          name: file
        }
      })

      var environmentsFiles = environmentsFiles.map(function (file) {
        return {
          category: '03.Environments',
          name: file
        }
      })

      return enforcingFiles.concat(relaxingFiles).concat(environmentsFiles)
    })

    .filter(function (file) {
      return fs.statAsync(path.join(errorsDir, file.category, file.name))
        .then(function (stat) {
          var all = true
          if (indexs) {
            all = indexs.some(function (index) {
              return index == file.name.split('\.')[0]
            })
          }
          return !stat.isDirectory() && all
        })
    })

    .then(function (files) {
      return files.map(function (file) {
        return {
          taskname: file.name,
          index: file.name.split('\.')[0]
        }
      })
    })

    .mapSeries(function (info, i) {
      console.log(('[Start] --- ' + info.taskname).yellow)

      var collect = tasksInfo[info.taskname] = {}

      var command_errors = ['grunt', info.index + 'e', '--force', i == 0 ? '-l' : ''].join(' ')
      var command_fixed = ['grunt', info.index + 'f', '--force'].join(' ')

      var task_errors = execAsync(command_errors, {cwd: path.join(process.cwd())})
      var task_fixed = execAsync(command_fixed, {cwd: path.join(process.cwd())})

      return Promise.join(task_errors, task_fixed)

        .then(function (details) {
          var result = {
            taskname: info.taskname,
          }

          collect.errors = details.length ? (details[0].length ? details[0][0] : null) : null
          collect.fixed = details.length ? (details[1].length ? details[1][0] : null) : null

          return result
        })

        .then(function (result) {
          console.log(('[End] --- ' + result.taskname + '\n').green)
        })
    })

    .then(function () {
      var sep = '---------------------------------------------------------------------------------------\n'
      var log = ''

      Object.keys(tasksInfo).forEach(function (taskname) {
        var info = tasksInfo[taskname]

        Object.keys(info).forEach(function (key) {
          if (info[key].length) {
            var msg = ['[', taskname, '] -- ', key, ':\n'].join('')

            log += sep
            log += msg.toString()
            log += info[key].toString()
          }
        })
      })

      log += sep

      return fs.writeFileAsync(path.join(process.cwd(), 'configs/jshint/log', +new Date() + '.log'), log, {
        encoding: 'utf-8',
        flag: 'w'
      })
    })

    .then(function () {
      console.log('log done')
    })
}

if (options.all) {
  main()
}
else if (options.input.length) {
  main(options.input)
}
else {
  console.log('Need input index or option -a'.red)
}