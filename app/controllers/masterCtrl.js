define(['config'], function(config) {
    return ['$scope', '$rootScope', 'api', 
    function($scope, $rootScope, api) {
    	$scope.appTitle = config.appName;
    }]
})
