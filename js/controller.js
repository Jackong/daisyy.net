/**
 * Created by daisy on 14-9-16.
 */
angular.module('daisy.controller', [])
    .controller('AppCtrl', function ($scope) {
         $scope.nav = function (which) {
            $scope.active = {};
            $scope.active[which] = 'active';
        };
    })
    .controller('HomeCtrl', function ($scope) {
        $scope.$parent.nav('home');
    })
    .controller('ToolsCtrl', function ($scope) {
        $scope.$parent.nav('tools');
    })
    .controller('GamesCtrl', function ($scope) {
        $scope.$parent.nav('games');
    })
    .controller('AppsCtrl', function ($scope) {
        $scope.$parent.nav('apps');
    })
    .controller('AboutCtrl', function ($scope) {
        $scope.$parent.nav('about');
    })
    .controller('ContactCtrl', function ($scope) {
        $scope.$parent.nav('contact');
    });