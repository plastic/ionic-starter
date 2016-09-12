(function () {
    'use strict';

    angular
        .module('ionic-starter')
        .run(AppRun);

    AppRun.$inject = [
        '$rootScope',
        '$timeout',
        'AnalyticsFactory',
        'DataFactory',
        '$ionicPlatform',
        '$cordovaNetwork',
        '$cordovaDevice'
    ];

    /**
     * @namespace Run
     * @desc      Main control for device of the application
     * @memberOf  App
     */
    function AppRun ($rootScope, $timeout, AnalyticsFactory, DataFactory, $ionicPlatform, $cordovaNetwork, $cordovaDevice) {
        $ionicPlatform.ready(deviceReady);
        $ionicPlatform.registerBackButtonAction(backButtonPress, 100);

        $rootScope.$on('$cordovaNetwork:online',  function () { networkStatus(true);   });
        $rootScope.$on('$cordovaNetwork:offline', function () { networkStatus(false);  });

        $rootScope.$on('app.exit', appExit);
        ////////////////////

        /**
         * @desc     Sets the default behavior of device when the device is ready
         * @memberOf App.Run
         */
        function deviceReady () {
            keyboardDefault();
            statusbarDefault();
            deviceUUID();

            AnalyticsFactory.init('UA-XXXXXX-XX');

            $rootScope.$broadcast('device.ready');
        }

        /**
         * @desc     Sets the default behavior for the Keyboard
         * @memberOf App.Run
         */
        function keyboardDefault () {
            try {
                cordova.plugins.Keyboard.disableScroll(false);
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            catch (error) { console.log(error); }
        }

        /**
         * @desc     Sets the default behavior for the Status Bar
         * @memberOf App.Run
         */
        function statusbarDefault () {
            try {
                StatusBar.styleDefault();
                StatusBar.hide();

                $timeout(function () {
                    statusbarTransparent.enable();
                    StatusBar.show();
                }, 100);
            }
            catch (error) { console.log(error); }
        }

        /**
         * @desc     Saves the device id
         * @memberOf App.Run
         */
        function deviceUUID () {
            try {
                DataFactory.request.UUID = $cordovaDevice.getUUID();
            }
            catch (error) { console.log(error); }
        }

        /**
         * @desc     Sends broadcast when hardware back button is pressed
         * @memberOf App.Run
         */
        function backButtonPress () {
            $rootScope.$broadcast('back.press');
        }

        /**
         * @desc     Saves network data status when the network is online
         * @memberOf App.Run
         */
        function networkStatus (status) {
            DataFactory.request.network = status;
        }

        /**
         * @desc     Closes the application
         * @memberOf App.Run
         */
        function appExit () {
            navigator.app.exitApp();
        }
    }
}());
