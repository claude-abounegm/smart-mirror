+function () {
    'use strict';

    angular
        .module('SmartMirror')
        .factory('HVACService', function HVACService($http) {
            return {
                sendCommand: function (state) {
                    $http
                        .put("http://" + config.blinds.ip + "/api/hvac", {
                            action: state
                        })
                        .then((data, status) => {
                            console.log(status, data);
                        }, (response) => {
                            console.log('error ', response);
                        });
                }
            };
        });
}();