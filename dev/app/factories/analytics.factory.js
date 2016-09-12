(function () {
    'use strict';

    angular
        .module('ionic-starter')
        .factory('AnalyticsFactory', AnalyticsFactory);

    AnalyticsFactory.$inject = [
        'DataFactory',
        '$cordovaGoogleAnalytics'
    ];

    /**
     * @namespace Analytic
     * @desc      Trackers the events of application
     * @memberOf  App.Factories
     */
    function AnalyticsFactory (DataFactory, $cordovaGoogleAnalytics) {
        var factory = {
            init  : function (gaId) {
                init(gaId);
            },
            track : function (params) {
                track(params);
            }
        };

        return factory;
        ////////////////////

        /**
         * @desc      Starts analytics tracker
         * @param     {String} gaId Id from analytics tracker
         * @memberOf  App.Factories.Analytic
         */
        function init (gaId) {
            try {
                $cordovaGoogleAnalytics.startTrackerWithId(gaId);
                $cordovaGoogleAnalytics.setUserId(DataFactory.request.UUID);
            }
            catch (error) { console.log(error); }
        }

        /**
         * @desc      Sends data to analytics
         * @param     {Object} params Params from analytics tracker
         * @memberOf  App.Factories.Analytic
         */
        function track (params) {
            try {
                $cordovaGoogleAnalytics.trackEvent(params.gategory, (params.event || 'Clique'), params.label);
            }
            catch (error) { console.log(error); }
        }
    }
}());
