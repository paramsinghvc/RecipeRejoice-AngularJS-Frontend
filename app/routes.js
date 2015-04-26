define(['angular', 'app', 'templates'], function(angular, app, templates) {
    angular.module('reciperejoice')
        .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {

                $routeProvider.
                when('/', {
                    templateUrl: 'home',
                    controller: 'homeCtrl'

                }).
                when('/recipe/:recipeId', {
                    templateUrl: 'recipe',
                    controller: 'recipeCtrl'

                }).
                when('/recipe/:recipeId/edit', {
                    templateUrl: 'recipeEdit',
                    controller: 'recipeEditCtrl'

                }).
                when('/recipeCreate', {
                    templateUrl: 'recipeNew',
                    controller: 'recipeNewCtrl'

                })

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
            }
        ])
})
