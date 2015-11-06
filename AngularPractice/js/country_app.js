var countryApp = angular.module('countryApp', []);

countryApp.controller("CountryController", function($scope, CountryService){
    console.log('Starting country controlle');
   $scope.countries = [];
   CountryService.getAllCountries(function(countries){
      $scope.countries = countries;
   },
       function(err) {
       alert('Error in retriveing country data ', err);
   }); 
});

countryApp.factory('CountryService', function($http){
    
    function getAllCountries(onSuccess, onFailure) {
        $http.get('json/countries.json')
        .success(onSuccess);
    }
    
    return {
        getAllCountries: getAllCountries
    };
});

