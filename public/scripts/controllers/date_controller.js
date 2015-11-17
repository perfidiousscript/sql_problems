dbApp.controller('DateController', ['$scope','$http',function($scope,$http){
    $scope.data = {
        name : null,
        after : null,
        before : null
    };

    $scope.getDate = function(){
        $scope.result = [];
        $http
            .get('/date_call', {
                params: {
                    name: $scope.data.name,
                    after: $scope.data.after,
                    before: $scope.data.before
                }
            })
            .success(function(data) {
                console.log(data);
            }
        );
    }

}]);