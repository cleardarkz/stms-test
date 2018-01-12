/**
 * Created by Tobaly on 1/11/2018.
 */


angular.module('favsaveApp').factory('$countryService',['$http','$q', function($http,$q) {
  var service = [];
  var COUNTRIES_API_ENDPOINT = "https://restcountries.eu/rest/v2/all";
  var _countryList = [];

  service.getCountries = function() {

    // Get data and store in memory. If data requested again, serve from "memcache" to maintain data integrity throughout
    // application lifecycle
    var defer = $q.defer();

    if(_countryList.length == 0) {
      $http.get(COUNTRIES_API_ENDPOINT, {cache: 'true'})
        .then(function (data) {
          _countryList = data.data;
          defer.resolve(data.data);
        });
    }
    else {
      defer.resolve(_countryList);
    }

    return defer.promise;
  };

  return service;
}]);
