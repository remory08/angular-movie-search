var app = angular.module("movieSearch", ["ngRoute"]);

// function configFn($routeProvider, $locationProvider) {
//   $routeProvider
//     .when('/:something', {
//       templateUrl: 'partials/movies.html',
//       controller: 'movies'
//     })
//     .when('/:id/show', {
//       templateUrl: 'partials/show.html',
//       controller: 'movie'
//     })
//     .otherwise({
//       redirectTo: '/'
//     })
// }
//
// app.config(  ['$routeProvider', '$locationProvider', configFn])

function configFn(o){o.when("/:something",{templateUrl:"partials/movies.html",controller:"movies"}).when("/:id/show",{templateUrl:"partials/show.html",controller:"movie"}).otherwise({redirectTo:"/"})}app.config(["$routeProvider","$locationProvider",configFn]);
