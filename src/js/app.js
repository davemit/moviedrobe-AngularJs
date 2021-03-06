var app = angular.module('ReaderApp', ['ngRoute', 'slick', 'infinite-scroll']);



app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/drobe', { 
      controller: 'CatalogController', 
      templateUrl: 'views/catalog.html' 
    }) 
    .when('/drobe/movie/:movieId', { 
      controller: 'MovieController', 
      templateUrl: 'views/movie.html' 
    })
    .when('/drobe/:productId', { 
      controller: 'ProductController', 
      templateUrl: 'views/product.html' 
    })     
       
    .otherwise({ 
      redirectTo: '/drobe' 
    }); 
});


app.filter('searchFor', function(){

  return function(arr, searchString){

    if(!searchString){
      return [];
    }

    var result = [];

    searchString = searchString.toLowerCase();

    // Using the forEach helper method to loop through the array
    angular.forEach(arr, function(item){
     
      if(item.title.toLowerCase().indexOf(searchString) !== -1){
        
        result.push(item);
      }

    });

    return result;
  };

});


;
//Directives
app.directive('searchBox', function() {
  return {
    restrict: 'E',
    scope: { 
      products: '=' 
    }, 
    templateUrl: 'js/directives/searchBox.html'
  }
});
/////

app.factory('products', ['$http', function($http) { 
  return $http.get('https://api.themoviedb.org/3/discover/movie?api_key=c997d3911af9ad6104bccaf2fccb777d&sort_by=popularity.desc') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

app.factory('misc', ['$http', function($http) { 
  return $http.get('http://jsonplaceholder.typicode.com/photos') 
            .success(function(data) {
            console.log("here"); 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

