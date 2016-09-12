gulp     = require 'gulp'
register = require('./tasks/registers').registers
#====================

gulp.task 'default', ->
    console.log '=================================='
    console.log '|                                |'
    console.log '|    Use commands:               |'
    console.log '|      $ gulp config:start       |'
    console.log '|      $ gulp compile:dev        |'
    console.log '|      $ gulp compile:dist       |'
    console.log '|      $ gulp serve:dev          |'
    console.log '|      $ gulp serve:doc          |'
    console.log '|      $ gulp serve:dist         |'
    console.log '|      $ gulp emulate:android    |'
    console.log '|      $ gulp emulate:ios        |'
    console.log '|      $ gulp run:android        |'
    console.log '|      $ gulp run:ios            |'
    console.log '|      $ gulp build:android      |'
    console.log '|      $ gulp build:ios          |'
    console.log '|                                |'
    console.log '=================================='


gulp.task 'config:start',                        (done) -> register.compileConfig  done
gulp.task 'compile:dev',                         (done) -> register.compileDev     done
gulp.task 'compile:dist',    [ 'compile:dev'  ], (done) -> register.compileDist    done
gulp.task 'serve:dev',       [ 'compile:dev'  ], (done) -> register.serveDev       done
gulp.task 'serve:doc',       [ 'compile:dev'  ], (done) -> register.serveDoc       done
gulp.task 'serve:dist',      [ 'compile:dist' ], (done) -> register.serveDist      done
gulp.task 'emulate:android', [ 'compile:dist' ], (done) -> register.emulateAndroid done
gulp.task 'emulate:ios',     [ 'compile:dist' ], (done) -> register.emulateIOS     done
gulp.task 'run:android',     [ 'compile:dist' ], (done) -> register.runAndroid     done
gulp.task 'run:ios',         [ 'compile:dist' ], (done) -> register.runIOS         done
gulp.task 'build:android',   [ 'compile:dist' ], (done) -> register.buildAndroid   done
gulp.task 'build:ios',       [ 'compile:dist' ], (done) -> register.buildIOS       done
