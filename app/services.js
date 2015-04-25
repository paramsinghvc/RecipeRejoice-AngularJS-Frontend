define([
    'angular',
    'services/ajax',
    'services/api',
    'services/recipe'
], function(
    angular,
    ajax,
    api,
    recipe
) {
    angular
        .module('reciperejoice.services', [])
        .factory('ajax', ajax)
        .factory('api', api)
        .factory('recipe', recipe)

})
