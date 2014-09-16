/**
 * Created by daisy on 14-9-16.
 */
angular.module('daisy.controller', [])
    .controller('AppCtrl', function ($scope) {
        $scope.nav = function (which) {
            $scope.active = {
                home: '',
                about: '',
                contact: ''
            };
            $scope.active[which] = 'active';
        };
        $scope.nav('home');
    })
    .controller('HomeCtrl', function ($scope) {

    })
    .controller('AboutCtrl', function ($scope) {

    })
    .controller('ContactCtrl', function ($scope) {

    });