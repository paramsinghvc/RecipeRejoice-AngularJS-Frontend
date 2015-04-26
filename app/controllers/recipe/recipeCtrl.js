define(['angular', 'config'], function(angular, config) {
    return ['$scope', '$location', '$routeParams', '$filter', 'Recipe', 'Comment', '$route', '$compile',
        function($scope, $location, $routeParams, $filter, Recipe, Comment, $route, $compile) {

            $scope.thumbsBase = config.thumbsBase + 'recipes/';
            $scope.imagesBase = config.imagesBase + 'recipes/';
            $scope.urlBase = $location.path();

            Recipe.getRecipe($routeParams.recipeId).then(function(data) {
                $scope.recipe = data.recipe;
            }, function(err) {
                console.log(err);
            });

            $scope.deleteComment = function(commentId) {

                Comment.deleteComment(commentId).then(function(data) {

                    $route.reload();
                })
            }

            $scope.postComment = function() {
                var comment = new Comment($scope.recipe.id, $scope.recipe.newCommentText);

                comment.createComment().then(function(data) {

                    $route.reload();
                })
            }

            $scope.editComment = function(e, commentId) {
                
                var commentInput = angular.element(e.target).parent().parent().find('.commentText');
                var prevInput = commentInput.html();
                console.log(prevInput)
                
                var commentInputClone = commentInput.clone();
                var commentInputHtml = '<input type="text" class="form-control" value="' + prevInput + '" autofocus placeholder="Type and press enter">';

                commentInput.html($compile(commentInputHtml)($scope))
                commentInput.find('input').focus().select();

                commentInput.bind('keyup', function(e) {
                    if (e.which === 27)
                        commentInput.replaceWith(commentInputClone)
                })

                commentInput.bind('keypress', function(e) {

                    if (e.which === 13) {
                        var newCommentText = angular.element(e.target).val();
                        Comment.updateComment(commentId, newCommentText).then(function(res) {
                            console.log(res);
                            commentInput.html(newCommentText);
                        }, function(err) {
                            console.log(err)
                        })
                       
                    }


                })
            }
        }
    ]
})
