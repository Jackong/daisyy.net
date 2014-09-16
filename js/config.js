/**
 * Created by daisy on 14-9-16.
 */
angular.module('daisy.config', ['ngRoute', 'daisy.controller'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'partial/home.html',
                controller: 'HomeCtrl'
            })
            .when('/about', {
                templateUrl: 'partial/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'partial/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({redirectTo: '/home'});
}]);