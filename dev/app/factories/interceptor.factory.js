(function () {
    'use strict';

    angular
        .module('ionic-starter')
        .service('InterceptorFactory', InterceptorFactory);

    InterceptorFactory.$inject = [ '$rootScope' ];

    /**
     * @namespace Interceptor
     * @desc      Intercepts all requests
     * @memberOf  App.Factories
     */
    function InterceptorFactory ($rootScope) {
        var factory = {
            request: function (success) {
                return requestSuccess(success);
            },
            response: function (success) {
                return responseSuccess(success);
            },
            requestError:  function (error) {
                return requestError(error);
            },
            responseError: function (error) {
                return responseError(error);
            }
        };

        return factory;
        ////////////////////

        /**
         * @desc     Executes when the request is success
         * @param    {Object} success Data of the success in request
         * @returns  {Object} success Data of the success in request
         * @memberOf App.Factories.Interceptor
         */
        function requestSuccess (success) {
            $rootScope.$broadcast('request.success', success);
            return success;
        }

        /**
         * @desc     Executes when the response is success
         * @param    {Object} success Data of the response in request
         * @returns  {Object} success Data of the response in request
         * @memberOf App.Factories.Interceptor
         */
        function responseSuccess (success) {
            $rootScope.$broadcast('response.success', success);
            return success;
        }

        /**
         * @desc     Executes when the request is error
         * @param    {Object} error Data of the error in request
         * @returns  {Object} error Data of the error in request
         * @memberOf App.Factories.Interceptor
         */
        function requestError (error) {
            $rootScope.$broadcast('request.error', error);
            return error;
        }

        /**
         * @desc     Executes when the response is error
         * @param    {Object} error Data of the error in response
         * @returns  {Object} error Data of the error in response
         * @memberOf App.Factories.Interceptor
         */
        function responseError (error) {
            $rootScope.$broadcast('response.error', error);
            return error;
        }
    }
})();
