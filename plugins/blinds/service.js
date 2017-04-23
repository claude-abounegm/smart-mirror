+function () {
    'use strict';

    angular.module('SmartMirror').factory('BlindsService', function BlindsService($http) {
        return {
            sendCommandToBlind: function (state) {
                let data = {};
                data[config.blinds.commands.action] = config.blinds.commands[state];

                $http
                    .put("http://" + config.blinds.ip, data)
                    .then((data, status) => {
                        console.log(status, data);
                    }, (response) => {
                        console.log('error ', response);
                    });
            }
        };
    });
}();