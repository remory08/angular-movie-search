var app = angular.module("movieSearch", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/:something', {
      templateUrl: 'partials/movies.html',
      controller: 'movies'
    })
    .when('/:id/show', {
      templateUrl: 'partials/show.html',
      controller: 'movie'
    })
    .otherwise({
      templateUrl: 'partials/404.html'
    })
})
