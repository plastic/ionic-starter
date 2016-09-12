gulp    = require 'gulp'
replace = require 'gulp-replace'
useref  = require 'gulp-useref'
gulpif  = require 'gulp-if'
uglify  = require 'gulp-uglify'
htmlmin = require 'gulp-htmlmin'
cssnano = require 'gulp-cssnano'

paths      = require('./../settings/paths').paths
components = require('./../settings/components').components
#====================

gulp.task 'htmlmin-partials', ->
    gulp.src paths.html_files
        .pipe useref()
        .pipe gulpif '*.html', htmlmin(
            removeComments     : true
            collapseWhitespace : true
        )
        .pipe gulp.dest paths.app_folder


gulp.task 'htmlmin-index', ->
    gulp.src paths.index_file
        .pipe replace components.cordova.symbol, components.cordova.include
        .pipe useref()
        .pipe gulpif '*.js', uglify()
        .pipe gulpif '*.html', htmlmin(
            minifyJS           : true
            removeComments     : true
            collapseWhitespace : true
        )
        .pipe gulpif '*.css', cssnano(
            discardComments :
                removeAll : true
        )
        .pipe gulp.dest paths.dist_folder
