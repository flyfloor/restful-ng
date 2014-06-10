angular.module('PhotoCast', ['ngRoute', 'PhotoCastService']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/photos', {templateUrl: 'views/photo-list.html',   controller: PhotoListCtrl}).
      when('/photos/:photoId', {templateUrl: 'views/photo.html', controller: PhotoDetailCtrl}).
      otherwise({redirectTo: '/photos'});
}]);