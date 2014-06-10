angular.module('PhotoCastService', ['ngResource']).
	factory('Photo', function($resource) {
		return $resource('data/:photoId.json', {}, {
			query: {method:'GET', params:{photoId: "photos"}, isArray: true}
		});
	});