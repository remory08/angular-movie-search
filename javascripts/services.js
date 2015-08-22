// pp.factory('omdbapi', ["$http", "$q", function($http, $q) {
//   var omdbservice = {};
//   var baseUrl = "http://www.omdbapi.com/?plot=short&r=json&s=";
//   var searchTerm = '';
//
//   omdbservice.setSearchTerm = function(term) {
//     searchTerm = encodeURIComponent(term);
//   }
//
//   omdbservice.getSearchTerm = function() {
//     return decodeURIComponent(searchTerm);
//   }
//
//   omdbservice.search = function(term) {
//     if (term !== undefined) {
//       omdbservice.setSearchTerm(term);
//     }
//
//     var url = baseUrl + searchTerm;
//
//     var deferred = $q.defer();
//
//     $http.get(url).success(function(data) {
//       deferred.resolve(data);
//     }).error(function() {
//       deferred.reject("Error!")
//     });
//
//     return deferred.promise;
//   }
//
//   return omdbservice;
// }]);
