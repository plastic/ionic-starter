gulp    = require 'gulp'
replace = require 'gulp-replace'

project = require('./../settings/project').project
paths   = require('./../settings/paths').paths
sync    = require('./../settings/sync').sync
#====================

gulp.task 'start', ->
    count   = 0
    newData = Object.getOwnPropertyNames project.new

    for data in newData
        do (data) -> count++ if project.new[data] is '' or typeof project.new[data] isnt 'string'

    if count
        console.log '==========================================='
        console.log '|                                         |'
        console.log '|    Please, fill all data of the new     |'
        console.log '|    project before running this task!    |'
        console.log '|                                         |'
        console.log '==========================================='
    else
        gulp.src [ paths.package_file, paths.bower_file, paths.ionic_file, paths.config_file ]
            .pipe replace project.starter.repository,  project.new.repository
            .pipe replace project.starter.name,        project.new.name
            .pipe replace project.starter.description, project.new.description
            .pipe replace project.starter.version,     project.new.version
            .pipe replace project.starter.id,          project.new.id
            .pipe replace project.starter.author,      project.new.author
            .pipe replace project.starter.email,       project.new.email
            .pipe gulp.dest paths.root_folder

        gulp.src paths.index_file
            .pipe replace project.starter.name, project.new.name
            .pipe gulp.dest paths.dev_folder

        gulp.src paths.js_files
            .pipe replace project.starter.name, project.new.name
            .pipe gulp.dest paths.js_folder
