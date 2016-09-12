(function () {
    'use strict';

    angular
        .module('ionic-starter')
        .config(AppConfig);

    AppConfig.$inject = [
        '$httpProvider',
        '$urlRouterProvider',
        '$stateProvider'
    ];

    /**
     * @namespace Config
     * @desc      Main settings of the application
     * @memberOf  App
     */
    function AppConfig ($httpProvider, $urlRouterProvider, $stateProvider) {
        $httpProvider.interceptors.push('InterceptorFactory');
        $urlRouterProvider.otherwise('/base');

        $stateProvider
        .state('base', {
            url:         '/base',
            templateUrl: 'app/partials/base.html',
            controller:  'BaseController'
        });
    }
}());
