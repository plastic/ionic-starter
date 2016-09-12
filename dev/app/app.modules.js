/**
 * @namespace App
 * @desc      Root of the application
 */
(function () {
    'use strict';

    angular
        .module('templates', []);

    angular
        .module('ionic-starter', [
            'ionic',
            'angular-storage',
            'ngCordova'
        ]);
}());
