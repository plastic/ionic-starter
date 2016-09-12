gulp  = require 'gulp'
shell = require 'gulp-shell'

paths = require('./../settings/paths').paths
#====================

gulp.task 'emulate-android', ->
    gulp.src paths.dist_folder, read : false
        .pipe shell 'ionic emulate android'

gulp.task 'emulate-ios', ->
    gulp.src paths.dist_folder, read : false
        .pipe shell 'ionic emulate ios'

gulp.task 'run-android', ->
    gulp.src paths.dist_folder, read : false
        .pipe shell 'ionic run android'

gulp.task 'run-ios', ->
    gulp.src paths.dist_folder, read : false
        .pipe shell 'ionic run ios'

gulp.task 'build-android', ->
    gulp.src paths.dist_folder, read : false
        .pipe shell 'ionic build android'

gulp.task 'build-android', ->
    gulp.src paths.dist_folder, read : false
        .pipe shell 'ionic build ios'
