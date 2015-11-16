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
        $scope.result = [];
        $http
            .get('/address_call', {
                params: {
                    person: $scope.data.address
                }
            })
            .success(function(data) {
                console.log(data);
                $scope.result = data
            }
        );
    }

}]);