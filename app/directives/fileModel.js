define(
    [],
    function() {
        return ['$parse', function($parse) {
            return {
                restrict: 'E',
                template: '<input type="file" class="imageUpload">',
                replace: true,
                link: function(scope, element, attrs) {

                    element.bind('change', function() {

                        var fileModel = attrs.photomodel;

                        var tokens = fileModel.split("."); /* tokens = ['recipe','photo'] */
                        scope[tokens[0]][tokens[1]] = element[0].files[0]; /* $scope.recipe.photo = {} */


                        var file = element[0].files[0];
                        if(file.size/(1024*1024) > 1)
                            alert('The image size is more than 2 MB. Please upload a file of less than this.')
                        scope.$apply();
                        var reader = new FileReader();

                        reader.onloadend = function() {
                            element[0].style.backgroundImage = "url('" + reader.result + "')";
                        }

                        if (file) {
                            reader.readAsDataURL(file); //reads the data as a URL
                        }

                    });
                }
            };
        }]
    })
