(function () {
    'use strict';

    angular
        .module('ionic-starter')
        .directive('browseTo', BrowseTo);

    BrowseTo.$inject = [ '$ionicGesture' ];

    /**
     * @namespace BrowseTo
     * @desc      Open a url in a window of the browse
     * @example   <button browse-to="http://paulofrontend.com.br"></button>
     * @memberOf  App.Directives
     */
    function BrowseTo ($ionicGesture) {
        var directive = {
            restrict: 'A',
            link: Link
        };

        return directive;
        ////////////////////

        /**
         * @desc      Binds the parameter url in window of browser
         * @param     {Object} $scope Data from scope
         * @param     {Object} $element Data from element
         * @param     {Object} $attrs Data from attr of element
         * @memberOf  App.Directives.BrowseTo
         */
        function Link ($scope, $element, $attrs) {
            $ionicGesture.on('tap', function () { gestureTap($attrs.browseTo); }, $element);
        }

        /**
         * @desc      Open a window with the parameter
         * @param     {Object} url External url
         * @memberOf  App.Directives.BrowseTo
         */
        function gestureTap (url) {
            window.open(encodeURI(url), '_system', 'location=yes');
        }
    }
}());
