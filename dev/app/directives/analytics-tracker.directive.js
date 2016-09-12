(function () {
    'use strict';

    angular
        .module('ionic-starter')
        .directive('analyticsTracker', AnalyticsTracker);

    AnalyticsTracker.$inject = [ 'AnalyticsFactory' ];

    /**
     * @namespace AnalyticsTracker
     * @desc      Open a url in a window of the browse
     * @example   <button analytics ga-category="'SomeCategory'" ga-event="'SomeEvent'" ga-label="'SomeLabel'"></button>
     * @memberOf  App.Directives
     */
    function AnalyticsTracker (AnalyticsFactory) {
        return {
            restrict : 'A',
            scope    : {
                onGaCategory : '=gaCategory',
                onGaEvent    : '=gaEvent',
                onGaLabel    : '=gaLabel'
            },
            link     : Link
        };

        /**
         * @desc      Binds the parameter url in window of browser
         * @param     {Object} $scope Data from scope
         * @param     {Object} $element Data from element
         * @param     {Object} $attrs Data from attr of element
         * @memberOf  App.Directives.AnalyticsTracker
         */
        function Link ($scope, $element) {
            $element.bind('click', function () { gaTrack($scope); });
        }

        /**
         * @desc      Sends data to AnalyticsFactory
         * @param     {Object} $scope Data from scope
         * @memberOf  App.Directives.AnalyticsTracker
         */
        function gaTrack ($scope) {
            var params = {
                category : $scope.onGaCategory,
                event    : $scope.onGaEvent,
                label    : $scope.onGaLabel
            };

            try { AnalyticsFactory.track(params); }
            catch (error) { console.log(error); }
        }
    }
}());
