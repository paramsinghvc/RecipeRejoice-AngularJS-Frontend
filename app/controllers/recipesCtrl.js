define(['angular', 'config'], function(angular, config) {
    return ['$scope', 'Recipe', '$location', '$filter', 'Comment',
        function($scope, Recipe, $location, $filter, Comment) {
            var orderBy = '';

            $scope.thumbsBase = config.thumbsBase + 'recipes/';
            $scope.urlBase = $location.path() + '/';


            $scope.$watch('orderBy', function(newVal) {
                orderBy = newVal;
            })

            Recipe.getAllRecipes().then(function(data) {
                $scope.recipes = applyOrder(data, orderBy);

            }, function(err) {
                console.log(err)
            });

            $scope.showRecipe = function(recipeId) {
                $location.path('/recipe/' + recipeId);
            }

            var applyOrder = function(data, orderBy) {
                switch (orderBy) {
                    case 'latestPosted':
                        return $filter('orderBy')(data, '-created_at');
                    case 'topRated':
                        return $filter('orderBy')(data, '-vote');
                    case 'mostCommented':
                        return $filter('orderBy')(data, function(recipe) {
                            return recipe.comments.length;
                        }, true)
                    default:
                        return data;
                }
            }

        }
    ]
})
