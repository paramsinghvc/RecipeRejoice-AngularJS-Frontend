define(['angular', 'app', 'templates'], function(angular, app, templates) {
    angular.module('reciperejoice')
        .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
                $routeProvider.
                when('/', {
                    templateUrl: 'home',
                    controller: 'homeCtrl'

                })
            }
        ])
})
