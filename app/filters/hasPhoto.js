define([], function() {
    return [function() {
        return function(photoUrl) {
  
        	var tokens = photoUrl.split('/');
        	var lastToken = tokens[tokens.length -1];
        	var noPhotoUrl= "/assets/images/no_photo.png";
        	 return lastToken ? photoUrl : noPhotoUrl;

        }
    }]
})
