+function () {
    'use strict';

    angular
        .module('SmartMirror')
        .factory('BlindsService', function BlindsService($http) {
            return {
                sendCommand: function (state) {
                    $http
                        .put("http://" + config.blinds.ip + "/api/blinds", {
                            action: config.blinds.commands[state]
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