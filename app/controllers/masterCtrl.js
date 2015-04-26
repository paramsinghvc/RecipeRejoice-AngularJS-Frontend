define(['config'], function(config) {
    return ['$scope', '$rootScope', 'api', '$location',
        function($scope, $rootScope, api, $location) {
            $scope.appTitle = config.appName;
            $scope.currentPage = '/';
            $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
                $scope.currentPage = $location.path();

            });
            $scope.itemClass = function(item) {

                var res = $scope.currentPage.indexOf(item);
                return ((res == -1) ? '' : 'active');
            }
        }
    ]
})
