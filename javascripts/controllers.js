app.controller('movies', function($scope, $http, $routeParams) {
  $scope.movieData;
  $scope.submit = function(searchTerm) {
    $http.get('http://www.omdbapi.com/?s=' + searchTerm).then(function(data){
    $scope.movieData = data.data.Search;
    console.log($scope.movieData);
    });
  }
})

app.controller('movie', function($scope, $routeParams, $http) {
  $scope.movie;
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function(data) {
    console.log(data.data);
    $scope.movie = data.data;
  })
})
