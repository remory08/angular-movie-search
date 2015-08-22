// function moviesFn ($scope, $http, $routeParams) {
//   moviesFn.$inject =
//   $scope.movieData;
//   $scope.submit = function(searchTerm) {
//     $http.get('http://www.omdbapi.com/?s=' + searchTerm).then(function(data){
//     $scope.movieData = data.data.Search;
//     console.log($scope.movieData);
//     });
//   }
// }
// app.controller('movies', ['$scope', '$http', '$routeParams', moviesFn]);
//
//
//
// function movieFn ($scope, $routeParams, $http) {
//   movieFn.$inject =
//   $scope.movie;
//   $http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function(data) {
//     $scope.movie = data.data;
//   })
// }
// app.controller('movie', ['$scope', '$routeParams', '$http', movieFn]);
function moviesFn(o,t){moviesFn.$inject=o.movieData,o.submit=function(e){t.get("http://www.omdbapi.com/?s="+e).then(function(t){o.movieData=t.data.Search,console.log(o.movieData)})}}function movieFn(o,t,e){movieFn.$inject=o.movie,e.get("http://www.omdbapi.com/?i="+t.id).then(function(t){o.movie=t.data})}app.controller("movies",["$scope","$http","$routeParams",moviesFn]),app.controller("movie",["$scope","$routeParams","$http",movieFn]);
