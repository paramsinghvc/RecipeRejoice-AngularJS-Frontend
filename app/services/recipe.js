define(['angular', 'underscore'], function(angular, _) {
    return ['api', '$sanitize',
        function(api, $sanitize) {

            // Constructor of recipe class
            var Recipe = function(data) {
                if (data) {
                    this.id = data.id;
                    this.title = data.title;
                    this.description = data.description;
                    this.ingredients = data.ingredients;
                    this.username = data.username;
                    this.vote = data.vote || 0;
                }

            }

            Recipe.prototype = {
                data: {
                    title: this.title || '',
                    description: this.description || '',
                    ingredients: this.ingredients || '',
                    username: this.username || '',
                    photo: this.photo || '',
                    username: this.username || '',
                    vote: this.vote || ''
                },
                setPhoto: function(photo) {
                    this.photo = photo;
                },
                voteUp: function() {
                    this.vote = this.vote + 1;
                },
                makeFormdata: function(data) {
                    var formData = new FormData();
                    angular.forEach(data, function(value, key) {
                        formData.append(key, value ? (value) : '');
                    })
                    return formData;
                },
                createNewRecipe: function() {

                    return api.post('recipes', {
                        'data': this.makeFormdata(this.data),
                        'contentType': false,
                        'cache': false,
                        'processData': false
                    });
                },
                updateRecipe: function() {

                    var data = _.clone(this.data);
                    angular.extend(data, {
                        _method: 'put'
                    })
                    return api.post('recipes/' + this.data.id, {
                        'data': data
                    })
                }

            }

            // Static Builder
            Recipe.build = function(data) {
                return new Recipe(data);
            };

            Recipe.deleteRecipe = function(recipeId) {
                return api.delete('recipes/' + recipeId);
            };

            Recipe.getRecipe = function(recipeId) {
                return api.get('recipes/' + recipeId);
            };

            Recipe.getAllRecipes = function() {
                return api.get('recipes');
            };

            return Recipe;
        }
    ]
})
