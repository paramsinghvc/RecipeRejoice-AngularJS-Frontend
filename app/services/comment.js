define(['angular', 'underscore'], function(angular, _) {
    return ['api', '$sanitize',
        function(api, $sanitize) {

            var Comment = function(recipeId, commentText) {
                this.recipeId = recipeId;
                this.commentText = commentText;
            }

            Comment.prototype.createComment = function() {

                return api.post('comments', {
                    data: {
                        'recipe_id': this.recipeId,
                        'text': this.commentText
                    }
                });
            }

            Comment.updateComment = function(commentId, commentText) {
                var data = {
                    text: commentText,
                    _method: 'put'
                }
                return api.post('comments/' + commentId, {
                    data: data
                });
            }



            Comment.deleteComment = function(commentId) {
                return api.delete('comments/' + commentId);
            }

            return Comment;
        }
    ]
})
