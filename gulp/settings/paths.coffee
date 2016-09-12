paths =
    root_folder   : './'
    readme_file   : 'README.md'
    package_file  : 'package.json'
    bower_file    : 'bower.json'
    ionic_file    : 'ionic.project'
    config_file   : 'config.xml'
    dev_folder    : 'dev/'
    dist_folder   : 'www/'
    index_file    : 'dev/index.html'
    app_files     : 'dev/app/**/*.{js,html}'
    js_files      : 'dev/app/**/*.js'
    js_folder     : 'dev/app/'
    html_files    : 'dev/app/**/*.html'
    scss_files    : 'dev/scss/**/*.scss'
    scss_folder   : 'dev/scss/'
    assets_files  : 'dev/assets/**/*'
    images_local  : 'dev/assets/images'
    images_files  : 'dev/assets/images/**/*.{git,jpg,png,svg}'
    css_folder    : 'dev/assets/stylesheets/'
    css_files     : 'dev/assets/stylesheets/**/*.{css,map}'
    fonts_local   : 'dev/assets/fonts'
    app_folder    : 'www/app/'
    assets_folder : 'www/assets/'
    images_folder : 'www/assets/images/'
    doc_folder    : 'doc/'
    doc_files     : 'doc/**/*'
    server        :
        dev  :
            server :
                baseDir : 'dev/'
                routes  :
                    '/bower_components' : 'bower_components'
            port   : 3000
        doc  :
            server : 'doc/'
            port   : 4000
        dist :
            server : 'www/'
            port   : 5000

exports.paths = paths
