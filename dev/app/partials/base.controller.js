(function () {
    'use strict';

    angular
        .module('ionic-starter')
        .controller('BaseController', BaseController);

    BaseController.$inject = [ '$scope' ];

    /**
     * @namespace Base
     * @desc      Control the scope of the base
     * @memberOf  App.Controllers
     */
    function BaseController ($scope) {
        $scope.title = 'Ionic Starter';

        $scope.$on('device.ready', deviceReady);
        $scope.$on('back.press',   backPress);

        // $scope.$on('request.success',  function () { requestRunning(true);  });
        // $scope.$on('response.success', function () { requestRunning(false); });
        ////////////////

        /**
         * @desc     Hides the splashscreen
         * @memberOf App.Controllers.Base
         */
        function deviceReady () {
            try {
                navigator.splashscreen.hide();
            }
            catch (error) { console.log(error); }
        }

        /**
         * @desc     Send a reverse broadcast to exit of app
         * @memberOf App.Controllers.Base
         */
        function backPress () {
            $scope.$emit('app.exit');
        }

        // function requestRunning (status) {}
    }
}());
