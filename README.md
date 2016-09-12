# Ionic Starter

> A better way to start developing hybrid apps

[![Build Status](https://travis-ci.org/paulovitorwd/ionic-starter.svg?branch=master)](https://travis-ci.org/paulovitorwd/ionic-starter) [![devDependency Status](https://david-dm.org/paulovitorwd/ionic-starter/dev-status.svg)](https://david-dm.org/paulovitorwd/ionic-starter#info=devDependencies)

This project aims to streamline starting an application in Ionic

### Features

###### Added plugins
- [cordova-plugin-inappbrowser](https://www.npmjs.com/package/cordova-plugin-inappbrowser)
- [cordova-plugin-google-analytics](https://github.com/danwilson/google-analytics-plugin)
- [cordova-plugin-network-information](https://www.npmjs.com/package/cordova-plugin-network-information)
- [cordova-plugin-network-splashscreen](https://www.npmjs.com/package/cordova-plugin-splashscreen)
- [cordova-plugin-statusbar](https://github.com/apache/cordova-plugin-statusbar)
- [net.ekuwang.cordova.plugin.statusbar](https://github.com/ekuwang/cordova-plugin-statusbar)

###### Added for development
- Access cordova features with [ngCordova](http://ngcordova.com/)
- Save device data with [Angular storage](https://github.com/auth0/angular-storage)
- Gulp modularized using [Coffeescript](http://coffeescript.org/)
- Sass modularized using [Compass](http://compass-style.org/)
- Images optimization with [Imagemin](https://www.npmjs.com/package/gulp-image-optimization)
- Checking javascript with [JSHint](http://jshint.com/)
- Javascript compilation with [Uglify](https://www.npmjs.com/package/gulp-uglify)
- Generate javascript documentation with [JSDoc](http://usejsdoc.org/)
- Livereload with [Browser Sync](https://www.browsersync.io/)
- Good practice with [Angular style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

### Dependencies

There are dependencies required for this project, then to install them or update them with [NodeJS and your NPM](https://nodejs.org/en/) and [Ruby](http://rubyinstaller.org/)(for Windows) already installed, run the commands:

    npm install -g cordova ionic gulp bower coffee-script
    gem install sass compass

### Installation

For the install all dependencies, run the command:

    npm install

This will:  
- Create the the "www" folder
- Install the NPM packages
- Install the Bower packages
- Install the Ionic hooks
- Install the Ionic platforms
- Install the Cordova plugins
- Show the Gulp tasks

### Structure

    ├── README.md          - Documentation of project  
    ├── ionic.project      - Definitions for Ionic  
    ├── config.xml         - Device configuration  
    ├── package.json       - Environment dependencies management by NPM  
    ├── bower.json         - Application dependencies management by Bower  
    ├── gulpfile.js        - Initiation of tasks  
    ├── .gitignore         - Tracker skipped files  
    ├── .travis.yml        - Definitions for environment  
    ├── .editorconfig      - Definitions for general syntax code  
    ├── node_modules/      - Development packages  
    ├── bower_components/  - Libraries managed by Bower  
    ├── gulp/              - Configuration of Gulp tasks  
    ├── platforms/         - Targeted operating systems  
    ├── plugins/           - Cordova plugins  
    ├── hooks/             - Cordova lifecycle hooks  
    ├── resources/         - Scaffolded placeholder icons and splashscreens  
    ├── dev/               - Application for development  
    |   ├── index.html     - Main application entry point  
    |   ├── templates.js   - Cache for views  
    │   ├── app/           - Custom AngularJS  
    │   ├── scss/          - SCSS modularized  
    │   ├── assets/        - Accessories files  
    ├── .sass-cache/       - Cached by Compass  
    ├── doc/               - Javascript documentation  
    ├── www/               - Application for distribuition

### Workflow

Before everthing, fill the data object **project.new** in **gulp/settings/project.coffee** file and run the command:

    $ gulp config:start

This will set all settings to your project needs, after you can use any of the following commands:

| Commands                    | Result                                                     |
| --------------------------- |:----------------------------------------------------------:|
|`$ gulp compile:dev`         | Compilation of the files for development                   |
|`$ gulp compile:clone`       | Compilation of the files for cloning of the development    |
|`$ gulp compile:dist`        | Compilation of the files for distribuition                 |
|`$ gulp serve:dev`           | Watch the development in browser with livereload           |
|`$ gulp serve:doc`           | Watch the documentation in browser with livereload         |
|`$ gulp serve:dist`          | Shows the distribuition in browser                         |
|`$ gulp emulate:dev:android` | Cloning the development and emulates the App in Android    |
|`$ gulp emulate:dist:android`| Compiles the distribuition and emulates the App in Android |
|`$ gulp emulate:dev:ios`     | Cloning the development and emulates the App in IOS        |
|`$ gulp emulate:dist:ios`    | Compiles the distribuition and emulates the App in IOS     |
|`$ gulp run:dev:android`     | Cloning the development and run the App in Android         |
|`$ gulp run:dist:android`    | Compiles the distribuition and run the App in Android      |
|`$ gulp run:dev:ios`         | Cloning the development and run the App in IOS             |
|`$ gulp run:dist:ios`        | Compiles the distribuition and run the App in IOS          |
|`$ gulp build:android`       | Compiles the distribuition and build the App for Android   |
|`$ gulp build:ios`           | Compiles the distribuition and build the App for IOS       |

### License

[MIT License](http://opensource.org/licenses/mit-license.php)

### Be happy!

![alt tag](http://38.media.tumblr.com/c578aeebdd39a289baa9332f484405cb/tumblr_ml41sla88u1rx9lfuo1_500.gif)
