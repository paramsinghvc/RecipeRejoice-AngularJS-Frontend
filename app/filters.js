define([
    'angular',
    'filters/hasPhoto'
    
], function(
	angular,
	hasPhoto
	) {
    angular
        .module('reciperejoice.filters', [])
        .filter('hasPhoto', hasPhoto)

})
