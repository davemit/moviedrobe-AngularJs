app.controller('MovieController', ['$scope', '$window', 'movies','misc', '$routeParams', function($scope, $window, movies, misc, $routeParams) {
  // Your code here
  movies.success(function(data) {
  	console.log($routeParams);
  $scope.movie =  data.results[$routeParams.movieId];
  });

  misc.success(function(data) {
    $scope.miscs = data.slice(0,12);
   
	});
  $scope.gotoTop = function (){
  	$location.hash('top');
  	$anchorScroll();
	};
  
  $scope.currentMovieId = parseInt($routeParams.movieId);
  $window.scrollTo(0,0);
  
}]);