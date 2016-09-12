gulp      = require 'gulp'
sequence  = require 'run-sequence'
directory = require 'require-dir'

paths = require('./../settings/paths').paths
sync  = require('./../settings/sync').sync

directory './'
#====================

registers =
    compileConfig : (done) -> sequence 'start', done
    compileDev    : (done) -> sequence 'cache', 'jshint', 'doc', 'scss', done
    compileDist   : (done) -> sequence 'copy', 'imagesmin', 'htmlmin-partials', 'htmlmin-index', done

    serveDev : (done) ->
        sync.dev.init paths.server.dev, done

        gulp.watch paths.html_files, [ 'cache' ]
        gulp.watch paths.js_files,   [ 'jshint', 'doc' ]
        gulp.watch paths.scss_files, [ 'scss' ]
        gulp.watch [
            paths.index_file,
            paths.app_files,
            paths.assets_files,
            '!' + paths.css_files
        ]
        .on 'change', sync.dev.reload

    serveDoc : (done) ->
        sync.doc.init paths.server.doc, done
        gulp.watch paths.js_files, [ 'doc' ]
        gulp.watch paths.doc_files
            .on 'change', sync.doc.reload

    serveDist : (done) ->
        sync.dist.init paths.server.dist, done

    emulateAndroid : (done) -> sequence 'emulate-android', done
    emulateIOS     : (done) -> sequence 'emulate-ios',     done
    runAndroid     : (done) -> sequence 'run-android',     done
    runIOS         : (done) -> sequence 'run-ios',         done
    buildAndroid   : (done) -> sequence 'build-android',   done
    buildIOS       : (done) -> sequence 'build-ios',       done

exports.registers = registers
