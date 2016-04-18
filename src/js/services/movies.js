app.factory('movies', ['$http', function($http) { 
  return $http.get('https://api.themoviedb.org/3/discover/movie?api_key=c997d3911af9ad6104bccaf2fccb777d&primary_release_date.gte=2016-01-01&primary_release_date.lte=2017-01-01&sort_by=popularity.desc') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);