/**
 * Created by Tobaly on 1/11/2018.
 */

angular.module('favsaveApp')
  .controller('ListCtrl', function ($scope,$countryService) {

    // Pager vars
    $scope.itemsPerPage = 15;
    $scope.currentPage = 0;
    $scope.currentIndex = 0;
    $scope.pages = [];

    // Filters vars
    $scope.orderByFilter = 'name';


    $scope.setPage = function(index) {
      $scope.currentIndex = index * $scope.itemsPerPage;
    };

    $scope.setFilter = function() {
      if($scope.orderByFilter == 'name') {
        $scope.orderByFilter = '-name';
      }
      else {
        $scope.orderByFilter = 'name';
      }
    };

    $countryService.getCountries().then(function(data){
      $scope.countryList = data;
      for (var i = 0; i <= Math.ceil($scope.countryList.length / $scope.itemsPerPage) - 1; i++) {
        $scope.pages.push(i + 1);
      }
    });

  });
