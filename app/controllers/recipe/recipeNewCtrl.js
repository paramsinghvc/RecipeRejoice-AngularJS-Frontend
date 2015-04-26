define(['angular', 'config'], function(angular, config) {
    return ['$scope', '$location', 'Recipe',
        function($scope, $location, Recipe) {

            $scope.urlBase = $location.path() + '/';
            $scope.recipe = {};

            var recipe = Recipe.build();
            recipe.data = $scope.recipe;

            $scope.myImage = '';
            $scope.recipe.photo = '';

            var handleFileSelect = function(evt) {
                var file = evt.currentTarget.files[0];
                var reader = new FileReader();
                reader.onload = function(evt) {
                    $scope.$apply(function($scope) {
                        $scope.myImage = evt.target.result;
                    });
                };
                reader.readAsDataURL(file);
            };
            angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);

            $scope.saveData = function() {

                recipe.createNewRecipe().then(function(res) {
                    if (res.errors) {
                        $scope.errorMsg = res.errors; // Backend Validation Errors
                    } else {
                        $location.path('/recipe/' + res.recipe.id);
                    }

                }, function(err) {
                    console.log(err)
                });
            }

            $scope.changeVote = function(mode) {
                if (mode == 1) {
                    $scope.recipe.vote++;
                } else {
                    if ($scope.recipe.vote == 0) return;
                    $scope.recipe.vote--;
                }
            }
        }
    ]
})
