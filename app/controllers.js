define([
        'angular',
        'controllers/masterCtrl',
        'controllers/homeCtrl',
        'controllers/recipesCtrl',
        'controllers/recipe/recipeCtrl',
        'controllers/recipe/recipeEditCtrl',
        'controllers/recipe/recipeNewCtrl'
    ],
    function(
        angular,
        masterCtrl,
        homeCtrl,
        recipesCtrl,
        recipeCtrl,
        recipeEditCtrl,
        recipeNewCtrl
    ) {
        angular
            .module('reciperejoice.controllers', [])
            .controller('masterCtrl', masterCtrl)
            .controller('homeCtrl', homeCtrl)
            .controller('recipesCtrl', recipesCtrl)
            .controller('recipeCtrl', recipeCtrl)
            .controller('recipeEditCtrl', recipeEditCtrl)
            .controller('recipeNewCtrl', recipeNewCtrl)
    })
