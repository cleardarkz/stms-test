'use strict';

angular.module('favsaveApp')
  .controller('FavsCtrl', function ($scope,$countryService) {
    $countryService.getCountries().then(function(data){
      $scope.countryList = data;
    });

  });
