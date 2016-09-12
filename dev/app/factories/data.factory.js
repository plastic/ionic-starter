(function () {
    'use strict';

    angular
        .module('ionic-starter')
        .factory('DataFactory', DataFactory);

    /**
     * @namespace Data
     * @desc      Saves the data that will move across the application
     * @memberOf  App.Factories
     */
    function DataFactory () {
        var data = {};
        ////////////////////

        var factory = {
            request: data
        };

        return factory;
    }
}());
