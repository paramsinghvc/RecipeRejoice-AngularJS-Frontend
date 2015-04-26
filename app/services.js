define([
    'angular',
    'services/ajax',
    'services/api',
    'services/recipe',
     'services/comment'
], function(
    angular,
    ajax,
    api,
    recipe,
    comment
) {
    angular
        .module('reciperejoice.services', [])
        .factory('ajax', ajax)
        .factory('api', api)
        .factory('Recipe', recipe)
        .factory('Comment', comment)

})
