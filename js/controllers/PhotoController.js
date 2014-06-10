function PhotoListCtrl($scope, Photo){
	$scope.photos = Photo.query();
	console.log($scope.photos);
}

function PhotoDetailCtrl($scope, $routeParams, Photo){
	$scope.photo = Photo.get({photoId: $routeParams.photoId}, function(photo){
		//something
	});

}