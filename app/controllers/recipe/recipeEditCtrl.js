define(['angular', 'config'], function(angular, config) {
    return ['$scope', '$location', '$routeParams', '$filter', 'Recipe',
        function($scope, $location, $routeParams, $filter, Recipe) {

            $scope.thumbsBase = config.thumbsBase + 'recipes/';
            $scope.imagesBase = config.imagesBase + 'recipes/';
            $scope.urlBase = $location.path() + '/';

            var recipe = Recipe.build();
            Recipe.getRecipe($routeParams.recipeId).then(function(data) {
                $scope.recipe = data.recipe;
                recipe.data = $scope.recipe;
            }, function(err) {
                console.log(err);
            });

            $scope.updateData = function() {
                recipe.updateRecipe().then(function() {
                    $location.path('/');
                }, function(err) {
                    console.log(err);
                });
            }

            $scope.deleteRecipe = function() {
                Recipe.deleteRecipe($scope.recipe.id).then(function() {
                    $location.path('/');
                }, function(err) {
                    console.log(err);
                });
            }

            $scope.changeVote = function(mode) {
                if (mode == 1) {
                    $scope.recipe.vote++;
                } else {
                    $scope.recipe.vote--;
                }
            }
        }
    ]
})
