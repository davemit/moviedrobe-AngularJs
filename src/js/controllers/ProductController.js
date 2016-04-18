app.controller('ProductController', ['$scope', '$window', 'products','misc', '$routeParams', function($scope, $window, products, misc, $routeParams) {
 
  products.success(function(data) {
  	console.log($routeParams);
  $scope.product =  data.results[$routeParams.productId];
  });

  misc.success(function(data) {
    $scope.miscs = data.slice(0,12);
   
	});
  $scope.gotoTop = function (){
  	$location.hash('top');
  	$anchorScroll();
	};
  
  $scope.currentBookIndex = parseInt($routeParams.productId);
  $window.scrollTo(0,0);
  
}]);
