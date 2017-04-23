+function () {
	'use strict';

    angular.module('SmartMirror').factory('BlindsService', function BlindsService($http) {
        let service = {};

        //
        service.sendCommandToBlind = function (state) {
            console.log(state);
        };

        /*function updateHue(i, index, setting) {
            var update = {};
            update["transitiontime"] = 10;

            update['on'] = setting['on'];
            if (setting['on']) {
                update['hue'] = setting['colorHSV'][0];
                update['sat'] = setting['colorHSV'][1];
                update['bri'] = Math.round(setting['colorHSV'][2] * setting['brightness']);
            }

            $http.put('http://' + config.light.settings.hueIp + '/api/' + config.light.settings.hueUsername + "/groups/" + config.light.setup[index].targets[i].id + "/action", update)
                .success(function (data, status) {
                    console.log(status, data);
                })
        }*/

        return service;
    });
}();