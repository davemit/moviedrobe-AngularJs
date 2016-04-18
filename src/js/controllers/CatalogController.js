app.controller('CatalogController', ['$scope','$window','movies','products' ,function($scope, $window, movies, products) {
	movies.success(function(data) {
    $scope.trending = data.results;
    console.log("success");
  });

	products.success(function(data) {
    $scope.allProducts = data.results.slice(0,8);
    $scope.loadMore = function () {
    	$scope.allProducts = data.results.slice(0, $scope.allProducts.length + 4);
	 }

  });
	$window.scrollTo(0,0);


}]);
