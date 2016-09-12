gulp  = require 'gulp'
clean = require 'gulp-clean-dest'

paths = require('./../settings/paths').paths
#====================

gulp.task 'copy', ->
    gulp.src [
            paths.assets_files,
            '!' + paths.images_files,
            '!' + paths.css_files
        ]
        .pipe clean paths.dist_folder
        .pipe gulp.dest paths.assets_folder
