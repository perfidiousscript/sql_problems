/**
 * Created by samuelmoss on 11/16/15.
 */
dbApp.controller('AddressController', ['$scope','$http', function($scope,$http){
    $scope.data = {
        address : null,
        return : null
    };

    //$scope.dataLog = function(){
    //    console.log($scope.data.address);
    //};
    //$scope.thing = "string";

    $scope.getAddress = function(){
        $http
            .get('/address_call', {
                params: {
                    person: $scope.data.address
                }
            })
            .success(function(data) {
                $scope.data.return = data
            }
        );
    }

}]);