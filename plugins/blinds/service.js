+function () {
    'use strict';

    angular.module('SmartMirror').factory('BlindsService', function BlindsService($http) {
        return {
            sendCommandToBlind: function (state) {
                let data = {};
                data[config.commands.action] = config.commands[state];

                $http
                    .put("http://" + config.blinds.ip, data)
                    .then((data, status) => {
                        console.log(status, data);
                    }, (response) => {
                        console.log('error ', response);
                    });
            }
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
    });
}();