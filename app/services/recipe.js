define(['angular', 'underscore'], function(angular, _) {
    return ['api',
        function(api) {

            var recipeModel = {
                // Constructor of recipe class
                function Recipe(title, description, ingredients, username) {
                    this.title = title;
                    this.description = description;
                    this.ingredients = ingredients;
                    this.username = username;
                }

                Recipe.prototype.vote = 0;
                Recipe.prototype.data = {
                    title: this.title || '',
                    description: this.description || '',
                    ingredients: this.ingredients || '',
                    username: this.username || '',
                    photo: this.photo || '',
                    username: this.username || ''
                };

                Recipe.prototype.setPhoto = function(photo) {
                    this.photo = photo;
                };

                Recipe.prototype.voteUp = function() {
                    this.vote = this.vote + 1;
                };

                Recipe.prototype.getAllRecipes = function() {
                    return api.get('recipes');
                }

                Recipe.prototype.createNewRecipe = function() {
                    return api.post('recipes', {
                        'data': this.data,
                        'contentType': false,
                        'cache': false,
                        'processData': false
                    });
                };

                Recipe.prototype.updateRecipe = function(recipeId){

                	var data = _.clone(this.data);
                	angular.extend(data,{
                		_method : 'put'
                	})
                	return api.post('recipes/'+ recipeId, {
                		'data' : data
                	})
                }

                Recipe.prototype.deleteRecipe = function(recipeId){
                	return api.delete('recipes/'+ recipeId);
                }

                // Static Builder
                Recipe.build = function(data) {
                    return new Recipe(
                        data.title,
                        data.description,
                        data.ingredients,
                        data.username
                    );
                }
            }

            return recipeModel;
        }
    ]
})
