define([
        'angular',
        'app',
        'text!views/home.html',
        'text!views/nav.html',
        'text!views/recipes.html',
        'text!views/recipe/recipe.html',
        'text!views/recipe/recipeEdit.html',
        'text!views/recipe/recipeNew.html'
    ],
    function(
        angular,
        app,
        homeHtml,
        navHtml,
        recipesHtml,
        recipeHtml,
        recipeEditHtml,
        recipeNewHtml
    ) {
        angular.module('reciperejoice').run(['$templateCache', function($t) {
            $t.put('home', homeHtml);
            $t.put('nav', navHtml);
            $t.put('recipes', recipesHtml);
            $t.put('recipe', recipeHtml);
            $t.put('recipeEdit', recipeEditHtml);
            $t.put('recipeNew', recipeNewHtml);
        }])
    })
